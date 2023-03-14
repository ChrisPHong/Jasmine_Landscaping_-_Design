import './Contact.css';
import emailjs from 'emailjs-com'

const Contact = () =>{
    const sendEmail = (e) =>{
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
        <div className="form-container">
        <form
        onSubmit={sendEmail}>
            <div className='form-div'>
                <label>
                <input type="text" placeholder="First Name" name="first_name"/>
                </label>
                <label>
                <input type="text" placeholder="Last Name" name="last_name"/>
                </label>
                <label>
                <input type="email" placeholder="Email Address" name="email"/>
                </label>
                <label>
                <input type="numbers" placeholder="Phone Number" name="phone"/>
                </label>
                <label>
                <input type="text" placeholder="Message" name="message"/>
                </label>
                <input type="submit" value="Send Message"></input>
            </div>


        </form>

    </div>

    )
};



export default Contact;
