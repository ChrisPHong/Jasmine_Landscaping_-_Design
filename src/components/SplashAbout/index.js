import "./SplashAbout.css";
import photo from "./splashPagePhoto.png";
import { useNavigate } from "react-router";
const SplashAbout = () => {
    const navigate = useNavigate();
  return (
    <div className="Hero-Splash-Div">
      <div className="SplashAboutJLD-Container">
        <div className="AboutJLD-Info">
          <h3 className="AboutJLDh3">About JLD</h3>
          <p className="about-p-tag">
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
            Lorem Ipsum hello, this is a test Lorem Ipsum hello, this is a test
          </p>
          <button className="learnMoreButton" onClick={()=>{
            navigate('/AboutUs')
          }}>Learn More</button>
        </div>
        <img className="aboutPageImage" src={photo} />
      </div>
    </div>
  );
};

export default SplashAbout;
