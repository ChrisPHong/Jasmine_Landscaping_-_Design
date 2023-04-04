// import emailLogo from "./email.jpg";
// import emailLogo from "./whiteEmail.png";
// import instaLogo from "./instagram_logo.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <>
      <div className="Footer-Container">
        <div className="left-container">
          <div className="Jasmine-Landscaping-Container foot-container">
            <h3 className="font-link">Jasmine Landscaping & Design</h3>
            <div className="JLD-container">
              <NavLink
                to="/AboutUs"
                exact={true}
                className={"footer-links"}
                activeClassName="active"
              >
                About Us
              </NavLink>
              <NavLink
                to="/"
                exact={true}
                className={"footer-links"}
                activeClassName="active"
              >
                Home
              </NavLink>
            </div>
          </div>

          <div className="foot-container">
            <h3 className="font-link">Support</h3>
            <div className="Support-Container">
              <NavLink
                to="/Contact"
                exact={true}
                className={"footer-links"}
                activeClassName="active"
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="Social-Container foot-container">
            <h3 className="font-link">Email & Social</h3>

            <div className="contact-Container">
              <div className="email-logo">
                <a className="link-p" href="mailto:JamesSoonHong@gmail.com">
                  {/* <img className="contactLogo" src={emailLogo} /> */}
                  <p className="email-ptag">Email</p>
                </a>
              </div>
              {/* <p className="email-ptag">
                <a className="link-p" href="mailto:JamesSoonHong@gmail.com">
                Email
                </a>
              </p> */}
            </div>

            <div className="contact-Container">
              <a
                className="link-p"
                href={`https://www.instagram.com/jasminelandscapedesign/?hl=en`}
              >
                <div className="instagram-logo">
                  {/* <img className="contactLogo" src={instaLogo} /> */}
                  <p className="instagram-ptag">Instagram</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-Container">
              <h3 className="copyright"> © COPYRIGHT {new Date().getFullYear()} Jasmine Landscaping & Design - ALL RIGHTS RESERVED</h3>

        </div>
      </div>
    </>
  );
};

export default Footer;
