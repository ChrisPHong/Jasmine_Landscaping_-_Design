import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
// import splashPhoto from "./splashPagePhoto.png";
import Contact from "../ContactSplash";
import landscapePic from "./pic51.jpg";
import homePicture from "./homePicture.jpg";
import SplashAbout from "../SplashAbout";
import SplashGallery from '../SplashGallery'

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Splash-full-container">
        <div className="splashImage-container">
          <div className="welcomeDiv">
            <h3 className="welcomeh3">
              Welcome to Jasmine
            </h3>
            <h3 className="welcomeh3 secondh3">
              Landscaping & Design
            </h3>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="quote-button"
            >
              Get a FREE Quote
            </button>
            <p className="phoneNumberSplash">1 (949) 412-3153</p>
          </div>
        </div>
      </div>
      <div className="contact-picture-container">
        <div className="splash-contact-container">
          <div className="contact-descrip">
            <h3 className="contactUs-h3">Contact Us</h3>
            <div className="contact-p-tag-container">

            <p className="contact-p-tag">
              Thank you for showing interest in our company. If you would like
              to contact us for any reason, please fill out the form to your
              right to get started on your free
              estimate!
            </p>
            </div>
            <p className="phoneNumber-descrip">Or Call: 1(949) 412-3153</p>
          </div>
          <Contact />
        </div>
      </div>
              <SplashAbout />
              <SplashGallery />
    </>
  );
};

export default SplashPage;
