import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "2348073158981";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
Hello, I visited your portfolio website.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p>CONTACT ME</p>

          <h2>Let's Work Together</h2>

          <span>
            Have a project in mind or want to work together? Feel free to
            reach out. I'd love to hear from you.
          </span>
        </div>

        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-details">

              {/* Email */}
              <div className="contact-item">
                <div>
                  <h4>Email</h4>
                  <p>ogungbejeayanfe@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div>
                  <h4>Phone</h4>
                  <p>08073158981, 08138069490</p>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div>
                  <h4>Location</h4>
                  <p>Nigeria</p>
                </div>
              </div>

            </div>
          </div>


          {/* =========================
              CONTACT FORM
          ========================== */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>


            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>


            {/* Submit Button */}
            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;