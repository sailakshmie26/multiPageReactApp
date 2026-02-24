import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/" className="nav-link">
            Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
            About
        </NavLink>
        <NavLink to="/users" className="nav-link">
            Users
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
