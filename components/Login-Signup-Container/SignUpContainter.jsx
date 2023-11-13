import React, { useState, useEffect } from 'react';
import { saveBar } from './globalHandlers.js';
import SucessPopup from './sucessPopup.jsx';
import SignUpPage from './SignUpPage.jsx';

const SignUpContainer = () => {
  /***************************STATES*************************************************/
  const [signUp, setSignUp] = useState({ userName: '', password: '' }); //ENTRY FORM INFO FOR LOGIN
  const [signUpStatus, setSignUpStatus] = useState(false);// STATUS FOR SUCESSFUL SIGNUP

  /*********************************AUXILLARY FUNCTIONS******************************* */
  //@Params {string} - password : string to check
  //@return {string} - returns either 'red' if pass did not pass or 'green' if did pass
  function passCheck(password) {
    const temp = new Set();
    for (let i = 0; i < password.length; i++) {
      const ascii = password.charCodeAt(i);
      //48-57:numerals; 65-90:A-Z; 97-122:a-z
      if (ascii >= 48 && ascii <= 57) temp.add('Number');
      else if (ascii >= 65 && ascii <= 90) temp.add('UpperCase');
      else if (ascii >= 97 && ascii <= 122) temp.add('LowerCase');
      if (temp.size == 3) return 'green';
    }
    return 'red';
  }

  //@Params {string} - password : string to check
  //@params {number} - min, max : the accepatable range inclusive
  //@return {string} - returns either 'red' if pass did not pass or 'green' if did pass
  function lengthCheck(string, min, max) {
    return string.length >= min && string.length <= max ? 'green' : 'red';
  }
  const signupReqs = [];
  signupReqs.push(lengthCheck(signUp.userName, 3, 16));
  signupReqs.push(lengthCheck(signUp.password, 8, 32));
  signupReqs.push(passCheck(signUp.password));

  /************************HANDLER FUNCTIONS****************************************/
  //saving the inputs values to be associated states properties to be invoked 'onChange'
  //@Params {event} - event   :input bar event
  const signUpInput = saveBar(signUp, setSignUp);

  const createAccount = () => {
    //check all requirements met/ do nothing if not met
    for (let i = 0; i < signupReqs.length; i++) {
      if (signupReqs[i] == 'red') return;
    }
    //POST request to add to database
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: signUp.userName,
        password: signUp.password,
      }),
    })
      //expected data value to be boolean
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        //if true show success message;
        if (data) {
          setSignUpStatus(true);
        } else console.log('failed');
      })
      .catch((err) => console.log('error occured'));
  };

  /*************************RENDER COMPONENT************************************************** */
  return (
    <div className={`SignUp`}>
      {/* conditional render the success popup and signup page */}
      {signUpStatus ? (
        <SucessPopup />
      ) : (
        <SignUpPage
          createAccount={createAccount}
          signupReqs={signupReqs}
          signUpInput={signUpInput}
        />
      )}
    </div>
  );
};

export default SignUpContainer;
