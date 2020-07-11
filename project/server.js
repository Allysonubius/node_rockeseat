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
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with',
        url: 'https://github.com/facebook/react-native'
    })

    return res.send('Hello World')
});

// Port
app.listen(3001);