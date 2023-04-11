import "./SplashGallery.css";
import photo1 from "./photos/pic1.jpg";
import photo2 from "./photos/pic2.jpg";
import photo3 from "./photos/pic3.jpg";
import photo4 from "./photos/pic4.jpg";
import photo5 from "./photos/pic5.jpg";
import photo6 from "./photos/pic6.jpg";
import photo7 from "./photos/pic7.jpg";
import photo8 from "./photos/pic8.jpg";
import photo9 from "./photos/pic9.jpg";

import { useNavigate } from "react-router";

const SplashGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="SplashGalleryContainer">
        <h3 className="galleryh3">Gallery</h3>
        <div className="galleryPictures-container">
          <div className="picture-container">
            <img className="galleryPicture" alt="picture1" src={photo1} />
            <img className="galleryPicture" alt="picture2" src={photo2} />
            <img className="galleryPicture" alt="picture3" src={photo3} />
            <img className="galleryPicture" alt="picture4" src={photo4} />
          </div>
          <div className="picture-container">
            <img className="galleryPicture" alt="picture6" src={photo6} />
            <img className="galleryPicture" alt="picture5" src={photo5} />
            <img className="galleryPicture" alt="picture7" src={photo7} />
            <img className="galleryPicture" alt="picture8" src={photo8} />
            {/* <img className="galleryPicture" alt="picture9" src={photo9} /> */}
          </div>
        </div>
        <button className="galleryButton" onClick={()=>{
          navigate('/photos')
        }}>See Full Gallery</button>
      </div>
    </>
  );
};

export default SplashGallery;
