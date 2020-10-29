const express = require('express');

const PORT = 3102;
const app = express();

app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => console.log('listening on port', PORT));
