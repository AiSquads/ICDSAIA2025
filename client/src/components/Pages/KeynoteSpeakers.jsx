import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/keynotespeakers.css"; // Adjust path as necessary

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Array of speakers with their details
const speakers = [
  {
    name: "Dr. Anil Kumar Dahiya",
    details:
      "Senior Member: - IEEE, ACM, ABET-Program Evaluator, Director, Tula's Institute, Dehradun-248001.",
    image: require("../../assets/images/profiles/card_01.jpg") // Adjust image path
  },
  {
    name: "Dr. Kamal Kant Hiran",
    details:
      "School of Engineering, Symbiosis University of Applied Sciences, Indore, India.",
    image: require("../../assets/images/profiles/card_02.jpg") // Adjust image path
  }
];

// Functional component for each speaker card
const SpeakerCard = ({ name, details, image }) => (
  <div className="spk_card">
    <div className="spk_img">
      <img className="dr_img" src={image} alt={name} />
    </div>
    <div className="spk_cont">
      <h3>{name}</h3>
      <span>{details}</span>
    </div>
  </div>
);

// Main component for Keynote Speakers section
const KeynoteSpeakers = () => {
  // useEffect hook to initialize GSAP animations with ScrollTrigger
  useEffect(() => {
    gsap.utils.toArray(".spk_card").forEach((card, index) => {
      gsap.set(card, { opacity: 0, y: 50 }); // Initial state: hidden and moved down

      ScrollTrigger.create({
        trigger: card, // Element to trigger animation
        start: "top 80%", // Animation starts when top 80% of card is in view
        end: "bottom 60%", // Animation ends when bottom 60% of card is in view
        scrub: true, // Smooth scrubbing effect
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          });
        }
      });
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <main className="mains">
      <div className="subm_head">
        <h2>KEYNOTE SPEAKERS</h2>
        <div className="lines"></div>
      </div>
      <div className="card_container">
        {/* Mapping through speakers array to render SpeakerCard component */}
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            details={speaker.details}
            image={speaker.image}
          />
        ))}
      </div>
    </main>
  );
};

export default KeynoteSpeakers;
