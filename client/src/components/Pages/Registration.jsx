import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegistrationHeader from "../Register_Components/RegistrationHeader";
import RegistrationContent from "../Register_Components/RegistrationContent";
import RegistrationGuidelines from "../Register_Components/RegistrationGuidelines";
import AuthorRegistration from "../Register_Components/AuthorRegistration";
import FinalDocumentsList from "../Register_Components/FinalDocumentsList";
import RegistrationFees from "../Register_Components/RegistrationFees";
import InvoiceRefundPolicy from "../Register_Components/InvoiceRefundPolicy";

import "../../assets/css/registration.css";

gsap.registerPlugin(ScrollTrigger);

const Registration = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const animateSection = (section) => {
      // Randomly choose left or right animation
      const fromLeft = Math.random() > 0.5;

      gsap.fromTo(
        section,
        { opacity: 0, x: fromLeft ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    };

    // Apply animation to each registered section ref
    sectionsRef.current.forEach(animateSection);

    // Clean up function to remove listeners when component unmounts
    return () => {
      sectionsRef.current.forEach((section) => {
        const trigger = ScrollTrigger.getById(section);
        if (trigger) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div>
      <div ref={addToRefs}>
        <RegistrationHeader />
      </div>
      <div ref={addToRefs}>
        <RegistrationContent />
      </div>
      <div ref={addToRefs}>
        <RegistrationGuidelines />
      </div>
      <div ref={addToRefs}>
        <AuthorRegistration />
      </div>
      <div ref={addToRefs}>
        <FinalDocumentsList />
      </div>
      <div ref={addToRefs}>
        <RegistrationFees />
      </div>
      <div ref={addToRefs}>
        <InvoiceRefundPolicy />
      </div>
    </div>
  );
};

export default Registration;
