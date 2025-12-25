import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Navbar() {
  return (
    <>
      <nav className="shadow-sm">
        <Link to="/">Home</Link>
        <Link to="/add">Add Employee</Link>
        <Link to="/view">View Employee</Link>
      </nav>

    </>
  )
}

export default Navbar