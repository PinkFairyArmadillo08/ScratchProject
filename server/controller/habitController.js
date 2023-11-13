const models = require('../model/model.js');
const { Habits } = models

const habitController = {};

habitController.addHabit = (req, res, next) => {
  const {habitName, cue, rewards} = req.body;
  try {  
    Habits.create({
      habitName,
      cue,
      rewards
    })
    next()
  }
 
  catch(err) {
    next({
      error: 'error in addHabit',
      message: 'cannot create habit'
    })
  } 
}

habitController.getHabits = async (req, res, next) => {
  try {
    const allHabits = await Habits.find({})
    console.log('allhabits', allHabits); // returns array of objects

    res.locals.allHabits = allHabits;
    next()
  }

  catch(err) {
    next({
      error: 'error in addHabit',
      message: 'cannot create habit'
    })
  }
}

module.exports = habitController;