import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../assets/css/committe.css";

gsap.registerPlugin(ScrollTrigger);

const Committee = () => {
  useEffect(() => {
    const elementsToReveal = document.querySelectorAll(".committe_box");
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
    <div className="mains">
      <div className="subm_head">
        <h2>COMMITTEE</h2>
        <div className="lines"></div>
      </div>

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

      <div className="committe_container">
        {/* Chief Patrons */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Chief Patrons</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="chief com_01 col_com">
            <h3>
              Er. J. Balamurugan,
              <br />
              President,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>

            <h3>
              Thiru. M. Dharanidharan,
              <br />
              Secretary & Correspondent,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
          </div>
        </div>

        {/* Patrons */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Patron</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="chief com_02">
            <h3>
              Prof. Dr. V. Thiagarasu,
              <br />
              Principal,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
          </div>
        </div>

        {/* Convenors */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Convenors</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="chief com_03 col_com">
            <h3>
              Dr. M. Ramalingam,
              <br />
              Associate Professor,
              <br />
              Department of Information Technology,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
            <h3>
              Dr. K. Sathishkumar,
              <br />
              Assistant Professor,
              <br />
              Department of Computer Technology,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
          </div>
        </div>

        {/* Conference Chair */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Conference Chair</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="advisory col_com">
            <h3>
              Dr. K. P. Shanmugapriya,
              <br />
              Associate Professor, Department of Computer Technology,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
            <h3>
              Dr. A. Aruljothi,
              <br />
              Associate Professor, Department of Information Technology,
              <br />
              Gobi Arts & Science College (Autonomous),
              <br />
              Gobichettipalayam.
            </h3>
          </div>
        </div>

        {/* Conference Committee */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Conference Committee</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="advisory col_com">
            <h3>
              Dr. G. A. Mylavathi,
              <br /> Associate Professor,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mrs. S. Poonkodi,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mrs. R. Naleiny,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Dr. T. P. Senthilkumar,
              <br /> Assistant Professor,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mr. P. Sedhupathy,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Dr. V. Azhaharasan,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mr. K. Madheswaran,
              <br /> Assistant Professor,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Dr. P. E. Elango,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mr. R. Santhosh,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Ms. M. C. Nivetha,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Mrs. B. Kiruthika,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
            <h3>
              Ms. P. Mythili,
              <br /> Assistant Professor,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam.
            </h3>
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Advisory Committee</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="advisory col_com">
            <h3>
              Dr. S. Anitha,
              <br /> Assistant Professor,
              <br /> Faculty of Science and Humanities,
              <br /> SRM Institute of Science & Technology,
              <br /> Tiruchirappalli, Tamil Nadu.
            </h3>
            <h3>
              Dr. J. Chinnaiyan,
              <br /> Assistant Professor,
              <br /> School of Computer Science & IT,
              <br /> Jain University,
              <br /> Bangalore, Karnataka.
            </h3>
            <h3>
              Dr. J. Rejikumar,
              <br /> Assistant Professor,
              <br /> Faculty of Commerce and Management Studies,
              <br /> University of Kerala,
              <br /> Thiruvananthapuram, Kerala.
            </h3>
            <h3>
              Dr. V. Kavitha,
              <br /> Associate Professor,
              <br /> School of Computer Science,
              <br /> VIT University,
              <br /> Vellore, Tamil Nadu.
            </h3>
            <h3>
              Dr. K. K. Ramesh,
              <br /> Assistant Professor,
              <br /> Department of Computer Science,
              <br /> Kristu Jayanti College (Autonomous),
              <br /> Bangalore, Karnataka.
            </h3>
            <h3>
              Dr. B. Palanisamy,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. S. Sampath Kumar,
              <br /> Assistant Professor,
              <br /> Department of Information Technology,
              <br /> Sri Krishna Arts & Science College (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. S. Kavitha,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. N. Manikandan,
              <br /> Assistant Professor,
              <br /> Department of Computer Science,
              <br /> Bharathiar University,
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. S. Saravanan,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> Bharathiar University,
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. R. Manikandan,
              <br /> Assistant Professor,
              <br /> Department of Computer Science,
              <br /> Bharathiar University,
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. M. Krishnaveni,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. S. Prabha,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. R. Velmurugan,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. K. Praveen Kumar,
              <br /> Assistant Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. R. Vidhya,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
            <h3>
              Dr. K. M. Rajkumar,
              <br /> Associate Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts & Science (Autonomous),
              <br /> Coimbatore, Tamil Nadu.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
