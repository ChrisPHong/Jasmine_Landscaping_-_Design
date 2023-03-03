import './SplashPage.css'
import splashPhoto from './splashpage.jpg'

const SplashPage = () => {
    return (
        <>
            <div className='full-container'>
                <div>
                    <img className='SplashPhoto' src={splashPhoto} />
                    <p className='company-name'>Jasmine Landscaping & Design</p>
                </div>
            </div>
        </>

    )
}



export default SplashPage;
