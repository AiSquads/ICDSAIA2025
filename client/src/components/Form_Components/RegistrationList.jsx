import React from "react";

const RegistrationList = ({ registrations }) => {
  if (!Array.isArray(registrations)) {
    return <p>Invalid registration data</p>;
  }

  return (
    <div>
      {registrations.map((registration, index) => (
        <div key={index} className="registration-item">
          <h4>{registration.name}</h4>
          <p>Email: {registration.email}</p>
          <p>Phone: {registration.phone}</p>
          <p>
            Registered On:{" "}
            {new Date(registration.registeredOn).toLocaleDateString()}
          </p>
          {/* Add other registration fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default RegistrationList;
  