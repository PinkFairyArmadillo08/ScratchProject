const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/build', express.static(path.join(__dirname, '../build')));

/*********************LOAD PAGES**************************************** */
//main page get. send them the html file
app.post('/login', (req, res) => {
  const { userName, password } = req.body;
  return res.status(200).json(userName == 'Mitch' && password == 'Wen');
});
app.post('/signup', (req, res) => {
  const { userName, password } = req.body;
  return res.status(200).json(true);
});

app.get('/habit/get', (req, res) => {
  console.log('getting habits from the data base!')
  return res.status(200).json([{"habitName": "a", 'cue': 'a', 'reward': 'a'}, {'habitName': 'b', 'cue': 'b', 'reward': 'b'}, {'habitName': 'c', 'cue': 'c', 'reward': 'c'}, {'habitName': 'd', 'cue': 'd', 'reward': 'd'}, {'habitName': 'e', 'cue': 'e', 'reward': 'e'}])
})

app.get('/*', (req, res) => {
 return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
// {"habitName": "a", 'cue': 'a', 'reward': 'a'}, {'habitName': 'b', 'cue': 'b', 'reward': 'b'}, {'habitName': 'c', 'cue': 'c', 'reward': 'c'}, {'habitName': 'd', 'cue': 'd', 'reward': 'd'}, {'habitName': 'e', 'cue': 'e', 'reward': 'e'}])

app.post('/habit/add', (req, res) => {
  console.log('in the post request on the server')
  return res.status(200).json(req.body)
});

//start up server on PORT
app.listen(PORT, () => {
 console.log(`Server listening on port: ${PORT}`);
});
module.exports = app;