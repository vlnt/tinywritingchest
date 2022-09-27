import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/firebase'
import './utils/googleauth'
import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)