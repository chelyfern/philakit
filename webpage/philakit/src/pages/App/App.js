import './App.css';
import React, {  } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, MapPage } from '..'
import { Navbar } from '../../components'

function App() {
  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/map">
          <MapPage />
        </Route>
        <Route exact path="/blog">
          
        </Route>
        <Route exact path="/profile">
          
        </Route>
      </Switch>

    </div>
  );
}

export default App;
