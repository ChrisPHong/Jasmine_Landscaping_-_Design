import { useState } from "react";
import "./SinglePhoto.css";

const SinglePhoto = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };
  if (show) {
    document.body.classList.add("active-modl");
  } else {
    document.body.classList.remove("active-modl");
  }
  return (
    <>
      {show &&
        ((
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img className="modal-picture" src={props.photo} />
              <button
                className="close-modal"
                onClick={() => {
                  toggleModal();
                }}
              >
                X
              </button>
            </div>
          </div>
        ): null)}
      <div className="singlePhoto-div">
        <img
          className="photo"
          src={props.photo}
          onClick={() => {
            toggleModal();
          }}
        />
      </div>
    </>
  );
};

export default SinglePhoto;
