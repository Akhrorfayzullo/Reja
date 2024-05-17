console.log(`Let's start Server`);
// npm  install express --save
const express = require("express");
const http = require("http");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

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

  // TODO: code with db her
});

app.get("/", function (req, res) {
  res.render("harid");
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

const server = http.createServer(app);

let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Yeey It is working successfully on port ${PORT}`);
});

// npm i nodemon
