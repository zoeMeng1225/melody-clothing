import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPgae from './pages/shop/shop.component';
import Header from './components/header.component/header.component';
import SigninAndSignup from './pages/signinAndSignup/signinAndSignup.component';
import {auth} from './firebase/firebase.util';


//SWITH: give more contril on code
class App extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/shop'component = {ShopPgae}/>
          <Route path = '/signin'component = {SigninAndSignup}/>
        </Switch>
      </div>
    );
  }
}
  



export default App;
