import React from 'react';
import{Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.util';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/melody_logo.svg';

const Header = ({currentUser}) => {
  return(
    <div className ="header">
       <Link to = "" className ="logo-containser"> 
         <Logo className = "logo"/>
       </Link>
       <div className = "options">
          <Link to = "/shop" className = "option">SHOP</Link>
          <Link to = "/contect" className = "option">CONTECT</Link>
          
            {
              currentUser ? 
              <div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div> : 
              <Link to = "/signin" className = "option"> SIGN IN  </Link>
            }
        
       </div>
    </div>
  )
}

export default Header;
