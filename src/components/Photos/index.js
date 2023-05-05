import { useEffect, useState } from "react";
import pic1 from "./photo/pic1.jpg";
import pic2 from "./photo/pic2.jpg";
import pic3 from "./photo/pic3.jpg";
import pic4 from "./photo/pic4.jpg";
import pic5 from "./photo/pic5.jpg";
import pic6 from "./photo/pic6.jpg";
import pic7 from "./photo/pic7.jpg";
import pic8 from "./photo/pic8.jpg";
import pic9 from "./photo/pic9.jpg";
import pic10 from "./photo/pic10.jpg";
import pic11 from "./photo/pic11.jpg";
import pic12 from "./photo/pic12.jpg";
import pic13 from "./photo/pic13.jpg";
import pic14 from "./photo/pic14.jpg";
import pic15 from "./photo/pic15.jpg";
import pic16 from "./photo/pic16.jpg";
import pic17 from "./photo/pic17.jpg";
import pic18 from "./photo/pic18.jpg";
import pic19 from "./photo/pic19.jpg";
import pic20 from "./photo/pic20.jpg";
import pic21 from "./photo/pic21.jpg";
import pic22 from "./photo/pic22.jpg";
import pic23 from "./photo/pic23.jpg";
import pic24 from "./photo/pic24.jpg";
import pic25 from "./photo/pic25.jpg";
import pic26 from "./photo/pic26.jpg";
import pic27 from "./photo/pic27.jpg";
import pic28 from "./photo/pic28.jpg";
import pic29 from "./photo/pic29.jpg";
import pic30 from "./photo/pic30.jpg";
import pic31 from "./photo/pic31.jpg";
import pic32 from "./photo/pic32.jpg";
import pic33 from "./photo/pic33.jpg";
import pic34 from "./photo/pic34.jpg";
import pic35 from "./photo/pic35.jpg";
import pic36 from "./photo/pic36.jpg";
import pic37 from "./photo/pic37.jpg";
import pic38 from "./photo/pic38.jpg";
import pic39 from "./photo/pic39.jpg";
import pic40 from "./photo/pic40.jpg";
import pic41 from "./photo/pic41.jpg";
import pic42 from "./photo/pic42.jpg";
import pic43 from "./photo/pic43.jpg";
import pic44 from "./photo/pic44.jpg";
import pic45 from "./photo/pic45.jpg";
import pic46 from "./photo/pic46.jpg";
import pic47 from "./photo/pic47.jpg";
import pic48 from "./photo/pic48.jpg";
import pic49 from "./photo/pic49.jpg";
import pic50 from "./photo/pic50.jpg";
import pic51 from "./photo/pic51.jpg";
import pic52 from "./photo/pic52.jpg";
import pic53 from "./photo/pic53.jpg";
import pic54 from "./photo/pic54.jpg";
import pic55 from "./photo/pic55.jpg";
import pic56 from "./photo/pic56.jpg";
import pic57 from "./photo/pic57.jpg";
import pic58 from "./photo/pic58.jpg";
import pic59 from "./photo/pic59.jpg";
import pic60 from "./photo/pic60.jpg";
import pic61 from "./photo/pic61.jpg";
import pic62 from "./photo/pic62.jpg";
import pic63 from "./photo/pic63.jpg";
import pic64 from "./photo/pic64.jpg";
import pic65 from "./photo/pic65.jpg";
import pic66 from "./photo/pic66.jpg";
import pic67 from "./photo/pic67.jpg";
import pic68 from "./photo/pic68.jpg";
import pic69 from "./photo/pic69.jpg";
import pic70 from "./photo/pic70.jpg";
import pic71 from "./photo/pic71.jpg";
import pic72 from "./photo/pic72.jpg";
import pic73 from "./photo/pic73.jpg";
import pic74 from "./photo/pic74.jpg";
import pic75 from "./photo/pic75.jpg";
import pic76 from "./photo/pic76.jpg";
import pic77 from "./photo/pic77.jpg";
import pic78 from "./photo/pic78.jpg";
import pic79 from "./photo/pic79.jpg";
import pic80 from "./photo/pic80.jpg";
import pic81 from "./photo/pic81.jpg";
import pic82 from "./photo/pic82.jpg";
import pic83 from "./photo/pic83.jpg";
import SinglePhoto from "../SinglePhoto";
import "./Photos.css";
import PagePhotos from "../PagePhotos";

const Photos = () => {
  const storage = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
     pic10,
     pic11,
     pic12,
    //  pic13,
     pic14,
     pic15,
     pic16,
     pic17,
     pic18,
     pic20,
    //  pic21,
     pic22,
     pic23,
     pic24,
     pic25,
     pic26,
     pic27,
     pic28,
     pic29,
     pic30,
     pic31,
     pic32,
     pic33,
     pic34,
     pic35,
     pic37,
     pic38,
     pic39,
     pic40,
     pic41,
     pic42,
     pic43,
     pic44,
     pic45,
     pic46,
     pic47,
     pic48,
     pic49,
     pic50,
     pic51,
     pic52,
     pic53,
     pic54,
     pic55,
     pic56,
     pic57,
     pic58,
     pic59,
     pic60,
     pic61,
     pic62,
     pic63,
     pic65,
     pic66,
     pic67,
     pic68,
     pic69,
     pic70,
     pic71,
     pic72,
     pic73,
     pic74,
     pic75,
     pic76,
     pic77,
     pic78,
     pic79,
     pic80,
     pic81,
     pic82,
     pic83,
  ];

  const photos1 = storage.slice(0, 20);
  const photos2 = storage.slice(20, 40);
  const photos3 = storage.slice(40, 60);
  const photos4 = storage.slice(60);
  const left = "<";
  const right = ">";

  // did not use pic64, pic19, pic36
  const [toggleState, setToggleState] = useState(1);

  const changeState = (idx, method) => {
    let hash = {
      "-": -1,
      "+": 1};
    setToggleState(idx + hash[method]);
  }

  return (
    <div className="Full-Container">
      <div className="Photo-Container">
        <button
          className="pageTurner-Button"
          onClick={() => {
            changeState(toggleState, "-");
        }}
          disabled={toggleState > 1 ? false : true}
        >
          {left}
        </button>

        <div className="AllPhotos-div">
          <div className={toggleState === 1 ? "page active-page" : "page"}>
            <PagePhotos photos={photos1} />
          </div>

          <div className={toggleState === 2 ? "page active-page" : "page"}>
            <PagePhotos photos={photos2} />
          </div>

          <div className={toggleState === 3 ? "page active-page" : "page"}>
            <PagePhotos photos={photos3} />
          </div>

          <div className={toggleState === 4 ? "page active-page" : "page"}>
            <PagePhotos photos={photos4} />
          </div>
        </div>

        <button
          className="pageTurner-Button"
          disabled={toggleState < 4 ? false : true}
          onClick={() => {
            changeState(toggleState, "+");
          }}
        >
          {right}
        </button>
      </div>
    </div>
  );
};

export default Photos;
