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
            end: "bottom 20%",
            scrub: true
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
                scrub: true
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
                scrub: true
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
          <p>
            Prospective authors are invited to submit the manuscripts of their
            original research contributions and review articles in the following
            areas but not limited to
          </p>
        </div>
      </div>

      <div className="track1">
        {/* Render each track without using map function */}
        <div className="trc" ref={(el) => (trackRefs.current[0] = el)}>
          <div className="call_heads">
            <h2>Artificial Intelligence and Applications</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
                AI Algorithms
                <hr className="line-left" />
              </li>
              <li>
                Artificial Intelligence tools & Applications
                <hr className="line-left" />
              </li>
              <li>
                Internet of Things 
                <hr className="line-left" />
              </li>
              <li>
                Data Mining and Machine Learning Tools
                <hr className="line-left" />
              </li>
              <li>
                Heuristic and AI Planning Strategies and Tools
                <hr className="line-left" />
              </li>
              <li>
                Hybrid Intelligent Systems
                <hr className="line-left" />
              </li>
              <li>
                Information Retrieval
                <hr className="line-left" />
              </li>
              <li>
                Intelligent System Architectures
                <hr className="line-left" />
              </li>
              <li>
                Pervasive Computing and Ambient Intelligence
                <hr className="line-left" />
              </li>
              <li>
                Robotics
                <hr className="line-left" />
              </li>
              <li>
                Web Intelligence Applications
                <hr className="line-left" />
              </li>
              <li>Recent Trends and Developments</li>
            </ul>
          </div>
        </div>

        <div className="trc" ref={(el) => (trackRefs.current[1] = el)}>
          <div className="call_heads">
            <h2>Data Engineering</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
                Database-as-a-Service and Cloud/Edge Computing
                <hr className="line-left" />
              </li>
              <li>
                Big Data Analytics
                <hr className="line-left" />
              </li>
              <li>
                Smart Data Clustering and Classification Techniques
                <hr className="line-left" />
              </li>
              <li>
                Data Integration and Interoperability
                <hr className="line-left" />
              </li>
              <li>
                Smart Data Grids and Processing
                <hr className="line-left" />
              </li>
              <li>
                Peer-to-peer, Parallel and Distributed Databases
                <hr className="line-left" />
              </li>
              <li>Data Visualization and Interactive Data</li>
            </ul>
          </div>
        </div>

        <div className="trc" ref={(el) => (trackRefs.current[2] = el)}>
          <div className="call_heads">
            <h2>Explorations</h2>
            <div className="sub_lines"></div>
          </div>
          <div className="call_list">
            <ul>
              <li>
                Web Data Mining and Information Extraction
                <hr className="line-left" />
              </li>
              <li>
                Smart Information Retrieval and Integration
                <hr className="line-left" />
              </li>
              <li>
                Uncertain, Probabilistic and Approximate Databases
                <hr className="line-left" />
              </li>
              <li>
                Smart Data Management and Workflows
                <hr className="line-left" />
              </li>
              <li>
                Advanced Query Processing and Optimization
                <hr className="line-left" />
              </li>
              <li>Data Mining and Knowledge Discovery</li>
            </ul>
          </div>
        </div>

        <div className="trc" ref={(el) => (trackRefs.current[3] = el)}>
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
        </div>
      </div>
    </main>
  );
};

export default CallForPaper;
