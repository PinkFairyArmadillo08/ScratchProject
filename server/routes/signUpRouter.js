const express = require('express')
const userController = require('../controller/userController');
const router = express.Router();

router.post('/', userController.signUp, (req, res) => {
  return res.status(201).json(res.locals.newUser);
});

module.exports = router;