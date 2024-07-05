import React from "react";

import "../../assets/css/home.css";

import Logos from "../Home_Components/Logos";
import Countdown from "../Home_Components/Countdown";
import DateDeatils from "../Home_Components/Date_Deatils";
import About from "../Home_Components/H_About";
import Head from "../Home_Components/H_Head";

const Home = () => {
  return (
    <div>
      <section>
        {/* Head content */}
        <Head />

        {/* Logos container */}
        <Logos />
      </section>
      <section>
        {/* countdown */}
        <Countdown />
      </section>
      <section className="  justify-center">
        {/* Date Details */}
        <DateDeatils />
      </section>
      <section className="about_section">
        {/* Abouts */}
        <About />
      </section>
    </div>
  );
};

export default Home;
