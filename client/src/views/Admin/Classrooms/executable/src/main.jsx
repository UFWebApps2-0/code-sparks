import React from 'react'
import ReactDOM from 'react-dom/client'
import Classrooms from './Classrooms.jsx'
import './index.css'
import './Classrooms.css'

/* this is my main.jsx file for the classrooms list page, where I import my Classrooms.css file which has the blue color settings, as well as my classroomsData.json file, which has my mock data.
this file was originally auto-generated when I did npm create vite@latest, so the only other change I made was adding the Classrooms reference below to the Classrooms.jsx file I created. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Classrooms />
  </React.StrictMode>,
)
