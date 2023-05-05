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
        </div>
        <img className="aboutPageImage" src={photo} />
      </div>
      <div className="x-container">
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
        <div
          className="state_container"
          onClick={() => {
            navigate("/Contact");
          }}
        >
          <h2>Build Stage</h2>
          <span className="AboutUs-stage-span">
            What makes us different is a thorough process to ensure everything
            is planned out before any construction. During our design phase, we
            make sure all the details get ironed out, essentially, reducing
            costly mistakes. Our design phase consists of the following:
            Consultation & Assessment Design Concepts & Budgeting 3-D Design
            Presentations 2-D Designs for HOA & City submission Estimation &
            Proposal Engineering & Permits
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
