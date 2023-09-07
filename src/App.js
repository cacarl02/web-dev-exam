import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import './assets/styles/main.css'

function App() {
  return (
    <main className="main">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
