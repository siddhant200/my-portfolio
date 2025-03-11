import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    // Your WhatsApp Number (Replace with actual number, no + or spaces)
    const phoneNumber = "9969393199"; // Replace with your WhatsApp number

    // Encode message for URL safety
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Corrected WhatsApp Web & Mobile URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">Let's get in touch! Feel free to reach out.</p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group">
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required 
              value={formData.message} 
              onChange={handleChange} 
            ></textarea>
          </div>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
