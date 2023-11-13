const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

/************************ USERS (sign-up/log-in) *******************************/
//get user
router.get('/:name', userController.getOneUser, (req,res) => {
  return res.status(201).send(res.locals.oneExistingUser);
})
//signup username and password
router.post('/signUp', userController.signUp, (req, res) => {
  return res.status(201).send(res.locals.newUser);
});


module.exports = router;