import React from 'react';
import { ContactContainer, ContactForm, ContactInfo } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (
  <ContactContainer>
    <ContactForm>
    
    <div className="headerinfo">
    <p className="bold">CONTACT US</p>
    <p className="extraHeight">We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
    </div>

    <form>
    YOUR NAME (required) <br />
    <input type="text" name="name" />
    <br />
    YOUR EMAIL (required) <br />
    <input type="email" name="email" />
    <br />
    SUBJECT <br />
    <input type="text" name="subject" />
    <br />
    YOUR MESSAGE <br />
    <textarea name="message">
    </textarea>
    <br />
    <button className="sendButton" type="submit">SEND</button>
    </form>
    </ContactForm>

    <ContactInfo>
      <p className="header">EMAIL</p>
      <p>ashleymay@fortitudephotography.com</p>
      <hr />
      <p className="header">PHONE</p>
      <p>937.509.2589</p>
      <hr />
      <p className="header">ON THE WEB</p>
        <div className="socialmedia">
          <a href="https://www.facebook.com/fortitudephotographyllc/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>

          <a href="https://www.facebook.com/fortitudephotographyllc/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>

        <a href="https://www.linkedin.com/in/ashley-may-a145a4164/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>

        </div>
      <hr />
    </ContactInfo>
  </ContactContainer>
);

export default Contact;