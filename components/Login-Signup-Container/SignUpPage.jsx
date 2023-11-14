import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from './InputBar.jsx';

const SignUpPage = ({ createAccount, signupReqs, signUpInput }) => {
  //React-router hook to change paths
  const navigate = useNavigate();

  return (
    <>
      <h1>SignUp</h1>
      {/* USERNAME INPUT BAR */}
      <InputBar id="userName" saveBar={signUpInput} type="text" />
      <ul>
        <li style={{ color: signupReqs[0] }}>
          Must be between 3 and 16 characters long.
        </li>
      </ul>
      {/* PASSWORD INPUT BAR */}
      <InputBar id="password" saveBar={signUpInput} type="password" />
      <ul>
        <li style={{ color: signupReqs[1] }}>
          Must be between 8 and 32 characters long.
        </li>
        <li style={{ color: signupReqs[2] }}>
          Must include at least one number, uppercase letter and lowercase
          letter.
        </li>
      </ul>
      <div className="PageButtons">
        <button id="cancel" onClick={() => navigate('/')}>
          Cancel
        </button>
        <button onClick={createAccount}>Create Account</button>
      </div>
    </>
  );
};

export default SignUpPage;
