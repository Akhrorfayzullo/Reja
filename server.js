const http = require("http");
const { MongoClient } = require("mongodb");
const app = require("./app");

const connectionString =
  "mongodb+srv://alion:Dongseouz1@cluster0.rfkmznm.mongodb.net/";
  // mongodb+srv://alion:Dongseouz1@cluster0.rfkmznm.mongodb.net/

MongoClient.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    console.log("✅ Connected to MongoDB");
    module.exports = client;
    // console.log(client.db);
    

    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(
        `🚀 Server running at http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

