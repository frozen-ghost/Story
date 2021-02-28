const express = require("express");

const app = express();

app.get("/", function(req, res){
  alert("<h1> Hello Thrererere! </h1>");
});

app.listen(3000, function(){
  console.log("3000 picked up your signal!");
});
