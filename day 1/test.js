const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle the answer using a callback
function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer); // Execute the callback with the user's answer
  });
}

// Usage example
askQuestion("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the Readline interface
});