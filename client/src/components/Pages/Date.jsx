import React from "react";
import Countdown from "./../Home_Components/Countdown";
import DateDetails from "./../Home_Components/Date_Deatils";

const Date = () => {
  return (
    <div>
      <section className="section_container mt-20">
        {/* countdown */}
        <Countdown />
      </section>
      <section className="section_container mb-10 justify-center">
        <div className="subm_head">
          <h2>Important Dates</h2>
          <div className="lines"></div>
        </div>
        {/* Date Details */}
        <DateDetails />
      </section>
    </div>
  );
};

export default Date;
