import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase from './utils/firebase'
import App from './App'
import './style.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const root = ReactDOM.createRoot(document.getElementById("root"));

const auth = getAuth()
let authUser = auth.currentUser


onAuthStateChanged(auth, user => {
    if(user){
        authUser = user.email
        console.log(user.email, ',\n ', user.uid)
        root.render(<App user={authUser}/>)
        
    } else{
       console.log('no user')
    }
})
console.log(authUser)


