import "./AboutUs.css";
import photo from "./james.png";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="About-Us-Container">
      <div className="circular--portrait">
        <img className="selfie" src={photo} />
      </div>
      <div className="Information-aboutUs-Container">
        <div>
          <h1 className="intro">Owner & Designer</h1>
          <p className="AboutUs-p-tag">James</p>
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
  );
};

export default AboutUs;
