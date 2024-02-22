const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, httpOnly: true } // Secure: HttpOnly and Secure flags set
}));

app.get('/set-session', (req, res) => {
  req.session.user = 'username';
  res.send('Session set');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
  