import "./AboutUs.css";
import photo from "./james.png";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="About-Us-Container">
      <div className="circular--portrait">
        <img className="selfie" src={photo} alt='owner' />
      </div>
      <div className="Information-aboutUs-Container">
        <div className="Name-button-div">
          <p className="intro">James Hong</p>
          <p className="AboutUs-p-tag">Owner & Designer</p>
          <button
            className="button-contact"
            onClick={() => {
              navigate("/contact");
            }}
            >
            Contact Me
          </button>
        </div>
      </div>
    </div>
            <div className="Below-AboutUs-Container">
            <div>image</div>
            <div>Follow This guy!</div>
            </div>
            </>
  );
};

export default AboutUs;
