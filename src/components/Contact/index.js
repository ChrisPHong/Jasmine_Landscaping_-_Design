import './Contact.css';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qo7ioim', 'template_ybhyw45', e.target, 'bVwjn2fVYUy3phcPs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }
    return (
        <div className='Contact-Container'>
            <div className='instagram-Container'>
                <p>storage</p>
            </div>
            <div className="form-container">
                <form
                    onSubmit={sendEmail}>
                    <div className='form-div'>
                        <label className='custom-field'>
                            <input type="text" name="first_name"  required/>
                            <span class="placeholder">First Name</span>
                        </label>
                        <label className='custom-field'>
                            <input type="text" name="last_name"  required/>
                            <span class="placeholder">Last Name</span>
                        </label>
                        <label className='custom-field'>
                            <input type="text" name="email" required />
                            <span class="placeholder">Email</span>
                        </label>
                        <label className='custom-field'>
                            <input type="numbers" name="phone"  required/>
                            <span class="placeholder">Phone Number</span>
                        </label>
                        <label className='custom-field'>
                            <input type="text" name="message"  required/>
                            <span class="placeholder">Message</span>

                            <span class="placeholder"></span>
                        </label>
                        <input type="submit" value="Send Message"></input>

                    </div>

                </form>

            </div>

        </div>
    )
};



export default Contact;
