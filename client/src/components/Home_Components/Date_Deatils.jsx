import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DateDetails = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    // Animate the events
    eventRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true
          },
          delay: index * 0.3
        }
      );
    });
  }, []);

  return (
    <div className="date_details_container">
      <div className="date_details">
        {/* <div className="subm_head">
          <h2>Important Dates</h2>
          <div className="lines"></div>
        </div> */}
        {[
          { title: "Submission of Abstract", date: "November 10, 2024" },
          { title: "Submission of Full Paper", date: "November 30, 2024" },
          {
            title: "Author's Acceptance Notification",
            date: "December 10, 2024"
          },
          { title: "Registration Commencing", date: "December 1, 2024" },
          { title: "Final Manuscript Due", date: "December 25, 2025" },
          { title: "Registration Deadline", date: "January 25, 2025 (Open)" },
          { title: "Camera Ready Paper Submission", date: "November 30, 2024" },
          { title: "Conference Dates", date: "February 27 & 28, 2025" }
        ].map((event, index) => (
          <div
            className={`event event_box_0${index + 1}`}
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
          >
            <h3>{event.title}</h3>
            <span>{event.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateDetails;
