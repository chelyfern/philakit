import './App.css';
import React, {  } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, MapPage, BlogPage, ProfilePage, LoginPage, RegisterPage } from '..'
import { Navbar } from '../../components'

function App() {
  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/map">
          <MapPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
