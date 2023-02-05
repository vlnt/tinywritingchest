import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import Login from './components/user/login'

export default function App(props) {
     
   

    const [user, setUser] = useState()
    console.log('user in app: ', user)
    
    useEffect(() => {
        const auth = getAuth()
        const authUser = auth.currentUser
    }, [])

    

    return (
        <>
            <BrowserRouter>
                <Header user={props.user} />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Content />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}