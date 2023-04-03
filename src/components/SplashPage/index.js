import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
import splashPhoto from "./splashpage.jpg";
import Contact from '../ContactSplash'
import landscapePic from './pic51.jpg'

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="full-container">
        <div className="image-Container">
          {/* <img className="splashPhoto" src={splashPhoto} alt="splashPhoto" /> */}
          <img className="splashPhoto" src={landscapePic} alt="splashPhoto" />
        </div>
        <div className="Information-Container">
          <h1 className="company-name">Jasmine Landscaping & Design</h1>
          <button
            className="contact-splash"
            onClick={() => {
              navigate("/Contact");
            }}
            >
            Contact Us
          </button>
        </div>
      </div>
      <div className="contact-picture-container">
            <div></div>
        <div className="landscapePicture-div">

          <img className="landscapePicture" src={splashPhoto} />
        </div>
        <div className="splash-contact-container">

          <Contact />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SplashPage;
