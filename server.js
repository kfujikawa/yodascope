var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

var jsonParser = bodyParser.json();

app.use(express.static('build'));

app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});