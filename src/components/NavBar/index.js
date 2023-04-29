import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JLDLogo from "./JLD_Logo_Color.png";
import instaLogo from "./instagramLogo.png";
import "./Navbar.css";
import { navBarInfo } from "./NavBarInfo/navbarInfo";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="left-container">
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              onClick={() => setSidebar(false)}
            >
              <img className="JLDLogo" src={JLDLogo} />
            </NavLink>
            <div className="jasmineLandscapingDesign">
              Jasmine Landscaping & Design
            </div>
          </div>

          <div className="right-container">
            {!mobile && (
              <>
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
                    <p className="nav-tag">About</p>
                  </NavLink>
                </div>

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
                    <p className="nav-tag">Gallery</p>
                  </NavLink>
                </div>
                <div className="AboutUs-Container InstagramContainer">
                  <a
                    href="https://www.instagram.com/jasminelandscapedesign/?hl=en"
                    exact={true}
                    style={{ textDecoration: "none" }}
                    activeClassName="active"
                  >
                    <img src={instaLogo} className="nav-tag instaLogo" />
                  </a>
                </div>
              </>
            )}
            {mobile && (
              <div className="sidebar-toggle">
                {sidebar ? (
                  <button
                    className="sidebar-toggle-logo"
                    onClick={() => setSidebar(!sidebar)}
                  >
                    X
                  </button>
                ) : (
                  <button
                    className="sidebar-toggle-logo"
                    onClick={() => setSidebar(!sidebar)}
                  >
                    =
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navBarInfo.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                {item.logo ? (
                  <NavLink to={item.path}>
                    <img className="instaLogo" src={item.logo} />
                  </NavLink>
                ) : (
                  <NavLink to={item.path}>{item.title}</NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
