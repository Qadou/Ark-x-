const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

app.post('/users', (req, res) => {
  res.send('User created successfully!');
});

app.put('/users/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} updated successfully!`);
});

app.delete('/users/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} deleted successfully!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});