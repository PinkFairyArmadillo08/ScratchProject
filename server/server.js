const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/build', express.static(path.join(__dirname, '../build')));

/*********************LOAD PAGES**************************************** */
//main page get. send them the html file
app.get('/*', (req, res) => {
 return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.post('/login', (req, res) => {
 const { userName, password } = req.body;
 return res.status(200).json(userName == 'Mitch' && password == 'Wen');
});
app.post('/signup', (req, res) => {
 const { userName, password } = req.body;
 return res.status(200).json(true);
});
//start up server on PORT
app.listen(PORT, () => {
 console.log(`Server listening on port: ${PORT}`);
});
module.exports = app;