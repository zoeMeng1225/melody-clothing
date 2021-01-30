import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';


//SWITH: give more contril on code
function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
      </Switch>
    </div>
  );
}



export default App;
