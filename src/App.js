import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPgae from './pages/shop/shop.component';
import Header from './components/header.component/header.component';


//SWITH: give more contril on code
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/shop'component = {ShopPgae}/>
      </Switch>
    </div>
  );
}



export default App;
