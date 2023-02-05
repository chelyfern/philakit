import './App.css';
import React, { useState } from 'react';
import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage, MapPage, BlogPage, ProfilePage, LoginPage, RegisterPage, SearchPage } from '..'
import { Navbar } from '../../components'

function App() {
  const [isUser, setisUser] = useState(false);
  const [user, setUser] = useState("")

  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/map" element={<MapPage />}/>
          
        <Route exact path="/blog" element={<BlogPage isUser={isUser} setisUser={setisUser} user={user} setUser={setUser}/>}/>
        <Route exact path="/profile" element={<ProfilePage isUser={isUser} setisUser={setisUser} user={user} setUser={setUser}/>}/>
        <Route exact path="/login" element={<LoginPage isUser={isUser} setisUser={setisUser} user={user} setUser={setUser}/>}/>
        <Route exact path="/register" element={<RegisterPage isUser={isUser} setisUser={setisUser} user={user} setUser={setUser}/>}/>
        <Route exact path="/search" element={<SearchPage />}/>

      </Routes>

    </div>
  );
}

export default App;
