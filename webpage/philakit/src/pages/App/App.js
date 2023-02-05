import './App.css';
import React, {  } from 'react';
import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage, MapPage, BlogPage, ProfilePage, LoginPage } from '..'
import { Navbar } from '../../components'
import RegisterPage from '../registerPage/register';

function App() {
  return (
    <div>

      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/map" element={<MapPage />}/>
          
        <Route exact path="/blog" element={<BlogPage />}/>
        <Route exact path="/profile" element={<ProfilePage />}/>
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/register" element={<RegisterPage />}/>

      </Routes>

    </div>
  );
}

export default App;
