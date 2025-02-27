const http = require("http");
const app = require("./app");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://debugAdam:Esa11nov25@debugadam.b6chi.mongodb.net/reja";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }, 
    (err,client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else{
            console.log("mongodb connection succeed");
           module.exports = client;
            const server = http.createServer(app);  

let PORT =3000;  
 
server.listen(PORT, function ( )  {
    console.log(`The server is running succesfully on port ${PORT}, http://localhost:${PORT}`)
}); 
    
        }
    } 
);



