// Import the Express.js library
const express = require('express')

// Create an instance of the Express application
const app = express();

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Define the port the server will listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
