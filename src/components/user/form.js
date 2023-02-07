import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth()
class LoginForm extends Component {


    state = {
        register: false,
        redirect: true,
        user: {
            email:'',
            password:''
        }
    }
    
    componentDidMount() {
        console.log(this.state.redirect)
      }

    handleForm = (e) => {
        e.preventDefault()
        const {email} = this.state.user
        const {password} = this.state.user

        if(this.state.register){
                createUserWithEmailAndPassword(auth, email, password)
                .then(response => {
                    this.state.register = false
                    console.log(this.state.register)
                    console.log(response)
                })
                .catch(e => { 
                    console.log(e)
                })
        } else{
                signInWithEmailAndPassword(auth, email, password)
                .then( response => {
                    console.log(response)
                    this.setState({redirect: true})
                    window.location.assign('/')
                    //document.location.reload()
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

    handleLogout = (e) => {
        e.preventDefault()
        signOut(auth)
        .then( () => {
            console.log("user logged out")
            window.location.assign('/')
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
                </form>
                <button onClick={ (e) => this.handleLogout(e) } id="logout" className='btn btn-primary'>
                         Logout
                </button>
            </>
        )
    }
}

export default LoginForm;