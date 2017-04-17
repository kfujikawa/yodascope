const express = require('express');
const bodyParser = require('body-parser');
const YodaSpeak = require('yoda-speak');

const PORT = process.env.PORT || 8080;

const app = express();
const key = "aa00f3448140407486d1b7656e79a7f0";

app.use(express.static('build'));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});

// let yoda = new YodaSpeak(key);
 
// yoda.convert("I'm really happy for you, and I'm going to let you finish, but this is the best Node package of all time.",
// function(err, result) {
//     if (!err) {
//         console.log(result.toString());
//     } else {
//         console.log(err);
//     }
// })

// module.exports = app;