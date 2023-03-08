import "./SinglePhoto.css"




const SinglePhoto = (props) => {
    return (
        <div className="singlePhoto-div">
        <img  className='photo' src= {props.photo} />
        </div>

    )


}


export default SinglePhoto;
