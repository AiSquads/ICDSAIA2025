import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../assets/css/committe.css";
import Blur_Box from "../Other_Components/Blur_Box";

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

  return (
    <div className="mains">
      <div className="subm_head">
        <h2>COMMITTEE</h2>
        <div className="lines"></div>
      </div>

      {/* <Blur_Box /> */}

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
