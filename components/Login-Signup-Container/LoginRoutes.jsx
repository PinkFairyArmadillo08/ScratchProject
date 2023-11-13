import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';
import './LoginSignupStyles.scss';
import SignUpContainer from './SignUpContainter.jsx';

const LoginRoutes = () => {
  //EACH PAGE SHOULD BE A CONTAINER COMPONENT AND HAVE THEIR OWN STATES AND HANDER FUNCTIONS
  return (
    <Routes>
      {/* outletPath */}
      <Route path="/*" element={<LoginPage />} />
      {/* path to the home page */}
      <Route path="/home" element={<HomePage />} />
      {/* path to the signup page  */}
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
};

export default LoginRoutes;
