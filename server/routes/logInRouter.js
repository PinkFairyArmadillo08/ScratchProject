const express = require('express')
const userController = require('../controller/userController');
const router = express.Router();

router.post('/', userController.verifyUser, (req, res) => {
	return res.status(200).send(res.locals.userExists);
  });
  
  module.exports = router;