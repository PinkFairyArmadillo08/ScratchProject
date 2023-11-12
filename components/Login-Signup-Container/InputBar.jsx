import React from 'react';

const InputBar = ({ id, saveBar, state }) => {
  return (
    <span>
      <input
        id={id}
        type="text"
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
