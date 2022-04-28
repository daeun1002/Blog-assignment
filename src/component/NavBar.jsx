import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <Link to="/DailyCont" className="menu">DAILY</Link>
          <Link to="/StudyCont" className="menu">STUDY</Link>
          <Link to="/TravelCont" className="menu">TRAVEL</Link>
          <Link to="/HobbyCont" className="menu">HOBBY</Link>
          <Link to="/WriteForm" className="menu">글올리기</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar