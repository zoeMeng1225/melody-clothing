import React from 'react';
import FormInput from '../../components/form-input/form-input.conponent';
import CustomBtn from '../custom-button/custom-button.conponent';
import {signInWithGoogle} from '../../firebase/firebase.util';

import './signin.style.scss';



class Signin extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({email: '', password : ''})
  }

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({[name]: value});

  } 

  render(){
    return(
      <div className = "sign-in">
        <h2>I already have the account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput 
            name = "email"
            type="email" 
            value = {this.state.email} 
            handleChange = {this.handleChange}
            label = 'email'
            required/>
          <FormInput 
            name = "password"
            type="password"
            value = {this.state.password}
            handleChange = {this.handleChange}
            label = 'password'
            required/>
          <div className = "buttons">
            <CustomBtn type = "submit">SIGN IN</CustomBtn>
            <CustomBtn onClick = {signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google {' '}
          </CustomBtn>
          </div>
          
        </form>
      </div>
    )
  }
} 


export default Signin;