import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InputBar from './InputBar.jsx';

const LoginPage = () => {
  /***************************STATES*************************************************/
  const [loginSucess, setLoginSucess] = useState(true); //LOGIN STATUS
  const [info, setInfo] = useState({ userName: '', password: '' }); //ENTRY FORM INFO FOR LOGIN
  const [attempts, setAttempts] = useState(0); //LOGIN ATTEMPTS > FOR LOCK OUT (stretch)

  //React-router hook to change paths
  const navigate = useNavigate();
  //css class to shake login when wrong
  let shake = loginSucess ? '' : `shake${attempts % 2}`;

  /************************HANDLER FUNCTIONS****************************************/
  //saving the inputs values to be associated states properties to be invoked 'onChange'
  //@Params {event} - event   :input bar event
  //@Params {object} - state  :the state object in which the input bar will update
  const saveBar = (event, state) => {
    setInfo(Object.assign(state, { [event.target.id]: event.target.value }));
  };

  //handler function to submit login information to server
  const loginClick = () => {
    //base case if either fields are empty: do nothing
    if (info.userName == '' || info.password == '') return;
    //POST request to see if user info is correct.
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: info.userName,
        password: info.password,
      }),
    })
      //expected data value to be boolean
      .then((data) => data.json())
      .then((data) => {
        //if true go to HomePage;
        if (data) {
          navigate('/home');
          //false set the loginSucess to false and clear the input fields
        } else {
          setLoginSucess(false);
          setAttempts(attempts + 1);
          document.getElementById('userName').value = '';
          document.getElementById('password').value = '';
        }
      });
  };

  /*************************RENDER COMPONENT************************************************** */
  return (
    <div className={`Login ${shake}`}>
      <h1>WELCOME TO HABIT BUILDER</h1>
      {/* conditional render for incorrecly entered login information */}
      {loginSucess ? <p></p> : <p>*Invalid username and password</p>}
      {/* USERNAME INPUTBAR */}
      <InputBar id="userName" saveBar={saveBar} state={info} type="text" />
      {/* PASSWORD INPUT BAR */}
      <InputBar id="password" saveBar={saveBar} state={info} type="password" />
      {/* Buttons to redirect to SignUpPage and HomePage */}
      <div className="LoginPageButtons">
        <button id="SignUpButton" onClick={() => navigate('/signup')}>
          Signup
        </button>
        <button id="LoginButton" onClick={loginClick}>
          Login
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
