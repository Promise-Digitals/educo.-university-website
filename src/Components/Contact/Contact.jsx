import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={('assets/msg-icon.png')} alt="" /></h3>
                <p>Feel free to reach out through our contact form or find our contact infomation below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={('assets/mail-icon.png')} alt="" />EducoUniversity@edu.co.org</li>
                    <li><img src={('assets/phone-icon.png')} />+1 123-456-7890</li>
                    <li><img src={('assets/location-icon.png')} />80 Messachuttes Ave., Cambridge<br/>NA 025524, United States.</li>
                </ul>
            </div>

            <div className="contact-col">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter Name' required/>

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" placeholder='Phone Number' required/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="6" placeholder='Write Message' required></textarea>
                    <button type='submit' className='btn teal-btn'>Send Message <img src={('assets/white-arrow.png')} alt="" /></button>
                </form>
                <span></span>
            </div>
        </div>
    )
}

export default Contact;
