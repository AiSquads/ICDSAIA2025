// ThankYou.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router for navigation

const ThankYou = () => {
  return (
    <div>
      <main className="main">
        <div className="info_div">
          <div className="chck_div">
            <i className="bx bx-check chck"></i>
          </div>
          <div className="text_div">
            <h3>Thank You!</h3>
            <p>Your data has been stored successfully!</p>
            <div className="btn_div">
              <Link to="/faq" className="btn">
                OK
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
