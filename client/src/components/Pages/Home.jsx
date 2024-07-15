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
      <section className="section_container">
        {/* Head content */}
        <Head />

        {/* Logos container */}
        <Logos />
      </section>
      <section className="section_container">
        {/* countdown */}
        <Countdown />
      </section>
      <section className=" section_container justify-center">
        {/* Date Details */}
        <DateDeatils />
      </section>
      <section className=" section_container about_section">
        {/* Abouts */}
        <About />
      </section>
    </div>
  );
};

export default Home;
