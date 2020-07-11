const express = require('express');
const mongoose = require('mongoose');

// Init App
const app = express();

// Init DB
mongoose.connect(
    "mongodb://localhost:3001/node_api", {
        useUnifiedTopology: true
    }
);

// 1° route
app.get('/', (req, res) => {
    res.send('Hello World')
});

// Port
app.listen(3001);