import React from 'react';
import { useEffect, useState } from 'react';
import AddHabitForm from './AddHabitForm.jsx';
import HabitCard from './HabitCard.jsx';

const HomeContainer = () => {

  const [habits, setHabits] = useState([]);
  const [popupOpen, setpopupOpen] = useState(false);
  const [newHabit, setNewHabit] = useState({'habitName': '', 'cue': '', 'reward': ''})

  // send a fetch to get the habit data from the backend
  // data will be returned as an array of object with the following properties:
  // sends cookie with username prop
  // habitName, cue, rewards 
  // useEffect(() => {
  //   fetch('/habit/get')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setHabits(data);
  //   })
  // }, [])

  // iterate over the habits array (which now contains the habit data) and render a habit card for each object
  useEffect(() => {
    setHabits([
      {'habitName': 'a', 'cue': 'a', 'reward': 'a'}, {'habitName': 'b', 'cue': 'b', 'reward': 'b'}, {'habitName': 'c', 'cue': 'c', 'reward': 'c'}, {'habitName': 'd', 'cue': 'd', 'reward': 'd'}, {'habitName': 'e', 'cue': 'e', 'reward': 'e'}])
  }, []) 
  // setHabits(newHabits);
  
  
  // click  handler that pushes a completed habit to the end of the queue
  const handleCompleted = (e, i) => {
    e.preventDefault();
    console.log(e);
    let currentCard = habits[i];
    const updatedHabits = habits.slice(0, i).concat(habits.slice(i + 1).concat(currentCard))

    console.log(updatedHabits);
    setHabits(updatedHabits);

    //fetch('/habit/update')
  }
    
  
  // useEffect(() => {
    const renderingHabits = []
    for (let i = 0; i < habits.length; i++) {
      renderingHabits.push(
        <HabitCard habitObj={habits[i]} key={`Habit position: ${i}`} habitIndex={`${i}`} handleCompleted={handleCompleted} />
      )
    }
  // }, [habits])

  // this function is connected to the "add habit" button, and renders the habit form pop-up when clicked
  // updates the state "popupOpen" from false to true when clicked
  // this function is also connected to the 'X' button on the habit pop-up form and it closes the form
  // use case: someone clicks on "add habit" but wants to close the pop-up without actually adding a habit
  const handleClick = () => {
    console.log('opening and closing popup!') 
    setpopupOpen(!popupOpen)
  }

  // this function grabs the input data from the add habit form and updates the state with this data
  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    console.log(newHabit);
    setNewHabit(Object.assign(newHabit, {[e.target.name]: e.target.value}))
  }

  // this function is connected to the submit button on the add habit pop-up form and it sends the new habit data to the backend and closes the form
  // sends cookie with username prop
  const handleSubmit = () => {
    // sends post request to backend
    console.log('clickedSubmit!')
    console.log(newHabit);
    // fetch('/habit/add'), {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json' 
    //   },
    //   body: JSON.stringify(newHabit)
    // }
  }

  return (
    <div className="Home">
      <div>
        <button className="addHabitButton" onClick={handleClick}>Add Habit</button>
      </div>
      <div> 
        {popupOpen ? <AddHabitForm handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} /> : null}
      </div>  
      <div className="HabitCardBox">
        {renderingHabits}
      </div>
    </div>
  )
}

export default HomeContainer;