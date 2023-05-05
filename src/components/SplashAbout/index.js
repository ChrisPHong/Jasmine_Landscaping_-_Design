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
            Jasmine landscape & design started as a landscape company in 1993.
            Through the years in Landscape Design & build, amassed knowledge,
            talented individuals, and partners that propelled the company into a
            successful Landscape Company, and now adding building to the
            portfolio. Jasmine landscape & design Build strives to bring indoor
            living to the outdoors. We believe that the outdoors is an extension
            of our homes and should not be neglected. Our company seeks to
            tackle each project differently based on the lifestyle, taste and
            preferences of our clients. We work together with the homeowner from
            the beginning to the end. We help with the landscape design and
            build, the HOA submission process, and material and plant
            selection.
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
