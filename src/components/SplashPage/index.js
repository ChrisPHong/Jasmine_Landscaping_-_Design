import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
// import splashPhoto from "./splashPagePhoto.png";
import Contact from "../ContactSplash";
import landscapePic from "./pic51.jpg";
import homePicture from "./homePicture.jpg";
import SplashAbout from "../SplashAbout";
import SplashGallery from "../SplashGallery";

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-z">
      <div className="Splash-full-container">
        <div className="splashImage-container">
          <div className="welcomeDiv">
            <h3 className="welcomeh3">Welcome to Jasmine</h3>
            <h3 className="welcomeh3 secondh3">Landscaping & Design</h3>
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
      <Contact />
      <SplashAbout />
      <SplashGallery />
    </div>
  );
};

export default SplashPage;
