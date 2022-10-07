import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase, { auth } from './utils/firebase'
import App from './App'
import './style.css'
//import { getAuth} from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

//const auth = getAuth()

firebase.onAuthStateChanged(auth, user => {
    if(user){
        console.log(user.email, ',\n ', user.uid)
    } else{
       console.log('no user')
    }
})
