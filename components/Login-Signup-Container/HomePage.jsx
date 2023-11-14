import React from 'react';
import { Link } from 'react-router-dom';
import Cal from '../Calendar/Cal.jsx';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <button>
        <p>Cards View</p>
      </button>
      <Cal />
      <Link to={'/'}>
        <button>Back to login</button>
      </Link>
    </div>
  );
};

export default HomePage;
