import React, {useEffect} from 'react'
import App from './App'
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';

const Aprovider = () => {
    let authUser
    useEffect(() => {
        authUser = onAuthStateChanged(auth, user => {
            if(user){
                console.log(user.email + ' ' + user.uid)
                return user
            } else{
               user = null
               console.log(user)
            }
        }, [])
    })
   
    
    return (
        <App user={auth.currentUser} />
    )
}

export default Aprovider
