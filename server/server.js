const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

//use cors middleware and json parser to make sure we received json formaty
app.use(cors());
app.use(express.json());

//make sure we can read static file in the build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

/****************************Require Router *******************************/
const habitControllerRouter = require('./routes/habitRouter.js');
const userControllerRouter = require('./routes/userRouter.js');
const signUpControllerRouter = require('./routes/signUpRouter.js');
const logInControllerRouter = require('./routes/logInRouter.js')

/*********************Main page load**************************************** */
//main page get. send them the html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


/****************************Route handler *******************************/
app.use('/habit', habitControllerRouter);
app.use('/user', userControllerRouter);
app.use('/signup', signUpControllerRouter);
app.use('/login', logInControllerRouter);


/************************ ERROR handling! *******************************/
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
