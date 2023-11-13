const models = require('../model/model.js');
const { Habits } = models
const { User } = models;

const habitController = {};
habitController.addHabit = async (req, res, next) => {
  const {habitName, cue, rewards} = req.body;

  // get userName from cookies
  const userNameFromCookies = req.cookies.userName

  try {  
    const newHabit = await Habits.create(
      {
          userName: userNameFromCookies, 
          habitName: habitName,
          cue: cue,
          rewards: rewards
      }
    )
    // console.log('newHabit: ', newHabit)
    // find user with matching userName and update its 'habits' property 
    const habitArr = await Habits.find({userName: userNameFromCookies})
    // console.log('habitArr ', habitArr);
    const updatedUser = await User.findOneAndUpdate(
      { userName: userNameFromCookies }, 
      { habits: habitArr }
    )
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
    // get userName from cookies
    const userNameFromCookies = req.cookies.userName
    // initialise allHabits and find all habits with matching userName
    const allHabits = await Habits.find({userName: userNameFromCookies})
    // save allHabits to res.locals
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