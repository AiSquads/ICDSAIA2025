import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Publication_head = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content boxes revealing from different sides
    const directions = ["left", "right", "top", "bottom"];
    gsap.utils.toArray(".content").forEach((content, index) => {
      const direction = directions[index % directions.length];
      const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;
      const y = direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

      gsap.fromTo(
        content,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: content,
            start: "top 60%",
            end: "bottom 20%",
            // scrub: true
          }
        }
      );
    });

    // Animate publication logo
    gsap.utils.toArray(".pub_logo").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            // scrub: true
          }
        }
      );
    });

    // Animate headings and subtitles
    gsap.utils.toArray(".about_heads, .subtitle").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            // scrub: true
          }
        }
      );
    });

    // Animate lines
    gsap.utils.toArray(".lines, .sub_lines").forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 60%",
            // scrub: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="contt">
      <div className="subm_head">
        <h2>PUBLICATION</h2>
        <div className="lines"></div>
      </div>
      <div className="divcont">
        <div className="content box">
          <p style={{ textAlign: "center" }}>
            Publication Scopus & WOS Under Processing...
          </p>
          <p>
            Accepted papers will be submitted for inclusion into IEEE Xplore
            subject to meeting IEEE Explore’s scope and quality requirements.
            Both full research reports and work-in-progress reports are welcome.
            There will be both oral and poster sessions. All papers will undergo
            a blind peer-review process and the decision to accept the paper
            will be final based on their recommendations. <br />
            <br />
            Best papers and presentations will be recognized with special
            certificates and monetary prizes for each of the nominated papers.
            An award committee will review and monitor the outstanding papers
            and presentations during the conference and recommend to CPC for a
            suitable prize.
          </p>
        </div>
        <div className="pub_head">
          <h2>Publication Partner</h2>
          <div className="sub_lines"></div>
        </div>
        <div className="subtitle">
          <h3>Partner Details</h3>
        </div>
        <div className="sub_lines"></div>
        <div className="content box">
          <p style={{ textAlign: "center" }}>
            IEEE Explore, LNCS Springer, AIP Conference Proceedings(Scopus, WOS)
          </p>
        </div>

        <div className="contt">
          <h5 style={{ textAlign: "center", marginTop: "20px" }}>
            Under Processing...
          </h5>
          <div className="pub_logo">
            <div className="pub_imgcont"></div>
            <div className="pub_txt">
              <h4>
                Conference ISBN: <span>123-4-5678-1234-1</span>
              </h4>
            </div>
          </div>
          <div className="content box">
            <p>
              The proceedings of the conference will be submitted to Xplore and
              CSDL for possible publication.
            </p>
          </div>
          <div className="content box">
            <p>
              There can be no guarantee of indexing. The IEEE does not guarantee
              that any particular abstract or index entry will be included in Ei
              Compendex or any other indexing service. IEEE makes its best
              efforts to ensure indexing, but the indexing services are
              independent organizations not subject to IEEE control.
            </p>
          </div>
          <div className="content box">
            <h4>Indexing</h4>
            <div className="sub_lines"></div>
            <p>
              Content will be submitted to the indexing companies for possible
              indexing. Indexing services are independent organizations, and CPS
              cannot guarantee that any particular abstract or index entry will
              be included in Ei Compendex or any other indexing service.
            </p>
          </div>
          <div className="content box">
            <h4>CPS indexing</h4>
            <div className="sub_lines"></div>
            <p>
              Upon acceptance to IEEE Xplore, content will be made available to
              the appropriate indexing partners. Please see this{" "}
              <a href="">
                PDF overview of abstract, indexing, and web discovery services
              </a>{" "}
              for more information.
            </p>
          </div>
          <div className="content box">
            <h4>Elsevier’s Ei Compendex</h4>
            <div className="sub_lines"></div>
            <p>
              Upon acceptance, an abstract and index entry for your submission
              will be included in Elsevier’s Ei Compendex database if your
              submission is available in full-text PDF format and your
              submission includes an author-submitted abstract. If your
              submission is available in full-text PDF but does not include an
              abstract, only bibliographic information will be included in Ei
              Compendex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication_head;
