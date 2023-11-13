import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput.jsx';
import { saveBar } from './globalHandlers.js';

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
  const infoSaver = saveBar(info, setInfo);
  //handler function to submit login information to server
  function loginClick() {
    //base case if either fields are empty: do nothing
    console.log(info.userName)
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
          setInfo({ userName: '', password: '' });
          document.getElementById('userName').value = '';
          document.getElementById('password').value = '';
        }
      });
  }

  /*************************RENDER COMPONENT************************************************** */
  return (
    <div className={`Login ${shake}`}>
      <img id='armadillo' src="https://ih1.redbubble.net/image.1493956700.7211/st,small,507x507-pad,600x600,f8f8f8.jpg" />
      <h1>WELCOME TO HABIT BUILDER</h1>
      {/* conditional render for incorrecly entered login information */}
      {loginSucess ? <p></p> : <p>*Invalid username and password</p>}
      {/* USERNAME INPUTBAR */}
      <LoginInput id="userName" saveBar={infoSaver} type="text" />
      {/* PASSWORD INPUT BAR */}
      <LoginInput id="password" saveBar={infoSaver} type="password" />
      {/* Buttons to redirect to SignUpPage and HomePage */}
      <div className="LoginPageButtons">
        <button onClick={() => navigate('/signup')}>Signup</button>
        <button onClick={loginClick}>Login</button>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
