import React from "react";
import DateDetails from "./../Home_Components/Date_Deatils";

const ImportantDates = () => {
  return (
    <div className="cont">
      <div className="subm_head">
        <h2>Important Dates</h2>
        <div className="lines"></div>
      </div>
      
      <div>
        <section className="h-auto">
          <DateDetails />
        </section>
      </div>
    </div>
  );
};

export default ImportantDates;
