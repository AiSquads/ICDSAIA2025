import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Tectovia = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div ref={headingRef} className="text-center my-4">
        <a
          href="https://tectovia.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl md:text-7xl text-[#aa50ff] font-bold animate-pulse"
        >
          TECTOVIA
        </a>
      </div>
      <div
        ref={textRef}
        className="text-black bg-opacity-50 backdrop-blur-md p-6 md:p-12 rounded-lg w-full md:w-3/4 lg:w-1/2 text-justify"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          We are thrilled to announce that we will be launching our new quiz
          application Tectovia during our International Conference! Get ready to
          challenge your knowledge and compete with your colleagues and peers
          from around the world. Our quiz app features a wide range of
          categories to choose from, including Science, Maths, Commerce and
          more. With hundreds of questions to choose from, you'll never run out
          of things to learn or test your knowledge on. You can even customize
          your quizzes to focus on the topics that interest you most. Our
          user-friendly interface makes it easy to navigate and play, so you can
          spend more time having fun and less time figuring out how to use it.
          We can't wait to see who will come out on top as the quiz champion at
          our conference. So, don't miss out on this exciting opportunity to
          show off your knowledge and have some fun. Visit our website to learn
          more about our quiz application and get ready to play!
        </p>
      </div>
      <motion.div
        ref={buttonRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8"
      >
        <a
          href="https://tectovia.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 download_link1"
        >
          Visit Tectovia
        </a>
      </motion.div>
    </div>
  );
};

export default Tectovia;
