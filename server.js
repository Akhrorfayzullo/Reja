console.log(`Let's start Server`);
// npm  install express --save
const express = require("express");
const http = require("http");
const app = express();

// 1  kirish kods

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session code ?

// 3  Views code  npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4 for routers  , Routing code

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });

  // TODO: code with db here
});
// app.get("/", function (req, res) {
//   res.end("hello world By ME");
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1>You came to my page</h1>`);
// });
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);

let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Yeey It is working successfully on port ${PORT}`);
});

// npm i nodemon
