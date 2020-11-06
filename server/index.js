const express = require('express');
const path = require('path');

const PORT = 3102;
const app = express();

app.use(express.static(__dirname + '/../dist'));

app.use('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
