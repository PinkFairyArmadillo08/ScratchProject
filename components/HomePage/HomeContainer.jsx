import React from 'react';
import { useEffect, useState } from 'react';
import AddHabitForm from './AddHabitForm.jsx';
import HabitCard from './HabitCard.jsx';
const cache = {};

const HomeContainer = () => {
  /**********************************STATES**********************************/
  const [habits, setHabits] = useState([]);
  const [popupOpen, setpopupOpen] = useState(false);
  const [newHabit, setNewHabit] = useState({
    habitName: '',
    cue: '',
    rewards: '',
  });

  /*******************************USE EFFECT**********************************/
  // send a fetch to get the habit data from the backend
  // data will be returned as an array of objects with the following properties:
  // habitName, cue, rewards
  useEffect(() => {
    // if (cache[0] != habits) {
    fetch('/habit/get')
      .then((res) => res.json())
      .then((data) => {
        // cache[0] = data;
        setHabits(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, [habits]);

  /****************************EVENT HANDLERS*******************************/
  // click  handler that pushes a completed habit to the end of the queue
  const handleCompleted = (e, i) => {
    e.preventDefault();
    let currentCard = habits[i];
    const updatedHabits = habits
      .slice(0, i)
      .concat(habits.slice(i + 1).concat(currentCard));
    setHabits(updatedHabits);
  };

  // iterate over the habits array (which now contains the habit data) and render a habit card for each object
  const renderingHabits = [];
  for (let i = 0; i < habits.length; i++) {
    renderingHabits.push(
      <HabitCard
        habitObj={habits[i]}
        key={`Habit position: ${i}`}
        habitIndex={`${i}`}
        handleCompleted={handleCompleted}
      />
    );
  }

  // this function is connected to the "add habit" button, and renders the habit form pop-up when clicked
  // updates the state "popupOpen" from false to true when clicked
  // this function is also connected to the 'X' button on the habit pop-up form and it closes the form
  // use case: someone clicks on "add habit" but wants to close the pop-up without actually adding a habit
  const handleClick = () => {
    setpopupOpen(!popupOpen);
  };

  // this function grabs the input data from the add habit form and updates the state with this data
  const handleChange = (e) => {
    setNewHabit(Object.assign(newHabit, { [e.target.name]: e.target.value }));
  };

  // this function is connected to the submit button on the add habit pop-up form and it sends the new habit data to the backend and closes the form
  const handleSubmit = () => {
    // sends post request to backend
    fetch('/habit/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setpopupOpen(!popupOpen);
  };

  return (
    <div className="Home">
      <div>
        <button className="addHabitButton" onClick={handleClick}>
          Add Habit
        </button>
      </div>
      <div>
        {popupOpen ? (
          <AddHabitForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        ) : null}
      </div>
      <div className="HabitCardBox">{renderingHabits}</div>
    </div>
  );
};

export default HomeContainer;
