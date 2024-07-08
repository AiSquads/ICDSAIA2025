import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import ManuscriptSubmission from "../Submission_Components/ManuscriptSubmissio";
import PaperFormat from "../Submission_Components/PaperFormat";
import SubmissionGuidelines from "../Submission_Components/SubmissionGuidelines";
import PolicyOnPlagiarism from "../Submission_Components/PolicyOnPlagiarism";
import ImportantDates from "../Submission_Components/ImportantDates";

import "../../assets/css/submission.css"; // Import your CSS file

const Submission = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

  //   gsap.utils.toArray(".submission-item").forEach((item) => {
  //     // Set initial position and opacity
  //     gsap.set(item, { opacity: 0 });

  //     // Randomize animation properties
  //     const direction = gsap.utils.random([-100, 100, -150, 150]); // Random direction
  //     const delay = gsap.utils.random(0.2, 0.5); // Random delay for stagger effect

  //     // Animation settings with ScrollTrigger
  //     gsap.fromTo(
  //       item,
  //       { opacity: 0, x: direction },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 80%",
  //           end: "bottom 10%",
  //           scrub: true // Smooth scrubbing effect
  //         },
  //         delay: delay // Apply delay to stagger animations
  //       }
  //     );
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div className="submission-container">
      <div className="submission-item">
        <ManuscriptSubmission />
      </div>
      <div className="submission-item">
        <ImportantDates />
      </div>
      <div className="submission-item">
        <PaperFormat />
      </div>
      <div className="submission-item">
        <SubmissionGuidelines />
      </div>
      <div className="submission-item">
        <PolicyOnPlagiarism />
      </div>
    </div>
  );
};

export default Submission;
