import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase from './utils/firebase'
import App from './App'
import './style.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

const auth = getAuth()
const user = auth.currentUser

onAuthStateChanged(auth, user => {
    if(user){
        console.log(user.email, ',\n ', user.uid)
    } else{
       console.log('no user')
    }
})
