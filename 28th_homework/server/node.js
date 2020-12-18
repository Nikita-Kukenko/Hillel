var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const { response } = require("express");
var { read, write } = require('./helper/index.js');

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
    res
      .send(data)
  });
});

app.post("/products", function (req, res) {
  write('./models/products.json', req.body, (err) => {
      if (err) {
        console.error(err)
        return;
      }
    })
});