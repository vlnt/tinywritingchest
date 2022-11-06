import React, {useState} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import Login from './components/user/login'

export default function App(props) {
     const auth = getAuth()
     const user = auth.currentUser
    let loggedUser = onAuthStateChanged(auth, user => {
            if(user){
                console.log("App:", user.email, ',\n ', user.uid)
                return user
                
            } else{
               console.log('no user')
            }
        })
   // const [user, setUser] = useState({user:auth.currentUser})
  // let loggedUser
    if (user != null){
        loggedUser = user.email
    }
    else {
        loggedUser = "no user"
    }
    return (
        <>
            <BrowserRouter>
                <Header user = {loggedUser} />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Content />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}