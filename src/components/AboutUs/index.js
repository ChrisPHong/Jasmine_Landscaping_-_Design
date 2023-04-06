import "./AboutUs.css";
import photo from "./james.png";
import barbPhoto from "./pic58.jpg";
import landPhoto from "./pic59.jpg";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="About-Us-Container">
        <div className="circular--portrait">
          <img className="selfie" src={photo} alt="owner" />
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
        <div className="Description-container">
          <h3>Jasmine Landscaping & Design</h3>
          <div className="company-Description">
            <div className="picture-p-container">
              <img className="aboutusPicture" alt='landscape_Picture' src={landPhoto}></img>
              <p className="p-description">
                Established in 1993. Lorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem
              </p>
            </div>
            <div className="picture-p-container">
              <p className="p-description">
                Established in 1993. Lorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem
              </p>
              <img className="aboutusPicture" alt='landscape_Picture' src={barbPhoto}></img>
            </div>
          </div>
        </div>
        <button className="Estimate-Button"
        onClick={()=> {
          navigate('/Contact')
        }}>Get an Estimate</button>
      </div>
    </>
  );
};

export default AboutUs;
