import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/firebase'
import './utils/firebaseauth'
import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)