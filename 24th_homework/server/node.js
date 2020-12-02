var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
const { response } = require("express");

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


function getUserId(user, usersData) {
  var userId;

  usersData.forEach(item => {
    var check = user.login === item.login && user.password === item.password;
    if(check) {
      userId = item.id;
    }
  });

  return userId;
}

app.post('/', function(req, res) {
  var usersInfo = require('./users.json');
  var person = JSON.parse(req.body);
  var id = getUserId(person, usersInfo);

  if(id) {
    res
      .status(200)
      .send({ id })
  } else {
    res
      .status(401)
      .send('Unauthorized');
  }
});

app.post('/sopping-list', function(req, res) {
  var soppingListId = JSON.parse(req.body);
  var soppingList = require(`./goods/${soppingListId.id}.json`);
  
  if(soppingList) {
    res
      .status(200)
      .send(soppingList)
  } else {
    res
      .status(404)
      .send('Not found')
  }
});