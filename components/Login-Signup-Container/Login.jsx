import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginRoutes from './LoginRoutes.jsx';
import "./LoginSignupStyles.scss"

const Login = () => {
  return (
    <BrowserRouter> 
      <LoginRoutes />
    </BrowserRouter>
  );
};

export default Login;
