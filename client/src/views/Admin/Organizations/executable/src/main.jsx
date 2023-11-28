import React from 'react'
import ReactDOM from 'react-dom/client'
import Organizations from './Organizations.jsx'
import './index.css'
import './Organizations.css'

/* this is my main.jsx file for the organizations list page, where I import my Organizations.css file which has the blue color settings, as well as my organizationssData.json file, which has my mock data.
this file was originally auto-generated when I did npm create vite@latest, so the only other change I made was adding the Organizations reference below to the Organizations.jsx file I created. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Organizations />
  </React.StrictMode>,
)
