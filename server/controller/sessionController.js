const Session = require ('../model/model');
const sessionController = {};

sessionController.startSession = (req, res, next) => {
  //write code here
  try {
    const id = res.locals.userObject._id
    console.log('id from session!', id)
    
     Session.create({cookieId: id}, (err, session) => {
      console.log('session created at id:', id)
      res.locals.newSession = session;
      console.log('done creating ')
    })
    return next();
  } catch(err) {
    return next(err)
  }

};

module.exports = sessionController;
