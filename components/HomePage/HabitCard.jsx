import React from 'react';

// render a habit card for each habit that the user has saved
// habit card has a title (name of habit) and lists the cue and the reward for each habit
const HabitCard = ( {habitObj} ) => {
  return (
    <div className="HabitCard">
      <div className="section">
        <h1>My Habit</h1><p>{habitObj['habitName']}</p>
      </div>
      <div className="section">
        <h1>My Cue</h1><p>{habitObj['cue']}</p>
      </div>
      <div className="section">
        <h1>My Reward</h1><p>{habitObj['reward']}</p>
      </div>
    </div>
  )
}

export default HabitCard;