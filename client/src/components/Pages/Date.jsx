import React from "react";
import Countdown from "./../Home_Components/Countdown";
import DateDetails from "./../Home_Components/Date_Deatils";

const Date = () => {
  return (
    <div>
      <section className="mt-20">
        {/* countdown */}
        <Countdown />
      </section>
      <section className="  justify-center">
        {/* Date Details */}
        <DateDetails />
      </section>
    </div>
  );
};

export default Date;
