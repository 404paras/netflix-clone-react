import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import user from '../assets/netflix-user.png'

import Navbar from './Navbar'
import '../style/dropdown.css'
const DropDown = () => {

  const [clicked,setClicked] = useState(true)

  const handleDropDown = ()=>{
    setClicked(!clicked)
  }
    return (
      <>
       { clicked ? (        <div
          className="main-1"
            >
<div className="upper">
 
          <div className="logo">
            <span className="text">NETFLIX</span>
    
           
          </div>
    
          <div className="svgIcons">
            <svg  className="drop-down" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 160"
              x="0px"
              y="0px"
              onClick={handleDropDown}
           
            >
              
              
              <g>
                <rect x="14" y="14" width="100" height="22" rx="11" ry="11" />
                <rect x="14" y="53" width="100" height="22" rx="11" ry="11" />
                <rect x="14" y="92" width="100" height="22" rx="11" ry="11" />
              </g>
             
            
            </svg>
          
           
            <div className="profile">
              <img src={user} alt="" className="user" />
             
            </div>


          </div>
          </div>
          <div className="item">
          <ul >
              <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                <li > Home</li>
              </Link>
              <Link to="/shows" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                <li>Shows</li>
              </Link>
              <Link to="/movies" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                <li>Movies</li>
              </Link>
              <Link to="/people" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                <li>People</li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                {" "}
                <li>About</li>
              </Link>
            </ul>
          </div>
        </div>):(<Navbar/>)}
        </>
      );
}

export default DropDown