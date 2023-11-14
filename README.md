# ScratchProject

# The problem: 
People struggle to build sustainable habits and routines.

# Our solution: 
Using the habit loop (cue, habit, reward) our app will allow users to input individualized cues, habits, and rewards, then save the habits they are trying to build in their profile. Each day, our app will guide the user through these steps and help them build a lasting routine. 

# MVP:
- Ability to sign up / login
- Add habit(s) to your profile
- Upon future login, view any saved habits and be guided through the cue, habit, reward steps

# Stretch: 
- Update / delete habits from your profile
- Tracking system to view your consistency / frequency of habit completion
- Calendar view
- Security: bcrypt
- Adding comments / notes to your habits, adding ability to look back and reflect on your feelings at a given point

# Paths for HTTP requests:
- signup page = '/signUp'
- login page = '/login'
- home page = '/home'
- get habits = '/habit/get'
- add habit form = '/habit/add'

# Variables for Data Structure:
Login page:
{"username": Type: String, "password": Type: String}

Habit data:
{"habitName": Type: String, "cue": Type: String, "rewards": Type: String}


