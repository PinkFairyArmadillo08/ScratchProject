import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  /***************************STATES*************************************************/
  const [loginSucess, setLoginSucess] = useState(true); //LOGIN STATUS
  const [login, setLogin] = useState({ userName: '', password: '' }); //ENTRY FORM INFO FOR LOGIN
  const [attempts, setAttempts] = useState(0); //LOGIN ATTEMPTS > FOR LOCK OUT (stretch)

  //React-router hook to change paths
  const navigate = useNavigate();
  //varibable to shake login when wrong
  let shake = loginSucess ? '' : `shake${attempts % 2}`;
  /************************HANDLER FUNCTIONS****************************************/
  //Updating the inputs from userName and password stored as states
  const populateLogin = (event) => {
    setLogin(Object.assign(login, { [event.target.id]: event.target.value }));
  };

  //handler function to submit login information
  const loginClick = () => {
    //base case if both fields are empty: do nothing
    console.log(login.userName == '' || login.password == '');
    if (login.userName == '' || login.password == '') return;
    //POST request to see if user info is correct.
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: login.userName,
        password: login.password,
      }),
    })
      //data should come back as boolean
      //if true go to HomePage; false set the loginSucess to false
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          navigate('/home');
        } else {
          setLoginSucess(false);
          setAttempts(attempts + 1);
          //clear the input blocks
          document.getElementById('userName').value = '';
          document.getElementById('password').value = '';
        }
      });
  };

  /*************************RENDER COMPONENT************************************************** */
  return (
    <div className={`Login ${shake}`}>
      <h1>WELCOME TO HABIT BUILDER</h1>
      <div id="usernameInput">
        {/* conditional render for incorrecly entered login information */}
        {loginSucess ? <p></p> : <p>*Invalid username and password</p>}
        {/* USERNAME INPUTBAR */}
        <input
          id="userName"
          type="text"
          placeholder="username"
          onChange={(e) => populateLogin(e)}
        />
      </div>
      {/* PASSWORD INPUT BAR */}
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => populateLogin(e)}
      />
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
