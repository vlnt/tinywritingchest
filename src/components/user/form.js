import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
//import auth from '../../utils/firebase';

const auth = getAuth()
class LoginForm extends Component {

    state = {
        register: false,
        user: {
            email:'',
            password:''
        }
    }

    handleForm = (e) => {
        e.preventDefault()
        const {email} = this.state.user
        const {password} = this.state.user

        if(this.state.register){
                createUserWithEmailAndPassword(auth, email, password)
                .then(response => {
                    console.log(response)
                })
                .catch(e => { 
                    console.log(e)
                })
        } else{
                signInWithEmailAndPassword(auth, email, password)
                .then( response => {
                    console.log(response)
                })
                .catch( e => {
                    console.log(e)
                })
        }
    }

    changeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState(prev => ({
            user:{
                ... prev.user,
                [name]: value
            }
        }))
    }

    handleLogout = () => {
        signOut(auth)
        .then( () => {
            console.log("user logged out")
        } )
    }

    render(){
        return(
            <>
                <form onSubmit={ (e) => this.handleForm(e)}>
                       <div className='form-group'>
                        <label>Email</label>
                        <input type="email"
                               className='form-control'
                               name="email"
                               onChange={(e) => this.changeHandler(e)} >

                               </input>
                       </div>
                       <div className='form-group'>
                        <label>Password</label>
                        <input type="password"
                               className='form-control'
                               name="password"
                               onChange={(e) => this.changeHandler(e)} >

                               </input>
                       </div>
                       <button type='submit' className='btn btn-primary'>
                        {this.state.register ? 'Register' : 'Sign in'}
                       </button>
                       <hr/>
                       <button onClick={ () => this.handleLogout() } className='btn btn-primary'>
                         Logout
                       </button>
                </form>
            </>
        )
    }
}

export default LoginForm;