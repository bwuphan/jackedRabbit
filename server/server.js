'use strict';

// const express = require('express');

// // Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;