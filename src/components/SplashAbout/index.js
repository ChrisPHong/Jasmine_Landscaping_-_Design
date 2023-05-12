import "./SplashAbout.css";
import photo from "./splashPagePhoto.png";
import { useNavigate } from "react-router";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";

const SplashAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="Hero-Splash-Div">
      <div className="SplashAboutJLD-Container">
        <div className="AboutJLD-Info">
          <h3 className="AboutJLDh3">About JLD</h3>
          <p className="about-p-tag">
            Jasmine Landscape & Design was established in 1993 and has since
            built and designed outdoor live spaces. We have worked on
            patios, pools, barbecues, and many more features for your frontyard
            and backyard needs! Click the button to learn more about Jasmine Landscape & Design!
          </p>
          <button
            className="learnMoreButton"
            onClick={() => {
              navigate("/AboutUs");
            }}
          >
            Learn More
          </button>
        </div>
        <img className="aboutPageImage" src={photo} />
        <div className="twoImageContainer">
          <img className="pictureAbout" src={pic1} />
          <img className="pictureAbout" src={pic2} />
        </div>
      </div>
    </div>
  );
};

export default SplashAbout;
