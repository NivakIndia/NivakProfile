import React, { useRef } from 'react'
import './contact.css'
import send from '../../assets/send.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        },
      );
  };
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>
                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>
                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">kavinmano2211@gmail.com</span>

                        <a href="mailto:kavinmano2211@gmail.com" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">8825685300</span>

                        <a href="https://api.whatsapp.com/send?phone=8825685300&text=Hello, More information!" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-messenger contact_card-icon"></i>
                        <h3 className="contact_card-title">Messenger</h3>
                        <span className="contact_card-data">kavinmano2211@gmail.com</span>

                        <a href="" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write me your message</h3>
                
                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Name</label>
                        <input type="text" name="name" className='contact_form-input' placeholder='Insert your name' required/>
                    </div>

                    <div className="contact_form-div">
                        <label className="contact_form-tag">Mail</label>
                        <input type="email" name="email" className='contact_form-input' placeholder='Insert your Mail' required/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">Message</label>
                        <textarea name="message" cols={30} rows={10} className='contact_form-input' placeholder='Write your message' required></textarea>
                    </div>

                    <button className="button button_flex">
                        Send Message
                        <img src={send} alt='send' style={{marginLeft: '10px'}}/>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
