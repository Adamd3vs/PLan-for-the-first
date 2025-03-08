
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
const mongodb =require("mongodb");


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
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err,data)=>{
   console.log(data.ops);
    res.json(data.ops[0]);

  });
});

app.post("/delete-item", (req,res) => {
  const id = req.body.id;
  db.collection("plans")
  .deleteOne({_id: new mongodb.ObjectId(id)}, 
  function(err, data){
    res.json({state:"success"});
  });
});

app.post("/edit-item", (req,res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)},
   {$set:{reja:data.new_input}},
    function(err, data ){
      res.json({state:"success"});
    })
  
}) 

app.post("/delete-all", (req,res)=> {
  if(req.body.delete_all) {
    db.collection("plans").deleteMany(function() {
      res.json({state:"all plans will be deleted!!!"});
    });
  }
  else {
    res.json({state: "sorry, there is no data to delete?!"});
  }
});

app.get("/", function (req, res) {
  db.collection("plans")
  .find()
  .toArray((err,data)=> {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    }
    else {
      console.log(data);
      res.render("reja",{ items: data } );
    }
  });
  
  
});

module.exports = app;