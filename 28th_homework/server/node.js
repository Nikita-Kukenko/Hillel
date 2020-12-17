var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const fs = require('fs');
const { response } = require("express");
var { read } = require('./helper/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const port = 3005;

app.listen(port, function () {
    // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

// ---------------------------------------------------------------------- //

app.get("/products", function (req, res) {
  read('./models/products.json', function(error, data) {
    console.log(error, 'erroe');
    res
      .send(data)
  });
});

app.post("/products", function (req, res) {
  const content = req.body;
  const sirializeContent = JSON.stringify(content);
  fs.writeFile('./models/products.json', sirializeContent, (err) => {
    if (err) {
      console.error(err)
      return;
    }
  })
});