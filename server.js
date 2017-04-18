const express = require('express');
const bodyParser = require('body-parser');
const YodaSpeak = require('yoda-speak');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('Example app listening on localhost:' + PORT);
});

let yoda = new YodaSpeak('2ZdLUzroC6mshVRTRBvJfsvCUzdYp16MK46jsnRHSID15Kx5W2');

yoda.convert(
  "I'm really happy for you, and I'm going to let you finish, but this is the best Node package of all time.",
  function(err, result) {
    if (!err) {
      console.log(result.toString());
    } else {
      console.log(err);
    }
  }
);

module.exports = app;
