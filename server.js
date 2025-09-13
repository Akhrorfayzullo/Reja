console.log(`Let's start Server`);
// npm  install express --save
const express = require("express");
const http = require("http");
const app = express(); // This creates your web server using Express.

// 1  kirish kods

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session code ?

// 3  Views code  npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4 for routers  , Routing code
app.get("/", function (req, res) {
  res.end("hello world By ME");
});
app.get("/gift", function (req, res) {
  res.end(`<h1>You came to my page</h1>`);
});

const server = http.createServer(app);
// Tells Express to use EJS, a tool for making dynamic HTML pages.

let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Yeey It is working successfully on port ${PORT}`);
});

// npm i nodemon
