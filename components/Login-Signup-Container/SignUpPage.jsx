import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="Login">
      <h1>Signing Up</h1>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <Link to={'/'}>
        <button>Back to login</button>
      </Link>
    </div>
  );
};

export default SignUpPage;
