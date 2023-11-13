const models = require('../model/model.js');
const { User } = models

const userController = {};

//get one user function
userController.getOneUser = async (req, res, next) => {
  const userName = req.params.name
  try {
    const oneExistingUser = await User.find({userName:userName})
    res.locals.oneExistingUser = oneExistingUser;
    next()
  }

  catch(err) {
    next({
      error: 'error in getOneUser middleware',
      message: 'cannot get user at the moment'
    })
  }
}

//signup function
userController.signUp = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    const newUser = await User.create({
      userName:userName,
      password:password
    })
    res.locals.newUser = newUser;
  } catch (err) {
    next({
      error: 'error in addHabit',
      message: 'cannot create habit'
    })
  }
  return next();
}

module.exports = userController;