// Secured Node.js and Express server against XSS
const express = require('express');
const escapeHtml = require('escape-html');
const app = express();

app.get('/', function(req, res){
  // Escaping user input to prevent XSS
  res.send('<html><body><h1>' + escapeHtml(req.query.userInput) + '</h1></body></html>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
