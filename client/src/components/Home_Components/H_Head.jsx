import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const H_Head = () => {
  const textRef = useRef(null);
  const lettersRef = useRef([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const text = textRef.current;
    const letters = Array.from(text.querySelectorAll("span"));
    lettersRef.current = letters;

    // Function to split and initially animate text randomly
    const splitTextRandomly = () => {
      letters.forEach((letter) => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        letter.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Function to realign text to their original positions
    const realignText = () => {
      gsap.to(lettersRef.current, {
        x: (i, target) =>
          target.dataset.finalX - target.getBoundingClientRect().left,
        y: (i, target) =>
          target.dataset.finalY - target.getBoundingClientRect().top,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power2.out"
      });
    };

    // Initial animation: split text randomly and align initially
    splitTextRandomly();
    realignText();

    // Scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        // Scrolling up: Realign text
        realignText();
      } else {
        // Scrolling down: Randomly split text
        splitTextRandomly();
        gsap.to(lettersRef.current, {
          x: (i) => Math.random() * 200 - 100,
          y: (i) => Math.random() * 200 - 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out"
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text =
    "International Conference on Smart and AI-Driven Technologies for Sustainable Development";

  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ display: "inline-block", opacity: 0 }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div>
      <div className="main_content">
        <div className="head" id="date">
          <div className="tit_div">
            <h4 className="navbar_tit">
              ICS
              <span
                className="symbol"
                style={{
                  display: "inline-block",
                  transformOrigin: "center",
                  animation: "rotateSymbol 10s linear infinite",
                  animationDelay: "5s"
                }}
              >
                ▲
              </span>
              TSD -2025
            </h4>
          </div>

          <h1 className="svg" ref={textRef}>
            {splitText}
          </h1>

          <h5 className=" mt-36 h-full text-black">Conference Dates February 27 & 28 2025</h5>
        </div>
      </div>
      {/* <style>{`
        @keyframes rotateSymbol {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </div>
  );
};

export default H_Head;
