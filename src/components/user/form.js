import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        register: true,
        user: {
            email:'',
            password:''
        }
    }

    handleForm = (e) => {
             
    }

    changeHandler = (e) => {

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
                </form>
            </>
        )
    }
}

export default LoginForm;