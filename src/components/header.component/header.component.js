import React from 'react';
import{Link} from 'react-router-dom';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/melody_logo.svg';

const Header = () => {
  return(
    <div className ="header">
       <Link to = "" className ="logo-containser"> 
         <Logo className = "logo"/>
       </Link>
       <div className = "options">
          <Link to = "/shop" className = "option">SHOP</Link>
          <Link to = "/contect" className = "option">CONTECT</Link>
       </div>
    </div>
  )
}

export default Header;
