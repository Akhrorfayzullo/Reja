console.log(`Let's start Server`);
// npm  install express --save
const express = require("express");

const app = express();
const fs = require("fs");
const { Module } = require("module");

//MongoDB connect
const db = require("./server").db();
// console.log("app:", db[0]);

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
  console.log("user entered /create-item");
  // res.end("working");
  const new_reja = req.body.reja;
  // console.log("new_plan: ", new_plan);
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("went smth wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/", (req, res) => {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("(app.get/) something went wrong");
      } else {
        console.log("Collection Data: ", data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

// npm i nodemon

module.exports = app;
