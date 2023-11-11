const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

/*********************LOAD PAGES**************************************** */
//main page get. send them the html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//start up server on PORT
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
