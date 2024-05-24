const app = require("./app");
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://alion:Dongseouz1$@cluster0.rfkmznm.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlTopology: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on MongoDB");
    else {
      console.log("Connected to MongoDB");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Yeey It is working successfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
