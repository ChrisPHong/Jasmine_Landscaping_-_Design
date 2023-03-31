import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
import splashPhoto from "./splashpage.jpg";

const SplashPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="full-container"
        style={{ backgroundImage: `url(${splashPhoto})` }}
      >
        <div>
          {/* <img className="SplashPhoto" src={splashPhoto} /> */}
          <h1 className="company-name">Jasmine Landscaping & Design</h1>

          <button
            className="button-contact"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </button>
          {/* <p className='company-name'>Jasmine Landscaping & Design</p> */}
        </div>
      </div>
    </>
  );
};

export default SplashPage;
