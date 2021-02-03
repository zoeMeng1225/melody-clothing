import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPgae from './pages/shop/shop.component';
import Header from './components/header.component/header.component';
import SigninAndSignup from './pages/signinAndSignup/signinAndSignup.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){ //exist
          const useRef = await createUserProfileDocument(userAuth);
          useRef.onSnapshot(snapShot => {
            // console.log(snapShot.id)
             this.setState({
               currentUser: {
                 id : snapShot.id,
                 ...snapShot.data()
               }
             });
             console.log(this.state)
          })
      }else{
        this.setState({currentUser:userAuth})
      }
    })
  }

  //close subscribtion
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
