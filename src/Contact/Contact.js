import React from "react";

const Contact = () => {
    const handleSubmit = () => {
        
    }
  return (
    <div>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="contact-name">
          <label htmlFor="name">Name</label>
          <input type="text" className="" />
        </div>
        <div className="contact-email">
          <label htmlFor="email-input">Email Address</label>
          <input type="email" className="" />
        </div>
        <div className="contact-message">
          <label htmlFor="message">Message</label>
          <textarea rows="5" type="text"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
