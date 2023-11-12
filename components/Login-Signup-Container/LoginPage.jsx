import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const verifiedUser = { Mitch: 'Wen' };

const LoginPage = () => {
  //React-router hook to change paths
  const navigate = useNavigate();

  /***************************STATES*************************************************/
  const [loginSucess, setLoginSucess] = useState(true); //LOGIN STATUS
  const [login, setLogin] = useState({ userName: '', password: '' }); //ENTRY FORM INFO FOR LOGIN

  /************************HANDLER FUNCTIONS****************************************/
  //Updating the inputs from userName and password stored as states
  const populateLogin = (event) => {
    setLogin(Object.assign(login, { [event.target.id]: event.target.value }));
  };

  //handler function to submit login information
  const loginClick = () => {
    //base case if both fields are empty: do nothing
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
      .then((data) => data.json)
      .then((data) => {
        data ? navigate('/home') : setLoginSucess(false);
      });
  };

  /*************************RENDER COMPONENT************************************************** */
  return (
    <div className="Login">
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
        <button id="LoginButton" onClick={() => navigate('/signup')}>
          Signup
        </button>
        <button id="SignupButton" onClick={loginClick}>
          Login
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
