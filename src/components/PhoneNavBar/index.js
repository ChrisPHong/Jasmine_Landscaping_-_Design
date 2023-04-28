import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import JLDLogo from "./JLD_Logo_Color.png";
import instaLogo from "./instagramLogo.png";
import "./PhoneNavBar.css";

const PhoneNavBar = () => {
  const [show, setShow] = useState(false);
  const showNav = () => {
    setShow(!show);
  };

  return (
    <nav>
      <div className="PhoneNavbar-container">
        <div className="left-container">
          <NavLink to="/" exact={true} activeClassName="active">
            <img className="JLDLogo" src={JLDLogo} />
          </NavLink>
          <div className="jasmineLandscapingDesign">
            Jasmine Landscaping & Design
          </div>
        </div>
        <div>
          <div className="right-container">
            <button onClick={showNav}>Click here to show</button>
            {show ? (
              <div>
                <div className="Home PhoneNavContainer">
                  <NavLink
                    to="/"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <p className="nav-tag">Home</p>
                  </NavLink>
                </div>
                <div className="AboutUs PhoneNavContainer">
                  <NavLink
                    to="/AboutUs"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <p className="nav-tag">About</p>
                  </NavLink>
                </div>

                <div className="Contact PhoneNavContainer">
                  <NavLink
                    to="/Contact"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <p className="nav-tag">Contact</p>
                  </NavLink>
                </div>
                <div className="Photos PhoneNavContainer">
                  <NavLink
                    to="/photos"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <p className="nav-tag">Gallery</p>
                  </NavLink>
                </div>
                <div className=" PhoneNavContainer InstagramContainer">
                  <a
                    href="https://www.instagram.com/jasminelandscapedesign/?hl=en"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <img src={instaLogo} className="nav-tag instaLogo" />
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PhoneNavBar;
