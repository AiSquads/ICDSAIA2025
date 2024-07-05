import React from "react";
// import "./Venue.css";

const Venue = () => {
  return (
    <main className="mains">
      <div className="content">
        <div className="subm_head">
          <h2>VENUE</h2>
          <div className="lines"></div>
        </div>
        <div className="detail">
          <p>
            Gobi Arts & Science College (Autonomous) <br />
            <span>
              Gobichettipalayam,
              <br /> Erode, Tamilnadu, India
            </span>
          </p>
        </div>
        <div className="about_heads">
          <h2>Location</h2>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4227655850545!2d77.40168821412168!3d11.449380649543594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d698880c345%3A0xe08dd16d1dc3a42f!2sGobi%20Arts%20%26%20Science%20College%2C%20Gobi!5e0!3m2!1sen!2sin!4v1679469443797!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gobi Arts & Science College"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Venue;
