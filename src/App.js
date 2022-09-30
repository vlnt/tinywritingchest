import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import Login from './components/user/login'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/login" component={Login} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}