import React from 'react';
import HomePage from './Home-Page/home-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
export { default as App } from './App/App.js'
export { default as HomePage } from './Home-Page/home-page'
export { default as MapPage } from './mapPage/map'
export { default as BlogPage } from './blogPage/blog'
export { default as ProfilePage } from './profilePage/profile'
export { default as LoginPage } from './loginPage/login'
export { default as SearchPage } from './seachPage/searchPage'
export { default as RegisterPage } from './registerPage/register'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);