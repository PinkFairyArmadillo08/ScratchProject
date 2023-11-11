const models = require('../model/model.js');
const { User } = models

const userController = {};

userController.signUp = async (req, res, next) => {
  const { userName, password } = req.body;
  console.log("INSIDE OF signUp", userName, password)
  
  // User.create({
  //   userName: userName,
  //   password: password
  // }).then((res) => {
  //   console.log("RES", res)
  //   res.locals.newUser = res;
  // }).catch((err) => {
  //   console.log(err)
  // })

  // return next()

  try {
    const newUser = await User.create({
      userName,
      password 
    })

    console.log(newUser)
    res.locals.newUser = newUser;
    console.log('user created!')
    
  } catch (err) {
    next({
      error: 'error in addHabit',
      message: 'cannot create habit'
    })
  }

  return next();
}

module.exports = userController;