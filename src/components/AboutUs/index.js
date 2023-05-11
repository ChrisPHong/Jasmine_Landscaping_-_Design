import "./AboutUs.css";
import twoDImage from "./twoDImage.png";
import threeDImage from "./threeDImage.JPG";
import phoneImage from './pic59.jpg'
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
            Jasmine Landscape & Design was established in 1993 and has since
            built and designed indoor and outdoor live spaces. Our company
            believes that the outdoors is an extension of our homes and should
            not be neglected. We seek to tackle each project differently based
            on the lifestyle, taste and preferences of our clients. We work
            together with the homeowner from the beginning to the end. We help
            with the landscape design and build, the HOA submission process,
            materials, and plant selection. Contact us when you're interested in
            improving your home!
          </p>
          <button
            className="learnMoreButton"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </button>
        <img className="phoneImage" src={phoneImage} />
        </div>
        <img className="aboutPageImage" src={photo} />
      </div>
      <div className="x-container">
        <div className="y-container">

          <div
            className="design_container state_container"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            <h2>Design Stage</h2>
            <span className="AboutUs-stage-span">
              During the design stage, we discuss the specific features, details
              and create a design that is catered to your home. We iron out all
              the details needed and provide an illustrated blueprint of your
              design. Our design stage consists of the following:
              <ul>
                <li>Consultation & Assessment</li>
                <li>Design Concepts</li>
                <li>3-D Illustrated Presentation</li>
                <li>2-D Designs for HOA & City Submission</li>
                <li>Estimate & Proposal</li>
                <li>Engineer & Permits</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="y-container">
          <div
            className="state_container"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            <h2>Build Stage</h2>
            <span className="AboutUs-stage-span">
              We have streamlined the landscaping build stage by breaking it
              down into fundamental phases that promote optimal productivity and
              efficiency:
            </span>
            <ul>
              <li>Site Demolition</li>
              <li>Underground Utility Installation & Inspections</li>
              <li>Leveling and Grading</li>
              <li>Foundation Establishment</li>
              <li>Application of Finishing Touches</li>
              <li>Final Inspections to ensure Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-container">

      <img className="twoDImage" src={twoDImage} />
      <div></div>
      <img className="threeImage" src={threeDImage} />
      </div>
    </div>
  );
};

export default AboutUs;
