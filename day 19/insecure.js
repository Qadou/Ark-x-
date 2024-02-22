// // Node.js and Express server code demonstrating unsafe data handling for database interaction
// const express = require('express');
// const app = express();

// // Simulated database object
// let database = {};

// // Middleware to parse request body
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// app.post('/register', (req, res) => {
//   // User input is directly assigned without validation or sanitization
//   let username = req.body.username;
//   let email = req.body.email;

//   // Simulating saving data to a 'database'
//   database[email] = { email: email };

//   res.send(`User ${username} registered with email ${email}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
