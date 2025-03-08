
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://adam:bW3K4e3kI90rtU5O@cluster0.gck2i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Plan";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      //   console.log(client);
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 6009;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);