import React, { useState, useEffect } from "react";
import axios from "axios";
import FAQList from "./../Form_Components/FAQList";
import RegistrationList from "./../Form_Components/RegistrationList";

const AdminPanel = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch registration data
    axios
      .get("http://localhost:80/reg")
      .then((response) => {
        setRegistrationData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching registration data:", error);
      });

    // Fetch FAQ data
    axios
      .get("http://localhost:80/faq")
      .then((response) => {
        setFaqData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);

  return (
    <main className="mains">
      <div className="subm_head">
        <h2 className="">Admin Panel</h2>
        <div className="lines"></div>
      </div>

      <div className="admin-section text-center m-10">
        <div className="subm_head">
          <h2 className="">Registration Data </h2>
          <div className="sub_lines"></div>
        </div>
        {registrationData.length > 0 ? (
          <RegistrationList registrations={registrationData} />
        ) : (
          <h4> No Registration Data Found </h4>
        )}
      </div>

      <div className="admin-section text-center m-10">
        <div className="subm_head">
          <h2 className="">FAQ Data </h2>
          <div className="sub_lines"></div>
        </div>
        {faqData.length > 0 ? (
          <FAQList faqs={faqData} />
        ) : (
          <h4> No FAQ Data Found </h4>
        )}
      </div>
    </main>
  );
};

export default AdminPanel;
