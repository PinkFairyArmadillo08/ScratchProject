const models = require('../model/model.js');
const { User } = models

const userController = {};

//signup function
userController.signUp = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    const newUser = await User.create({
      userName,
      password 
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