import "./AboutUs.css";
import photod from "./james.png";
import barbPhoto from "./pic58.jpg";
import landPhoto from "./pic59.jpg";
import photo from "./splashPagePhoto.png";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="Full-About-Container">
      <div className="AboutJLD-Container">
        <div className="AboutJLD-Info">
          <h3 className="AboutJLDh3">About JLD</h3>
          <p className="about-p-tag">
            Jasmine Landscaping has been established since 2001.
          </p>
        </div>
        <img className="aboutPageImage" src={photo} />
      </div>
      <div className="design_container state_container">
        <h2>Design Stage</h2>
        hello this is a test
      </div>
      <div className="state_container">
        <h2>Build Stage</h2>
        hello this is a test
      </div>
    </div>
  );
};

export default AboutUs;
