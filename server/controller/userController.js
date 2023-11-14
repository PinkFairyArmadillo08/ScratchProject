const models = require('../model/model.js');
const { User } = models;

const userController = {};

//get one user function
userController.getOneUser = async (req, res, next) => {
  const userName = req.params.name;
  try {
    const oneExistingUser = await User.find({ userName: userName });
    res.locals.oneExistingUser = oneExistingUser;
    next();
  } catch (err) {
    next({
      error: 'error in getOneUser middleware',
      message: 'cannot get user at the moment',
    });
  }
};

//signup function
userController.signUp = async (req, res, next) => {
  const { userName, password } = req.body;
  // console.log(userName, password);
  try {
    const newUser = await User.create({
      userName: userName,
      password: password,
      // habits: expected to return array of subdocs from habits collection with matching userName
    });
    res.locals.newUser = true;
  } catch (err) {
    next({
      error: 'error in addHabit',
      message: 'cannot create habit',
    });
  }
  return next();
};

//login function
userController.verifyUser = async (req, res, next) => {
  const { userName, password } = req.body;

  const userExists = await User.findOne({ userName: userName });

  if (!userExists) {
    //send false response
    res.locals.userExists = false;
    next();
  } else {
    // check if password given by user, is equal to password in database
    if (userExists.password === password) {
      // console.log("log-in successful inside verify user middleware");
      res.locals.userExists = true;
      res.locals.userObject = userExists; // passing down the userName
      // redirect to homepage
      return next();
      // if password does not match, send error
    } else {
      res.locals.userExists = false;
      return next();
    }
  }
};

module.exports = userController;
