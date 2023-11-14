import React from 'react'
import ReactDOM from 'react-dom/client'
import Teachers from './Teachers.jsx'
import './index.css'
import './Teachers.css'
import './teachersData.json'

/* this is my main.jsx file for the teachers list page, where I import my Teachers.css file which has the blue color settings, as well as my teachersData.json file, which has my mock data.
this file was originally auto-generated when I did npm create vite@latest, so the only other change I made was adding the Teachers reference below to the Teachers.jsx file I created. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Teachers />
  </React.StrictMode>,
)
