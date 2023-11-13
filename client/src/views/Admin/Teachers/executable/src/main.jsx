import React from 'react'
import ReactDOM from 'react-dom/client'
import Teachers from './Teachers.jsx'
import './index.css'
import './Teachers.css'
import './teachersData.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Teachers />
  </React.StrictMode>,
)
