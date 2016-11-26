const express = require('express');
const path = require('path');
var app = express();
const options = {
  index: "index.html"
};

app.use(express.static(path.join(__dirname, '/'), options));

module.exports = app;
