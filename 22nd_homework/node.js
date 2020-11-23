var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules

console.log(express, "express");
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

const port = 3003;

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});

app.get('/', function(req, res){
  console.log('work!!!');
});


const data = [
  { name: "Nikita", age: 10 },
  { name: "Marina", age: 9 },
  { name: "Yura", age: 30 },
  { name: "Sasha", age: 20 },
  { name: "Valera", age: 15 },
  { name: "Lera", age: 12 },
  { name: "Alisa", age: 22 },
];

app.get("/candidates", function (req, res) {
  console.log("THIS PATH - /candidates")
  res.status(200);
  res.send(data);
});