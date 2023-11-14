import React from 'react';

const AddHabitForm = ({ handleClick, handleChange, handleSubmit }) => {

  return (
    <div className="AddHabitForm">
      <br></br>
      <br></br>
      <label id="prompt"><a>What habit do you want to build into your routine?</a></label>
      <br></br>
      <input type="text" name="habitName" placeholder="Habit" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <label id="prompt"><a>What will be your cue to start your habit each day?</a></label>
      <br></br>
      <input type="text" name="cue" placeholder="Cue" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <label id="prompt"><a>What will be your reward for completing your habit?</a></label>
      <br></br>
      <input type="text" name="reward" placeholder="Reward" onChange={(value) => handleChange(value)}></input>
      <br></br>
      <div className="formButtons">
        <button id="submitHabit" onClick={handleSubmit}>Submit New Habit</button>
        <button id="closeForm" onClick={handleClick} >Close Form</button>
      </div>
      <br></br>
    </div>
  )
};

export default AddHabitForm;