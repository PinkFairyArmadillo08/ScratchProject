import React from 'react';

// render a habit card for each habit that the user has saved
// habit card has a title (name of habit) and lists the cue and the reward for each habit
const HabitCard = ( {habitObj} ) => {
  return (
    <div id="HabitCard">
        <h1>My Habit: {habitObj['habitName']}</h1>
      <ul>
        <li>Cue: {habitObj['cue']}</li>
        <li>Reward: {habitObj['reward']}</li>
      </ul>
    </div>
  )
}

export default HabitCard;