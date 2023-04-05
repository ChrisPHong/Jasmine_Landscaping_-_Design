import React from "react";
import { NavLink } from "react-router-dom";
import JLDLogo from "./JLD_Logo_Color.png";
import instaLogo from "./instagramLogo.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="left-container">
          <NavLink to="/" exact={true} activeClassName="active">
            <img className="JLDLogo" src={JLDLogo} />
          </NavLink>
          <div className="jasmineLandscapingDesign">
          Jasmine Landscaping & Design
          </div>
        </div>
    <div></div>
        <div>
          <div className="right-container">
            <div className="AboutUs-Container">
              <NavLink
                to="/"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <p className="nav-tag">Home</p>
              </NavLink>
            </div>
            <div className="AboutUs-Container">
              <NavLink
                to="/AboutUs"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <p className="nav-tag">About Us</p>
              </NavLink>
            </div>

            {/* <div className="AboutUs-Container">
              <NavLink
                to="/Services"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <p className="nav-tag">Services</p>
              </NavLink>
            </div> */}

            <div className="AboutUs-Container">
              <NavLink
                to="/Contact"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <p className="nav-tag">Contact</p>
              </NavLink>
            </div>
            <div className="AboutUs-Container">
              <NavLink
                to="/photos"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <p className="nav-tag">Photos</p>
              </NavLink>
            </div>
            <div className="AboutUs-Container InstagramContainer">
              <a
                href="https://www.instagram.com/jasminelandscapedesign/?hl=en"
                exact={true}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <img src={instaLogo} className="nav-tag instaLogo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
