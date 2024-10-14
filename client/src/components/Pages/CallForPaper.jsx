import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import "../../assets/css/callforpaper.css";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const CallForPaper = () => {
  const trackRefs = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(".trc").forEach((trackRef) => {
      // Initial hide settings
      gsap.set(trackRef, { opacity: 0, y: 50 });

      // Animation settings with ScrollTrigger
      gsap.fromTo(
        trackRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trackRef,
            start: "top 60%",
            end: "bottom 15%",
            // scrub: true
          }
        }
      );

      gsap.utils
        .toArray(trackRef.querySelectorAll(".call_list ul li"))
        .forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 50%",
                // scrub: true
              }
            }
          );

          gsap.fromTo(
            item.querySelector("hr"),
            { width: 0, opacity: 0 },
            {
              width: "100%",
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                // scrub: true
              }
            }
          );
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="mains">
      <div>
        <div className="subm_head">
          <h2>CALL FOR PAPER</h2>
          <div className="lines"></div>
        </div>
        <div className="about_contents">
            <div className="about_content_box_1">
              <p>
              The International Conference on Smart and AI-Driven Technologies for Sustainable
              Development (ICSATSD2025) invites researchers, scholars, and industry professionals
              to submit their original research papers for presentation. The conference, scheduled for
              27th - 28th February 2025 at Erode Arts and Science College (Autonomous), Erode, 
              Tamilnadu, India, seeks to explore innovative solutions and advancements in smart
              technologies and artificial intelligence that contribute to sustainable development..
              </p>
            </div>


          </div>
      </div>

      <div className="track1">
        {/* Render each track without using map function */}
        <div className="trc" ref={(el) => (trackRefs.current[0] = el)}>
          <div className="call_heads">
            <h2> Smart Cities, Sustainability, and Environment</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
              	Smart Cities and Urban Planning
                <hr className="line-left" />
              </li>
              <li>
              	AI for Environmental Sustainability
                <hr className="line-left" />
              </li>
              <li>
              	Renewable Energy Technologies
                <hr className="line-left" />
              </li>
              <li>
              	Sustainable Transportation Systems
                <hr className="line-left" />
              </li>
              <li>
              	Smart Agriculture and Food Security
                <hr className="line-left" />
              </li>

            </ul>
          </div>
        </div>

        <div className="trc" ref={(el) => (trackRefs.current[1] = el)}>
          <div className="call_heads">
            <h2>AI, Machine Learning, and Emerging Technologies</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
              	Internet of Things (IoT) Applications
                <hr className="line-left" />
              </li>
              <li>
              	Machine Learning and Data Analytics
                <hr className="line-left" />
              </li>
              <li>
              	Robotics and Automation
                <hr className="line-left" />
              </li>
              <li>
              	Intelligent Manufacturing Systems
                <hr className="line-left" />
              </li>
              <li>
              	Big Data and Cloud Computing
                <hr className="line-left" />
              </li>

              </ul>
          </div>
        </div>

        <div className="trc" ref={(el) => (trackRefs.current[2] = el)}>
          <div className="call_heads">
            <h2> Ethics, Security, and Human-Centric AI</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
              	AI Ethics and Policy
                <hr className="line-left" />
              </li>
              <li>
              	Cybersecurity in Smart Technologies
                <hr className="line-left" />
              </li>
              <li>
            	 Human-Computer Interaction
              </li>
              <li>
              AI in Education and Learning Systems
                <hr className="line-left" />
              </li>
              <li>
              	AI in Education and Learning Systems
                <hr className="line-left" />
              </li>
              <li>Data Mining and Knowledge Discovery</li>
            </ul>
          </div>
        </div>

        {/* <div className="trc" ref={(el) => (trackRefs.current[3] = el)}>
          <div className="call_heads">
            <h2>Computational Intelligence</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
                Machine Learning for Database Systems
                <hr className="line-left" />
              </li>
              <li>
                Semantic Web
                <hr className="line-left" />
              </li>
              <li>
                Multimedia Information Processing and Analysis
                <hr className="line-left" />
              </li>
              <li>
                Deep Learning
                <hr className="line-left" />
              </li>
              <li>
                Statistical and Reinforcement Learning
                <hr className="line-left" />
              </li>
              <li>
                Data Visualization and Interactive v Data-driven Fuzzy Systems
                Design
                <hr className="line-left" />
              </li>
              <li>
                Artificial Neural Network
                <hr className="line-left" />
              </li>
              <li>
                Social Networks Visualization and Analysis
                <hr className="line-left" />
              </li>
              <li>
                Supervised and Unsupervised Learning
                <hr className="line-left" />
              </li>
              <li>
                High Performance Computing
                <hr className="line-left" />
              </li>
              <li>
                Cognitive Intelligence and Decision Making Models
                <hr className="line-left" />
              </li>
              <li>
                Nature Inspired, Evolutionary Computation and Hybrid learning
                Algorithms
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default CallForPaper;
