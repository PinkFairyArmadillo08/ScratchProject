const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

/************************ USERS (sign-up/log-in) *******************************/
//signup username and password
router.post('/signUp', userController.signUp, (req, res) => {
  console.log('user created222')
  return res.status(201).send(res.locals.newUser);
});


module.exports = router;