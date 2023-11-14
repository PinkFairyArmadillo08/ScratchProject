const express = require('express');
const habitController = require('../controller/habitController.js');
const router = express.Router();

/******************************* HABITS *********************************/
//receive (habit,cue,reward text) and put these into mongodb database
router.post('/add', habitController.addHabit, (req, res) => {
  console.log('added');
  return res.status(201).send('habit created successfully');
});
//make sure we can habit data from the database
router.get('/get', habitController.getHabits, (req, res) => {
  return res.status(200).json(res.locals.allHabits);
});

module.exports = router;
