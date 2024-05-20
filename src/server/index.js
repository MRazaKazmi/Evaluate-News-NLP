var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.static('dist'))

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
const apiKey = process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// POST Route
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
app.post('/api', async (req, res) => {
    try{
        const response = await fetch(`${baseUrl}?key=${apiKey}&url=${req.body.url}&lang=en`);
        const data = await response.json();
        res.send(data);
    }catch(error){
        console.log('error:', error);
    }
})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


