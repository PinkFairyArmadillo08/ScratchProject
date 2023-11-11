const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://jessica:hahaha@scratch-project-habit-t.d4noeps.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'habitBuilder'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  // create a schema for habits model
  const habitsSchema = new Schema({
    habitName: String,
    cue: String,
    rewards: String
  })

  // create a model for the 'habits' collection 
  const Habits = mongoose.model('habits', habitsSchema);

  // export Habit model
  module.exports = {
    Habits
  }