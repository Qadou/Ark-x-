const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const { body, validationResult } = require('express-validator');

const app = express();

const path = require('path');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(csurf({ cookie: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

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
      res.redirect('/dashboard');
    } else {
      res.redirect('/');
    }
  });

app.get('/dashboard', (req, res) => {
  // Secure the dashboard route to only allow authenticated users
  if (req.session.isAuthenticated) {
    res.render('dashboard');
  } else {
    res.redirect('/');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});