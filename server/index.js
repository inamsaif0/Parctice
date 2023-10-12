const express = require("express");

// Import modules or libraries
// const http = require('http');

// Create a simple HTTP server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!\n');
// });

// Define the port the server will listen on
const app = express();

const port = process.env.PORT || 3000;

app.get('/data', async (req, res) => {
    res.send('hello world')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
