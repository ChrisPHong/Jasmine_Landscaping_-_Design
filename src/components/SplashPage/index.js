import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
import splashPhoto from "./splashpage.jpg";
import Contact from "../Contact";

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="full-container">
        <div className="image-Container">
          <img className="splashPhoto" src={splashPhoto} alt="splashPhoto" />
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
          <Contact />
    </>
  );
};

export default SplashPage;
