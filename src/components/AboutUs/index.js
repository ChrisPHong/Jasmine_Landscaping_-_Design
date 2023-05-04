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
        What makes us different is a thorough process to ensure everything is planned out before any construction.  During our design phase, we make sure all the details get ironed out, essentially, reducing costly mistakes.

Our design phase consists of the following:

Consultation & Assessment

Design Concepts & Budgeting

3-D Design Presentations

2-D Designs for HOA & City submission

Estimation & Proposal

Engineering & Permits
      </div>
      <div className="state_container">
        <h2>Build Stage</h2>

      </div>
    </div>
  );
};

export default AboutUs;
