import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBar = props => {
  /*
    Last Link in NavBar is logout button. This is the onClick function for the button.
    Logout works by setting the cookie to expire on 1970 making the cookie stored during login
    invalid. Redirects to login page. 
  */
  const logOut = () => {
    document.cookie = "SSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace('http://localhost:8080/')
  }
  /* 
    Defining routes for react-router for navBar. Links to different routes where we render components 
  */
  return (
    <>
      <div className="nav">
        <div><Link className="nav-link" to="/"><button className='nav-button'>Dashboard</button></Link></div>
        <div><Link className="nav-link" to="/income"><button className='nav-button'>Income</button></Link></div>
        <div><Link className="nav-link" to="/expenses"><button className='nav-button'>Expenses</button></Link></div>
        {/* <div><Link className="nav-link" to="/assets"><button className='nav-button'>Assests</button></Link></div> */}
        <div><Link className="nav-link" to="/" ><button onClick={logOut} className='nav-button' >Logout</button></Link></div>
      </div>
    </>
  )
}

export default NavBar;