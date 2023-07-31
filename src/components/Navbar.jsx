import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import user from "../assets/netflix-user.png";
import { Link } from "react-router-dom";
import DropDown from './DropDown'
const Navbar = () => {

  const [isScrolled, setScrolled] = useState(false);

const [clicked,setClicked] = useState(true);

const handleDropDown=()=>{
    setClicked((prevState) => !prevState);
}

 
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 1);
  };

  const handleResize = () => {
    // Check the window width and set clicked to true by default if it's below 768px
    if (window.innerWidth >= 768) {
      setClicked(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Cleanup event listeners
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };
}, [isScrolled]);

  return (<>
    {clicked ?(
    <div
      className="main"
      style={{ backgroundColor: isScrolled ? "black" : "transparent" }}
   
    >
      <div className="logo">
        <span className="text">NETFLIX</span>

        <ul>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <li> Home</li>
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
        
        </ul>
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
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="Navbar_icon__1oHI1"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
        </svg>
      
        <div className="profile">
          <img src={user} alt="" className="user" />
          
          <Link to={'/'} style={{textDecoration:'none'}}>
            <button className="signin-btn">Sign Out</button>
            </Link>
         
        </div>
      </div>
    </div>): (<DropDown/>)

  }</>
  );
};

export default Navbar;
