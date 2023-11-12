import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginRoutes from './Login-Signup-Container/LoginRoutes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <LoginRoutes />
    </BrowserRouter>
  );
};

export default App;
