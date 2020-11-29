var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 3003;

function random(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});

app.get('/', function(req, response){
  const value = random(30, 60)

  if (value > 50) {
    response
      .status(200)
      .send({
        success: 'ok',
        value
      })
  } else {
    response
      .status(401)
      .send({
        success: 'error',
        value
      })
  }
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