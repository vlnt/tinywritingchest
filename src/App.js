import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import Login from './components/user/login'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" component={<Content/>} />
                    <Route exact path="/login" component={<Login/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}