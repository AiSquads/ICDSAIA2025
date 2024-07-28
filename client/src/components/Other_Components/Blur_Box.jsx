import React, { useEffect } from "react";
import gsap from "gsap";

import "../../assets/css/blur_box.css"

const Blur_Box = () => {
  useEffect(() => {
    const boxes = [
      ".blur_box_01",
      ".blur_box_02",
      ".blur_box_03",
      ".blur_box_04",
      ".blur_box_05",
      ".blur_box_06",
      ".blur_box_07",
      ".blur_box_08",
      ".blur_box_09",
      ".blur_box_10"
    ];

    const animations = [
      { x: -300, y: () => gsap.utils.random(-100, 100) }, // Effect 1
      { x: 300, y: () => gsap.utils.random(-100, 100) }, // Effect 2
      { rotation: 360, transformOrigin: "center center" }, // Effect 3
      { scale: 1.5, transformOrigin: "center center" }, // Effect 4
      { x: -200, y: -200 }, // Effect 5
      { x: 200, y: 200 }, // Effect 6
      { y: () => gsap.utils.random(-300, 300) }, // Effect 7
      { x: () => gsap.utils.random(-500, 500) }, // Effect 8
      { rotation: -360, transformOrigin: "center center" }, // Effect 9
      { scale: 0.5, transformOrigin: "center center" } // Effect 10
    ];

    boxes.forEach((box, index) => {
      // Movement animation
      gsap.to(box, {
        ...animations[index],
        duration: () => gsap.utils.random(5, 8),
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

      // Scroll reveal animation
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);
  return (
    <div>
      <div className="blur_boxs">
        <div className="blur_top">
          <div className="blur_box_01"></div>
          <div className="blur_box_02"></div>
          <div className="blur_box_03"></div>
          <div className="blur_box_04"></div>
          <div className="blur_box_05"></div>
        </div>
        <div className="blur_bottom">
          <div className="blur_box_06"></div>
          <div className="blur_box_07"></div>
          <div className="blur_box_08"></div>
          <div className="blur_box_09"></div>
          <div className="blur_box_10"></div>
        </div>
      </div>
    </div>
  );
};

export default Blur_Box;
