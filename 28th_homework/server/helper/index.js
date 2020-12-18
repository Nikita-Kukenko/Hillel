var fs = require("fs");


var read = function(url, callback) {
    fs.readFile(url, "utf-8", callback);
  }

var write = function(url, content, callback) {
    const sirializeContent = JSON.stringify(content);
    fs.writeFile(url, sirializeContent, callback);
  }

module.exports.read = read;
module.exports.write = write;