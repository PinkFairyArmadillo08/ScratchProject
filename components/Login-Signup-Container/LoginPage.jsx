import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const verifiedUser = { Mitch: 'Wen' };

const LoginPage = () => {
  const [loginSucess, setLoginSucess] = useState(true);


  //handler function to sumbit login information
  const loginClick = () => {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    //base case if both fields are empty: do nothing
    if (username == '' && password == '') return;

    //GET request to see if user info is correct.
    // fetch('/login')
    // .then(data => data.json)
    // .then(data =>{
    //    //if invalid set the loginSucess to false
    // if (verifiedUser[username] !== password) setLoginSucess(false);

    //  })

    //if invalid set the loginSucess to false
    if (verifiedUser[username] !== password) setLoginSucess(false);
    else setLoginSucess(true);
  };

  //buttons to redirect to signup page and home page
  return (
    <div className="Login">
      <h1>WELCOME TO HABIT BUILDER</h1>
      <div id="usernameInput">
        {loginSucess ? <p></p> : <p>*Invalid username and password</p>}
        <input id="loginUsername" type="text" placeholder="username" />
      </div>
      <input id="loginPassword" type="password" placeholder="password" />
      <div className="LoginPageButtons">
        <Link to={'/signup'}>
          <button id="LoginButton">Signup</button>
        </Link>
        <button onClick={loginClick}></button>
        <Link to={'/home'}>
          <button id="SignupButton">Login</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
