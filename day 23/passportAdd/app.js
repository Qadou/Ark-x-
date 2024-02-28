const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const googleStrategy = require('./choices/googleStrategy');
const twitterStrategy = require('./choices/twitterStrategy');
const facebookStrategy = require('./choices/facebookStrategy');

const app = express();

// Middleware for JSON request parsing
app.use(express.json());

// Middleware for session management
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Register strategies
passport.use(googleStrategy);
passport.use(twitterStrategy);
passport.use(facebookStrategy);

// Load routes
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
