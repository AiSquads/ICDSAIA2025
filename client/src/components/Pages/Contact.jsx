import React from "react";
import "../../assets/css/contact.css";

const Contact = () => {
  return (
    <main className="mains" id="main">
      <div className="contact_container">
        <div className="subm_head">
          <h2>CONTACT</h2>
          <div className="lines"></div>
        </div>
        <div className="mail_contact mt-10">
          <div className="">
            <h1 className="text-2xl mb-5">Email</h1>
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
