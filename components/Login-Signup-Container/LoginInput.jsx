import React from 'react';
import InputBar from './InputBar.jsx';

const LoginInputContainer = ({ id, saveBar, type }) => {
  return (
    <span>
      <InputBar id={id} saveBar={saveBar} type={type} />
      <a onClick={() => alert('Thats unfortunate')}>Forgot {id}?</a>
    </span>
  );
};

export default LoginInputContainer;
