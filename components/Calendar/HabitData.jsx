import React from 'react';

const HabitData = ({ top, left, data, closeHabit }) => {
  return (
    <div className="habitData" style={{ top: `${top}px`, left: `${left}px` }}>
      <ul>
        <li>Habit : {data.habit} </li>
        <li>Status: {data.status}</li>
        <li>Comments: {data.comments}</li>
      </ul>
      <textarea></textarea>
      <button onClick={closeHabit}>x</button>
    </div>
  );
};

export default HabitData;
