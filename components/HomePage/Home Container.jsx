import React from 'react';
import { useEffect, useState } from React;

const HomeContainer = () => {

  const [habits, setHabits] = useState([]);

  // send a fetch to get the habit data from the backend
  // data will be returned as an array of object with the following properties:
  // habitName, cue, rewards 
  useEffect(() => {
    fetch('/getHabits')
    .then((res) => res.json())
    .then((data) => {
      setHabits(data);
    })
  }, [])

  // iterate over the habits array (which now contains the habit data) and render a habit card for each object
  useEffect(() => {
    const renderingHabits = []
    for (let i = 0; i < habits.length; i++) {
      renderingHabits.push(
        <HabitCard habitObj={habits[i]} key={i}/>
      )
    }
  }, [habits])

  return (
    <div>
      {renderingHabits}
    </div>
  )
}

export default HomeContainer;