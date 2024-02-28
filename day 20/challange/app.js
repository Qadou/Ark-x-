const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(csurf({ cookie: true }));

// Routes
app.get('/', (req, res) => {
  if(req.session.isAuthenticated) res.redirect('/');
  else res.render('index', { csrfToken: req.csrfToken() });
});
app.get('/logout', (req, res) => {
  req.session.isAuthenticated=false;
  res.redirect('/');
})

app.post('/login',
  [
    body('username').notEmpty().withMessage('Username cannot be empty'),
    body('password').notEmpty().withMessage('Password cannot be empty')
  ],
  (req, res) => {
    // Validate and authenticate the user
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If validation errors exist, render the index page with errors
      return res.render('index', { csrfToken: req.csrfToken(), errors: errors.array() });
    }

    // Implement appropriate validation and secure authentication mechanisms here
    // For simplicity, you can use a hardcoded username and password for demonstration purposes

    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
      req.session.isAuthenticated = true;
      const token = jwt.sign({ username: req.body.username }, 'your-jwt-secret');
      res.cookie('jwt', token);
      res.redirect('/dashboard');
    } else {
      res.redirect('/');
    }
  });


  app.get('/dashboard', (req, res) => {
    // Vérification du JWT pour l'accès au tableau de bord
    
    if (req.session.isAuthenticated) {
      const token = req.cookies.jwt;
      jwt.verify(token, 'your-jwt-secret', (err, decoded) => {
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
  console.log('Server started on port 3000');
});