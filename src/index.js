import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/firebase'
import App from './App'
import './style.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

const auth = getAuth()

onAuthStateChanged(auth, user => {
    if(user){
        console.log(user)
    } else{
       console.log('no user')
    }
})
