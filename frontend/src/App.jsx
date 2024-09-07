

import './App.css'
import {  Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Order from './components/Order'
import Login from './components/Login';
import Signup from './components/Signup.jsx';

function App() {
 

  return (
  
    
  <>
    <Navbar/>
    <Order/>

      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    
      </>
  )
}

export default App
