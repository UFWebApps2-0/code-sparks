import React from 'react'
import ReactDOM from 'react-dom/client'
import Organizations from './Organizations.jsx'
import './index.css'
import './Organizations.css'
import './organizationsData.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Organizations />
  </React.StrictMode>,
)
