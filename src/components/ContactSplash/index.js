import './Contact.css';
import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react';

const Contact = () => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        if (errors.length > 0) {
            setShow(true)
            return;
        } else {
            console.log('sent');

            // emailjs.sendForm('service_qo7ioim', 'template_ybhyw45', e.target, 'bVwjn2fVYUy3phcPs')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });

            // e.target.reset();
        }
    }

    useEffect(()=>{
        let error = [];
        let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(firstName.length < 1) error.push('Provide A First Name')
        if(firstName.replace(/\s/g, '').length < 1) error.push('Provide a First Name')
        if(lastName.length < 1) error.push('Provide A Last Name')
        if(lastName.replace(/\s/g, '').length < 1) error.push('Provide a Last Name')
        if(regexEmail.test(email) < 1) error.push('Provide A Valid Email')
        if(phoneNumber.length < 0) error.push('Provide A Phone Number')
        if(phoneNumber.length != 10) error.push('Provide A Valid Phone Number')
        if(message.length < 0) error.push('Provide A Message')

        setErrors(error)
    }, [firstName, lastName, email, phoneNumber, message])
    return (
        <div className='SplashContact-Container'>
            {/* <div className='instagram-Container'>
                <p>storage</p>
            </div> */}
            <div className="form-container">
                <div className='h1-container'>

                    <h1>Contact Us</h1>
                </div>
            <div>
               {show ? errors.map((error)=> {
                    return(
                        <>
                        <li style={{color:"red"}}>
                            {error}
                            </li>
                        </>
                    )
                }) : null}
            </div>
                <form
                    onSubmit={sendEmail}>
                    <div className='form-div'>
                        <label className='custom-field one'>
                            <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="first_name" required />
                            <span class="placeholder">First Name</span>
                        </label>
                        <label className='custom-field one'>
                            <input onChange={(e)=>{
                                setLastName(e.target.value)
                            }}type="text" name="last_name" required />
                            <span class="placeholder">Last Name</span>
                        </label>
                        <label className='custom-field one'>
                            <input onChange={(e)=>{
                                setEmail(e.target.value)
                            }}type="text" name="email" required />
                            <span class="placeholder">Email</span>
                        </label>
                        <label className='custom-field one'>
                            <input onChange={(e)=>{
                                setphoneNumber(e.target.value)
                            }}type="numbers" name="phone" required />
                            <span class="placeholder">Phone Number</span>
                        </label>

                        <label className='text-field one textarea'>

                            <textarea onChange={(e)=>{
                                setMessage(e.target.value)
                            }}
                            className='textarea-input' placeholder="Leave a Message..." type="text" name="message" required />
                            {/* <span class="placeholder">Message</span> */}

                            <span class="placeholder"></span>
                        </label>
                        <input className='submit-button' type="submit" value="Send Message"></input>

                    </div>

                </form>

            </div>

        </div>
    )
};



export default Contact;
