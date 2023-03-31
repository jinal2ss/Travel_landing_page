import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Destinations from './pages/Destinations';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Language from './pages/Language';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return (
    
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/language" element={<Language/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>    
    </>
  )
}

export default App