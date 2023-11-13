const express = require('express');
const path = require('path');
const cors = require('cors');
const habitController = require('./controller/habitController.js');
const userController = require('./controller/userController.js');

const app = express();


const PORT = 3000;
console.log('dirname', __dirname)

//use cors middleware and json parser to make sure we received json formaty
app.use(cors());
app.use(express.json());

//make sure we can read static file in the build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

/*********************LOAD PAGES**************************************** */
//main page get. send them the html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
/************************ USERS (sign-up/log-in) *******************************/
//signup username and password
app.post('/signUp', userController.signUp, (req, res) => {
  console.log('user created222')
  return res.status(201).send(res.locals.newUser);
});

/******************************* HABITS *********************************/
//receive (habit,cue,reward text) and put these into mongodb database
app.post('/addHabit', habitController.addHabit, (req, res) => {
  console.log('added')
  return res.status(201).send('habit created successfully');
})
//make sure we can habit data from the database
app.get('/getHabits', habitController.getHabits, (req, res) => {
  return res.status(200).json({"user1": res.locals.allHabits});
})

// catch-all route handler for any requests to an unknown route
app.use('*', (req,res) => {
  // res.statusMessage = 'Page does not exist';
  res.statusCode(404);
}
);

//write global error handler
app.use((err,req,res,next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  let errorObj = {...defaultErr, ...err}; //override default error with new error
  //send this message to our users
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));  
});

//start up server on PORT
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
