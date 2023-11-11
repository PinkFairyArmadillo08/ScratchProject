import React from 'react';

const AddHabitForm = ({ handleClick, handleChange, handleSubmit }) => {

  return (
    <div>
      <br></br>
      <button id="closeForm" onClick={handleClick} >Close Form</button>
      <br></br>
      <label>What habit do you want to build into your routine?</label>
      <br></br>
      <input type="text" name="habitName" placeholder="Habit" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <label>What will be your cue to start your habit each day?</label>
      <br></br>
      <input type="text" name="cue" placeholder="Cue" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <label>What will be your reward for completing your habit?</label>
      <br></br>
      <input type="text" name="reward" placeholder="Reward" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <button id="submitHabit" onClick={handleSubmit}>Submit New Habit</button>
    </div>
  )
};

export default AddHabitForm;