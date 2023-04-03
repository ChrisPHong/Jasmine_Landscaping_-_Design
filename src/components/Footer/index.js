import { useState, useEffect } from "react";
import emailLogo from './email.jpg'
import instaLogo from './instagram_logo.png'
import phoneLogo from './phone_logo.png'
import './Footer.css'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div className="Footer-Container">


                <div className="Jasmine-Landscaping-Container">
                    <p className="font-link">
                        Jasmine Landscaping & Design
                    </p>
                    <div className="JLD-container">
                        <NavLink to='/AboutUs' exact={true} activeClassName='active'>
                            <p>
                                About Us
                            </p>
                        </NavLink>
                        {/* <NavLink to='/Services' exact={true} activeClassName='active'>
                            <p>
                                Services
                            </p>
                        </NavLink> */}
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <p>
                                Home
                            </p>
                        </NavLink>


                    </div>

                </div>

                <div className="Support-Container">
                    <p>Support</p>

                        <NavLink to='/Contact' exact={true} activeClassName='active'>
                            <p>
                                Contact
                            </p>
                        </NavLink>
                </div>

                <div className="Social-Container">
                    <p className="font-link">
                        Social
                    </p>

                    <div className="contact-Container">
                        <div className="email-logo">
                            <a className='link-p' href="mailto:JamesSoonHong@gmail.com">
                                <img className="contactLogo" src={emailLogo} />
                            </a>
                        </div>
                        <p className="email-ptag">
                            <a className='link-p' href="mailto:JamesSoonHong@gmail.com">
                                JamesSoonHong@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="contact-Container">
                        <a className='link-p' href={`https://www.instagram.com/jasminelandscapedesign/?hl=en`}>
                            <div className="instagram-logo">

                                <img className="contactLogo" src={instaLogo} />
                                <p className="email-ptag">
                                    instagram
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Footer;
