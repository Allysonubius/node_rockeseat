const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Init App
const app = express();

// Init DB
mongoose.connect(
    "mongodb://localhost:3001/node_api", {
        useUnifiedTopology: true
    }
);
//URLS
requireDir('./src/models');

const Product = mongoose.model('Product');

// 1° route
app.use("/api", require("./src/route/routes"))

// Port
app.listen(3001);