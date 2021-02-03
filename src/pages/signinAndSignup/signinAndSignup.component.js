import React from 'react';

import './signinAndSignup.style.scss';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/sign-up.componnent';

const SigninAndSignup = () => {
  return(
      <div className = "signinAndsignup">
        <Signin/>
        <Signup/>

      </div>
  )
}

export default SigninAndSignup;