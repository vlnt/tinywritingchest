import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase from './utils/firebase'
import Aprovider from './Aprovider'
import './style.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Aprovider />)
