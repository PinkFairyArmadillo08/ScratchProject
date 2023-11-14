import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import HomeContainer from '../HomePage/HomeContainer.jsx';
import './LoginSignupStyles.scss';
import '../../Stylesheets/HomeStyle.scss';

const LoginRoutes = () => {
  //EACH PAGE SHOULD BE A CONTAINER COMPONENT AND HAVE THEIR OWN STATES AND HANDLER FUNCTIONS
  return (
    <Routes>
      {/* outletPath */}
      <Route path="/*" element={<LoginPage />} />
      {/* path to the home page */}
      <Route path="/home" element={<HomeContainer />} />
      {/* path to the signup page  */}
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
};

export default LoginRoutes;
