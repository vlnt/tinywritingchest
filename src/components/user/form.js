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

    render(){
        return(
            <>
                <form onSubmit={ (e) => this.handleForm(e)}>

                </form>
            </>
        )
    }
}

export default LoginForm;