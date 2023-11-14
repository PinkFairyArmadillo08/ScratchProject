import React, { useState } from 'react';
import DateBox from './DateBox.jsx';
import './CalenderStyle.scss';
import HabitData from './HabitData.jsx';

let top;
let left;
let data;

const Cal = () => {
  const [openData, setOpenData] = useState(false);
  const week = [];

  function closeHabit() {
    setOpenData(!openData);
  }

  function getDateInfo(e, dayData) {
    top = e.pageY;
    left = e.pageX;
    data = dayData;
    console.log(data);
    setOpenData(!openData);
  }
  for (let i = 0; i < 7; i++) {
    //generate random data
    let today = new Date();
    const data = {
      habit: today.getDay() + i,
      status: today.getDate() + i,
      comments: Math.floor(Math.random() * 30),
    };
    week.push(
      <DateBox getDateInfo={getDateInfo} num={data.status} data={data} />
    );
  }

  return (
    <div>
      {week}
      {openData ? (
        <HabitData top={top} left={left} data={data} closeHabit={closeHabit} />
      ) : null}
    </div>
  );
};

export default Cal;
