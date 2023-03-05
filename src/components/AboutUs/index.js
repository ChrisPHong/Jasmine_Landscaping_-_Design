import './AboutUs.css';
import photo from './dad.jpg'

const AboutUs = () => {

    return (
        <>
            <div className='image-container'>
                <img className='selfie' src={photo}/>

                <p className='AboutUs-p-tag'>Hello, my name is James and I have experience in a multitude of services when it comes to landscaping. I have designed frontyards, backyards, patios, and collaborated in creating a swimming pool. Please feel free to contact me anytime for an estimate on your frontyard, backyard, and any other landscaping feature you'd like. Contact me @ jamesSoonHong@gmail.com. Feel free to look through my work via instagram.
                </p>
            </div>
        </>
    )
}


export default AboutUs;
