const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));

const PORT = 3102;

app.get('/countdown/:bundleId', (req, res) => {
  const dataString = req.params;
  return db.countdownRequest(dataString)
  .then(countdownData => {
    if (countdownData) {
      return countdownData;
    } else {
      res.status(404).send('no such bundleId');
    }
  })
  .then(countdownData => {
    res.send(JSON.stringify(countdownData));
  })
  .catch(err => {
    res.status(500).send('wait and try again', err);
  })
});

app.listen(PORT, () => console.log('listening on port', PORT));
