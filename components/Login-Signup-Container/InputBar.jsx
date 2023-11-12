import React from 'react';

const InputBar = ({ id, saveBar, type }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={`${id}`}
      onChange={(event) => saveBar(event)}
    />
  );
};

export default InputBar;
