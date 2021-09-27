const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const path = require('path');
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , "/calculadora.html"));
});
app.listen(port);