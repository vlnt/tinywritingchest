import React, {useState} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import Login from './components/user/login'

export default function App(props) {
     const auth = getAuth()
     const authUser = auth.currentUser
    // onAuthStateChanged(auth, user => {
    //         if(user){
    //             console.log("App:", user.email, ',\n ', user.uid)
    //             return user.uid
                
    //         } else{
    //            console.log('no user')
    //            return "no user"
    //         }
    //     })
   const [user, setUser] = useState(authUser)
//    let loggedUser
   
//     if (authUser != null ){
//         loggedUser = authUser
//     }
    // else {
    //     loggedUser = "no user"
    // }
    //console.log(loggedUser)
    return (
        <>
            <BrowserRouter>
                <Header user = {user} />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Content />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}