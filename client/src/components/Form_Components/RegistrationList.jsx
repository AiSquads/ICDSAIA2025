import React, { useEffect, useState } from "react";
import axios from "axios";

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get("/reg");
        setRegistrations(response.data);
      } catch (err) {
        console.error("Error fetching registrations:", err);
        setError("Error fetching registrations.");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <p>Loading registrations...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {registrations.map((registration) => (
        <div key={registration._id} className="registration-item">
          <h4>{registration.name}</h4>
          <p>{registration.email}</p>
          <p>{registration.phone}</p>
          <p>{registration.college}</p>
          <p>{registration.country}</p>
        </div>
      ))}
    </div>
  );
};

export default RegistrationList;
