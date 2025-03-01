// console.log("to start web server");
// const express = require("express");
// const app = express();

// const fs = require("fs");


// // mongoDB connect 
//  const db = require("./server").db();

// // let user;
// // fs.readFile("database/user.json", "utf8", (err,data)=> {
// //     if(err) {
// //         console.log("ERROR:",err);
// //     }else {
// //         user = JSON.parse(data)
// //     }
// // });

// // 1 /kirish codes 
// // expressga kirib kelyotgan malumotlarga bogliq bolgan kodlarimiz yoziladi

// app.use(express.static("public"));//public folderni clientlarga ochib beramiz 
// app.use(express.json()); //bu operation expressjson dagini object holatiga ugurib beradi 
// app.use(express.urlencoded({extended:true}));//traditional form request form dan post qilsak expres server qabul qiladi buni yozmasak form dan info qabul qilmaydi 

 
// // 2:session

// // 3backandda html yasab front ga yuborish views ga bogliqq
// app.set("views", "views");
// app.set("view engine", "ejs");//ejs orqali html yasaymiz backda 
 

// 4 routing codes 
 
// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     const new_reja = req.body.reja; 
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             res.end("successfully added");
//         }
//     });

// });   
 
// app.get('/author', (req, res) => {
//     res.render("author",{user: user });   
// })
// app.get("/hello", function(req, res ){
//     res.end(`<h1 style="background: red"> Hello world by Adam</h1>`);
// }) ;   
// app.get("/gift", function(req, res ){
//     res.end(`<h1 style="background:red"> You are in the page of gifts`);
// }) ;  
// app.get("/", function(req, res ){  
//     db.collection("plans").find().toArray((err,data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             console.log(data);
//             res.render("reja");
//         }
//     })
//     res.render("reja");
// }) ; 
// // http bu bizning core modulimiz 
 
// module.exports = app;

// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     console.log("user entered /create-item");
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("Something went wrong");
//       } else {
//         res.end("Successfully added");
//       }
//     });
//   });
  
//   app.get("/author", function (req, res) {
//     res.render("author", { user: user });
//   });
//   app.get("/", function (req, res) {
//     console.log("user entered /");
//     db.collection("plans")
//       .find()
//       .toArray((err, data) => {
//         if (err) {
//           console.log(err);
//           res.end("something went wrong");
//         } else {
//           console.log(data);
//           res.render("reja", { items: data });
//         }
//       });
//   });
  
//   module.exports = app;

console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
// MongoDB chaqirish
const db = require("./server").db();

// 1 kirish code
app.use(express.static("public")); //har qanday brauserdan kirilganda public folderi ochiq degani
app.use(express.json()); //  json formatdagi datani object formatga o'girib beradi
app.use(express.urlencoded({ extended: true })); // HTML dan form requiest qilib beradi
// 2 Session

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs"); // EJS da backend orqali frontedni yasaymiz

// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("Successfully added");
    }
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;