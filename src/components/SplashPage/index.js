import { NavLink } from 'react-router-dom';
import './SplashPage.css'
import splashPhoto from './splashpage.jpg'

const SplashPage = () => {
    return (
        <>
            <div className='full-container'>
                <div>
                    <img className='SplashPhoto' src={splashPhoto} />
                    <h1 className='company-name'>Jasmine Landscaping & Design</h1>

                    <NavLink to='/Contact'>Contact</NavLink>
                    {/* <p className='company-name'>Jasmine Landscaping & Design</p> */}
                </div>
            </div>
        </>

    )
}



export default SplashPage;
