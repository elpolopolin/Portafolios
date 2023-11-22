import React from "react";

function Contact() {
    return (
<section className="contact" id="contact">
<div className="container">
  <div className="row center-xs">
    <div className="col-md">
      <h2 className="section-title">Contact</h2>
    </div>
  </div>
  <div className="row center-xs">
    <div className="col-md-6">
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button>Send Message</button>
      </div>
    </div>
    <div className="col-md-6">
      <div className="contact-info">
        <p>Av. Libertador 1897, CABA</p>
        <p>Email: poloracan@company.com</p>
        <p>Phone: +911 1109 4459</p>
      </div>
    </div>
  </div>
</div>
</section>

);
}

export default Contact;