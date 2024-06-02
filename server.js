const http = require("http");
const mongodb = require("mongodb");

// let db;
const connectionString =
  "mongodb+srv://alion:Dongseouz1$@cluster0.rfkmznm.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error connecting to MongoDB:", err);
    } else {
      // console.log(client);
      console.log("Connected to MongoDB");
      module.exports = client;

      const app = require("./app");

      const server = http.createServer(app);
      const PORT = 7005;
      server.listen(PORT, () => {
        console.log(
          `Server is running successfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
