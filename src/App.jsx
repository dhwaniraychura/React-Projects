import React from 'react'
// import './App.css'
import Home from './pages/Home'
import ViewEmployee from './pages/ViewEmployee'
import AddEmployee from './pages/AddEmployee'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import EditEmployee from './pages/editEmployee'

function App() {
  return (
    <>
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/view" element={<ViewEmployee />}/>
         <Route path="/add" element={<AddEmployee />}/>
         <Route path="/edit/:i" element={<EditEmployee />}/>
       </Routes>
    </>
  )
}

export default App
