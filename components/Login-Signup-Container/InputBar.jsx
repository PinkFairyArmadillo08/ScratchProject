import React from 'react';

const InputBar = ({ id, saveBar, state, type }) => {
  return (
    <span>
      <input
        id={id}
        type={type}
        placeholder={`${id}`}
        onChange={(event) => saveBar(event, state)}
      />
      <a
        onClick={() => {
          alert('Thats unfortunate');
        }}
      >
        Forgot {id}?
      </a>
    </span>
  );
};

export default InputBar;
