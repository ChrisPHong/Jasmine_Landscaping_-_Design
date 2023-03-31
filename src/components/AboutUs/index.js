import "./AboutUs.css";
import photo from "./dad.jpg";
import { useNavigate } from "react-router";


const AboutUs = () => {
const navigate = useNavigate();
  return (
    <div className="About-Us-Container">
      <div className="image-container">
        <p>Hello there! My name is James</p>
        <img className="selfie" src={photo} />
        <div>
          <p className="AboutUs-p-tag">
            Hello, my name is James and I have experience in a multitude of
            services when it comes to landscaping. I have designed frontyards,
            backyards, patios, and collaborated in creating a swimming pool.
            Please feel free to contact me anytime for an estimate on your
            frontyard, backyard, and any other landscaping feature you'd like.
            Contact me @ jamesSoonHong@gmail.com. Feel free to look through my
            work via instagram.
          </p>
          <button className="button-contact" onClick={()=>{navigate('/contact')}}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
