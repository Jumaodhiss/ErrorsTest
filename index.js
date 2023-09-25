// Require the express module and create an app instance
const express = require('express');
const app = express();

// Require the multer module and create an upload instance
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

// Define a GET route that returns a welcome message
app.get('/', (req, res) => {
res.send('Welcome to my express node.js app!');
});

// Define a POST route that accepts a name parameter and returns a greeting message
app.post('/', (req, res) => {
// Get the name from the request body
const name = req.body.name;
// Send a greeting message with the name
res.send(`Hello, ${name}!`);
});

// Define a POST route that accepts a file and returns its original name and size
app.post('/upload', upload.single('file'), (req, res) => {
// Get the file from the request
const file = req.file;
// Send the file's original name and size
res.send(`You uploaded ${file.originalname}, which is ${file.size} bytes.`);
});

// Listen on port 3000
app.listen(3000, () => {
console.log('Server is running on port 3000');
});