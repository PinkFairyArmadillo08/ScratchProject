const express = require('express')
const userController = require('../controller/userController');
const cookieController = require('../controller/cookieController');
const sessionController = require('../controller/sessionController');
const router = express.Router();


//verify user and then set cookie to have username inside cookie.userName property
router.post('/', 
  userController.verifyUser, 
  cookieController.setCookie, 
  cookieController.setCookieSSID,
  /* sessionController.startSession, */
  (req, res) => {
    // console.log('created session')
	  return res.status(200).send(res.locals.userExists);
  }
);
  
  module.exports = router;