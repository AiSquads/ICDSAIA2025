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
      .get("http://localhost:5000/api/registration")
      .then((response) => {
        setRegistrationData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching registration data:", error);
      });

    // Fetch FAQ data
    axios
      .get("http://localhost:5000/api/faq")
      .then((response) => {
        setFaqData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);

  return (
    <main className="mains">
      <div className="about_heads">
        <h2>Admin Panel</h2>
      </div>

      <div className="admin-section">
        <h3>Registration Data</h3>
        {registrationData.length > 0 ? (
          <RegistrationList registrations={registrationData} />
        ) : (
          <h4>No Registration Data Found</h4>
        )}
      </div>

      <div className="admin-section">
        <h3>FAQ Data</h3>
        {faqData.length > 0 ? (
          <FAQList faqs={faqData} />
        ) : (
          <h4>No FAQ Data Found</h4>
        )}
      </div>
    </main>
  );
};

export default AdminPanel;
