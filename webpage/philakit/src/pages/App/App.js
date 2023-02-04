import './App.css';
import React, {  } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '..'
import { Navbar } from '../../components'

function App() {
  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
