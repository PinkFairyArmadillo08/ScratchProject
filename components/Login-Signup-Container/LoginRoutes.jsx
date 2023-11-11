import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import HomePage from './HomePage.jsx';

const LoginRoutes = () => {
  //   //signup onclick to route to signup page
  return (
      <Routes>
        {/* outletPath */}
        <Route path="/*" element={<LoginPage />} />
        {/* path to the home page */}
        <Route path="/home" element={<HomePage />} />
        {/* path to the signup page  */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
  );
};

export default LoginRoutes;
