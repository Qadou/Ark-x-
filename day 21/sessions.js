// Import required modules
const express = require('express');
const session = require('express-session');

// Create an Express app
const app = express();

// Configure session middleware
app.use(
  session({
    secret: 'mySecretKey', // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: true // Whether to save uninitialized sessions (new but not modified)
  })
);

// Define a route to set a session variable
app.get('/set-session', (req, res) => {
  req.session.username = 'Said'; // Set the value of the 'username' session variable
  res.send('Session variable set');
});

// Define a route to get the session variable
app.get('/get-session', (req, res) => {
  const username = req.session.username; // Get the value of the 'username' session variable
  res.send(`Username: ${username}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});