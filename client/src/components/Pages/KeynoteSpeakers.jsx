import React from "react";
import "../../assets/css/keynotespeakers.css";

const speakers = [
  {
    name: "Dr. Anil Kumar Dahiya",
    details:
      "Senior Member: - IEEE, ACM, ABET-Program Evaluator, Director, Tula's Institute, Dehradun-248001.",
    image: "stylee/dr akd.jpg"
  },
  {
    name: "Dr. Kamal Kant Hiran",
    details:
      "School of Engineering, Symbiosis University of Applied Sciences, Indore, India.",
    image: "stylee/key2.jpg"
  }
];

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

const KeynoteSpeakers = () => {
  return (
    <main className="mains">
      <div className="subm_head">
        <h2>KEYNOTE SPEAKER</h2>
        <div className="lines"></div>
      </div>
      <div className="container">
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
