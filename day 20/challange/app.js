const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(csurf({ cookie: true }));

app.get('/', (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/login', [
  body('username').notEmpty().withMessage('Username cannot be empty'),
  body('password').notEmpty().withMessage('Password cannot be empty')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('index', { csrfToken: req.csrfToken(), errors: errors.array() });
  }

  const { username, password } = req.body;

  // Authentication logic
  if (username === 'admin' && password === 'password') {
    req.session.isAuthenticated = true;
    const token = jwt.sign({ username: req.body.username }, 'secret-key', { expiresIn: '2h' });
    res.cookie('jwt', token);
    res.redirect('/dashboard');
  } else {
    res.redirect('/');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.isAuthenticated) {
    const token = req.cookies.jwt;
    jwt.verify(token, 'secret-key', (err, decoded) => {
      if (err) {
        res.redirect('/');
      } else {
        res.render('dashboard', { username: decoded.username });
      }
    });
  } else {
    res.redirect('/');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
