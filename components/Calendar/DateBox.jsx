import React from 'react';

const DateBox = ({ getDateInfo, num, data }) => {
  return (
    <div className="box" onClick={(e) => getDateInfo(e, data)}>
      <h1>{num}</h1>
    </div>
  );
};

export default DateBox;
