import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <h1>Signing Up</h1>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <button onClick={() => navigate('/')}>Back to login</button>
    </div>
  );
};

export default SignUpPage;
