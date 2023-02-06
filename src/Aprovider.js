import React from 'react'
import App from './App'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Aprovider = () => {
    const auth = getAuth()
    let authUser
    
    
    onAuthStateChanged(auth, user => {
        if(user){
            authUser = user.email
            console.log(user.email, ',\n ', user.uid)
            return authUser
            
        } else{
           console.log('no user')
        }
    })

    return (
        <App user={authUser} />
    )
}

export default Aprovider
