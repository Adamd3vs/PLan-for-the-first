console.log("to start web server");
const express = require("express");
const app = express();
const http = require("http")


// 1 /kirish codes 
// expressga kirib kelyotgan malumotlarga bogliq bolgan kodlarimiz yoziladi
app.use(express.static("public"));//public folderni clientlarga ochib beramiz 
app.use(express.json()); //bu operation expressjson dagini object holatiga ugurib beradi 
app.use(express.urlencoded({extended:true}));//traditional form request form dan post qilsak expres server qabul qiladi buni yozmasak form dan info qabul qilmaydi 


// 2:session

// 3backandda html yasab front ga yuborish views ga bogliqq
app.set("views ", "views");
app.set("view engine", "ejs");//ejs orqali html yasaymiz backda 


// 4 routing codes 
app.get("/hello", function(req, res ){
    res.end(`<h1 style="background: red"> Hello world by Adam</h1>`);
}) ;
app.get("/gift", function(req, res ){
    res.end(`<h1 style="background:red"> You are in the page of gifts`);
}) ;
// http bu bizning core modulimiz 

const server = http.createServer(app);

let PORT = 3000; 

server.listen(PORT, function ( )  {
    console.log(`ThE server is running succesfully on port ${PORT}`)
});