import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <main className="mains" id="main">
      <div className="contact_container">
        <div className="subm_head">
          <h2>CONTACT</h2>
          <div className="lines"></div>
        </div>
        <div className="mail_contact">
          <div className="about_heads">
            <h2>Email</h2>
          </div>
          <a href="mailto:icdsaia@gascgobi.ac.in?subject=Contact Support">
            icdsaia@gascgobi.ac.in
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
