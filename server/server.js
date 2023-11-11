const express = require('express');
const path = require('path');
const cors = require('cors');
const habitController = require('./controller/habitController.js')

const app = express();


const PORT = 3000;
console.log('dirname', __dirname)

app.use(cors());
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

/*********************LOAD PAGES**************************************** */
//main page get. send them the html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/addHabit', habitController.addHabit, (req, res) => {
  console.log('added')
  return res.status(201).send('habit created successfully');
})

app.get('/getHabits', habitController.getHabits, (req, res) => {
  return res.status(200).json({"user1": res.locals.allHabits});
})

//start up server on PORT
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
