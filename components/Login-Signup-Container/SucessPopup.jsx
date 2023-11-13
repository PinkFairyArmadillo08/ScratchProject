import React from 'react';
import { useNavigate } from 'react-router';

const SucessPopup = () => {
  const navigate = useNavigate();
  return (
    <div className='SuccessPopup'>
      Account sucessfully created!
      <button onClick={() => navigate('/')}>ok!</button>
    </div>
  );
};

export default SucessPopup;
