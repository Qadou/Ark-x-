// Node.js and Express server vulnerable to XSS
const express = require('express');
const app = express();

app.get('/', function(req, res){
  // Rendering user input directly, leading to XSS vulnerability
  res.send('<html><body><h1>' + req.query.userInput + '</h1></body></html>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
