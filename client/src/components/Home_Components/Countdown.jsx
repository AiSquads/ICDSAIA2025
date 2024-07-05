import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Countdown = () => {
  const targetDate = new Date("2025-02-28T23:59:59"); // Example target date for countdown

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const elementsToReveal = document.querySelectorAll(".reveal");
    elementsToReveal.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.seconds",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.seconds]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.minutes",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.minutes]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.hours",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.hours]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.days",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.days]);

  useEffect(() => {
    const floatingAnimation = (element, distance, duration) => {
      gsap.to(element, {
        y: distance,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    };

    const blurBoxes = document.querySelectorAll(".blur_box div");

    floatingAnimation(blurBoxes[0], "10px", 5); // Slow float
    floatingAnimation(blurBoxes[1], "20px", 3); // Medium float
    floatingAnimation(blurBoxes[2], "30px", 2); // Fast float

    blurBoxes.forEach((box) => {
      gsap.fromTo(
        box,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="timer_container">
        <div className="blur_box">
          <div className="div_1"></div>
          <div className="div_2"></div>
          <div className="div_3"></div>
        </div>
        <div className="countdown reveal">
          <h3 className="text-black font-extralight reveal">
            Countdown for Conference
          </h3>
          <div className="countdown-timer reveal">
            <div className="time-box reveal">
              <motion.span
                className="days"
                key={countdown.days}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 2 }}
              >
                {countdown.days}
              </motion.span>
              <p>Days</p>
            </div>
            <div className="time-box reveal">
              <motion.span
                className="hours"
                key={countdown.hours}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 2 }}
              >
                {countdown.hours}
              </motion.span>
              <p>Hours</p>
            </div>
            <div className="time-box reveal">
              <motion.span
                className="minutes"
                key={countdown.minutes}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 2 }}
              >
                {countdown.minutes}
              </motion.span>
              <p>Minutes</p>
            </div>
            <div className="time-box reveal">
              <motion.span
                className="seconds"
                key={countdown.seconds}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 2 }}
              >
                {countdown.seconds}
              </motion.span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
