// Requiring module
const express = require('express');
const path = require('path');

// Creating express object
const app = express();

// Handling GET request
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
})

// Port Number
const PORT = process.env.PORT ||3000;

// Server Setup
app.listen(PORT);

//app.listen(PORT, -----------------------------
console.log(`Server started on port ${PORT}`);
