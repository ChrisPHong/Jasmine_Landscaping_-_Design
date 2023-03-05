import { useState, useEffect } from "react";
import emailLogo from './email.jpg'
import instaLogo from './instagram_logo.png'
import phoneLogo from './phone_logo.png'
import './Footer.css'

const Footer = () => {

    return (
        <>
            <div className="Contact-Us-Container">
                <p className="font-link">
                    Contact Us
                </p>
                <div className="Logo-Container">
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
                    {/* <img className="contactLogo" src={phoneLogo} /> */}
                </div>

            </div>
        </>
    )
}


export default Footer;
