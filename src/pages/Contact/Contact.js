import React, { useRef, useState } from 'react';
import './Contact.css';
import { Zoom } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID,
    )
    .then(
      (result) => {
        setLoading(false);
        setStatus({ message: 'Your message has been received successfully!', type: 'success' });
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        setStatus({ message: 'An error occurred. Please try again.', type: 'error' });
      }
    );

    setTimeout (() => {
      setStatus({ message: '', type: '' });
    }, 5000);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>

        <Zoom duration={1000}>
          <p className="contact-description">
            You can reach out to me for collaboration, job opportunities, or freelance work.
          </p>

          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form card">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-label">Your Name</label>
                  <input
                    type="text"
                    className="contact-input"
                    id="name"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-label">Your Email</label>
                  <input
                    type="email"
                    className="contact-input"
                    id="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-label">Subject</label>
                <input
                  type="text"
                  className="contact-input"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea
                  className="contact-textarea"
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <div className="contact-form-btn">
                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
