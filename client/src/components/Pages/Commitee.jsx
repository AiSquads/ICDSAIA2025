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
            	Thiru V. Rajamanickam,
              <br />
              President,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode,Tamilnadu,India.
            </h3>

            <h3>
            v	Thiru. K. K. Balusamy,
              <br />
              Secretary & Correspondent,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
             Erode, Tamilnadu, India.
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
            Dr. R. Sankarasubramanian,
              <br />
              Principal,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
            </h3>
          </div>
        </div>

        {/* CONFERENCE CHAIR */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Conference Chair</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="chief com_02">
            <h3>
            Dr. S. Sukumaran,
              <br />
              Associate Professor  & Head, PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
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
            Dr. G. Vijaiprabhu,
            <br />
            Assistant Professor,PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
            </h3>
            <h3>
              Dr. K. Sathishkumar,
              <br />
            Assistant Professor,PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
            </h3>
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>Organizing Committee</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="advisory col_com">
            <h3>
              Dr. P. Srimanchari,
              <br />
             Assistant Professor,PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
            </h3>
            <h3>
            	Dr. J. Vandarkuzhali,
              <br />
             Assistant Professor,PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
            </h3>
            <h3>
            	Dr. P. Rathiga,
              <br />
             Assistant Professor,PG and Research Department of Computer Science,
              <br />
              Erode Arts & Science College (Autonomous),
              <br />
              Erode, Tamilnadu, India.
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
            	Prof. Dr. V. Thiagarasu,
              <br /> Dean - Planning, Development & Extension,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam,Tamilnadu, India.
            </h3>
            <h3>
            	Dr.P.Narendran,
              <br /> Principal,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam,Tamilnadu, India.
            </h3>
            <h3>
            	Dr. M.Ramalingam,
              <br />Head & Associate Professor, Department of AI & DS,
              <br /> Gobi Arts & Science College (Autonomous),
              <br /> Gobichettipalayam,Tamilnadu, India.
            </h3>
            <h3>
            	Dr.S.Anitha,
              <br /> Assistant Professor,
              <br /> Department of Computer Applications,
              <br /> Faculty of Science and Humanities,
              <br /> SRM Institute of Science & Technology, Tiruchirappalli, Tamil Nadu, India.
            </h3>
            <h3>
            	Dr. M. Punithavalli,
              <br /> Professor,
              <br /> Bharathiar University,
              <br /> Coimbatore,Tamil Nadu, India.
            </h3>
            <h3>
            	Mr. C. Manikandan,
              <br /> Lead Engineer, Fidelity Investments,
              <br /> 8th and 9th Floor Neville Tower, Tril Info Park Pvt. Ltd. SEZy,
              <br /> Old Mahabalipuram Road, Ramanujan IT City,
              <br /> Taramani, Chennai, Tamil Nadu 600113.
            </h3>
            <h3>
            	Dr.C. Thirumoorthi,
              <br /> Assistant Professor,
              <br /> Department of Computer Science,
              <br /> PSG College of Arts and Science,
              <br /> GCivil Aero drome Post Coimbatore 14.
            </h3>
            <h3>
            	Mr. Praveen Hanchinal,
              <br /> Team Lead,INWHIZZ IT Innovations,
              <br /> Dharwad / Asst. Prof , Computer Science,
              <br /> Govt. First Grade College,
              <br /> Dharwad, India.
            </h3>
            <h3>
            Mr. Selvam Rajalingam Chidambaram,
              <br /> Manager - Projects,Cognizant Technology Solutions (CTS),
              <br /> Chennai,Tamil Nadu, India.
            </h3>
            <h3>
            	Mr. Nandhakumar Kandasamy,
              <br /> Consultant, Tata Consultancy Services (TCS),
              <br /> Bangalore, Karnataka, India.
            </h3>
            <h3>
            Prof. Dr. Gladston Raj S,
              <br /> Dept of computer science, Govt college Nedumangad,
              <br /> Trivandrum, Kerala 695541.
            </h3>
            <h3>
            	Mr. Sivasankar  Subramanian,
              <br /> Senior software engineer,
              <br /> Visa Inc, Bagmane world Technology Centre,
              <br /> Mahadevapura, Bengaluru - 560048.
            </h3>

            <h3>
            	Dr Poornima  N V,
              <br /> Assistant Professor,Department of computer science
              <br /> VChrist (Deemed to be university),Bangalore.
            </h3>

            <h3>
            	Dr.M.Krishnaveni,
              <br /> Assistant Professor, Department of Computer Science,
              <br /> Avinashilingam Institute for Home Science and Higher Education for Women,
              <br /> Coimbatore, Tamilnadu, India.
            </h3>

            <h3>
            	Prof. Dr. Thangavel Kuttiyannan,
              <br /> Professor & Head, Department of Computer Science,
              <br />Periyar University, Salem, Tamilnadu, India .
            </h3>

            <h3>
            Dr. Nagarjun J,
              <br /> Assistant Professor (Sr.G),Dept of Mechanical Engg ,
              <br />PSG Institute of Technology and Applied Research ,
              <br />, Coimbatore, Tamilnadu, India .
            </h3>

            <h3>
            	Dr. R. Thirumalai selvi,
              <br /> Associate Professor, , PG & Research Department of Computer Science,
              <br />Government Arts College, Men, Nandanam,
              <br />Chennai Tamil Nadu, India.
            </h3>

            <h3>
            Dr. A. Selvakumar,
              <br /> Professor  / CSE, SIMATS School of Engineering,
              <br />Saveetha University,  Chennai   602105 .
            </h3>

            <h3>
            	Dr.T.Manikandan,
              <br /> Professor  / CSE, SIMATS School of Engineering,
              <br />Saveetha University,  Chennai   602105 .
            </h3>

            <h3>
            	Prof. S.S.Saranya,
              <br /> Asst.Professor, Dept of Computing Technologies ,
              <br /> SRM INSTITUTE OF SCIENCE AND TECHNOLOGY,
              <br /> Kattankulathur campus, Chennai 603203.
            </h3>

            <h3>
            	Dr. V. Kalaimani,
              <br /> Assistant Professor , Department of Computer Science,
              <br /> Kongunadu Arts and Science College,
              <br /> Coimbatore, Tamilnadu, India.
            </h3>

            <h3>
            	Dr. M. Krishnaveni,
              <br /> SAssistant Professor (SS), Department of Computer Science, 
              <br /> School of Physical Sciences and Computational Sciences ,
              <br /> Avinashilingam Institute for Home Science and Higher Education for Women,
              <br/ > Coimbatore, Tamilnadu, India .
            </h3>

            <h3>
            	Dr Gurjeet Singh,
              <br /> 1st degree connection1st,
              <br />Associate Professor in Mechanical Engineering ,
              <br /> IES College of Technology, BHOPAL .
            </h3>

            <h3>
            	Prof. Jude Hemanth,
              <br /> 1st degree connection1st,
              <br /> Professor, Karunya University, Visiting Professor ,
              <br /> University of Oradea, Romania ,
              <br /> Coimbatore, Tamil Nadu, India .
            </h3>

            <h3>
            v	Dr. Amit Barve,
              <br /> Associate Professor & HoD Computer Science ,
              <br /> VEngineering Department Parul Institute of Engineering ,
              <br /> Technology Parul University Vadodar.
            </h3>

            <h3>
            	Dr. Sorokhaibam Nilakanta Meitei,
              <br /> Faculty at Manipur Institute of Technology, 
              <br /> EE Dept., IEEE Member, IEI(AMIE),
              <br /> ISTE (LM), Imphal, Manipur, India .
            </h3>

            <h3>
            	Dr. Yogesh Kumar Sharma,
              <br /> Assistant Professor at Lovely Professional University , 
              <br /> Phagwara, Punjab, India .
            </h3>

            <h3>
            	Dr. Sorokhaibam Nilakanta Meitei ,
              <br /> Manipur Institute of Technology, 
              <br /> Imphal .
            </h3>

            <h3>
            	Dr. Kuldeep Vayadande,
              <br /> Assistant Professor , 
              <br /> Vishwakarma Institute of Technology,  Pune.
            </h3>

            <h3>
            	Dr.J.Lekha,
              <br /> Associate Professor, Department of Data Science, 
              <br /> Christ(Deemed to be University),
              <br /> Pune Lavasa Campus, Maharashtra .
            </h3>

            <h3>
            	Dr. Sonali Agarwal,
              <br /> (General Chair - ISEC 2023, ICONIP 2022, BDA 2021), 
              <br /> Associate Professor, Big Data Analytics (BDA) Lab ,
              <br /> Department of IT, Room No.: 5203, CC3 Building ,
              <br /> Indian Institute of Information Technology, Allahabad ,
              <br /> Devghat, Jhalwa, Allahabad (UP) INDIA .
            </h3>

            <h3>
            	Dr. Snehlata Dongre(Wankhade),
              <br />  Assistant Professor ,
              <br /> EGHRCE Nagpur .
            </h3>

            <h3>
            	Dr Yugendra Chincholkar,
              <br /> Associate Professor at Sinhagd College of Engineering, 
              <br /> Pune, Maharashtra, India .
            </h3>

            <h3>
            	Prof. Maaz Saiyed,
              <br /> Assistant Professor,
              <br /> Narayana Business School, Ahmedabad, India .
            </h3>

            <h3>
            	Chhavi (Mahto) Prakash,
              <br /> Assistant Professor at Accurate Institute of Management and Technology,
              <br /> University Grant Comission (U.G.C.) ,  
              <br /> Gautam Buddha Nagar, Uttar Pradesh, India .
            </h3>

            <h3>
            	Dr. Soonu Aravindan ,
              <br /> J Assistant Professor - Business Analytics ,
              <br /> Sardar Vallabhbhai Patel International School of Textiles and Management ,
              <br /> Coimbatore Tamil Nadu India .
            </h3>

            <h3>
            	Dr. Rahul Yadav
              <br />Assistant Professor, 
              <br /> Marathwada Mitra Mandal's College of Engineering, KL University ,
              <br /> Pune, Maharashtra, India .
            </h3>

            <h3>
            	Prof. Dr. G. Anjan Babu ,
              <br /> Professor, Sri Venkateshwara University ,
              <br /> Tirupati. Andhra Pradesh, India.
            </h3>

            <h3>
            	Dr.E.George Dharma Prakash Raj ,
              <br /> Associate Professor, School of Computer Science, 
              <br /> Engineering and Applications,Khajamalai Campus, 
              <br /> Bharathidasan University, Tiruchirappalli,Tamil Nadu, India.
            </h3>

            <h3>
            	Dr.B.Srinivasan ,
              <br /> Associate Professor ,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.P.Prabhusundhar,
              <br /> Associate Professor ,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.K.P.Shanmugapriya ,
              <br /> Associate Professor ,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.A. Aruljothi,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.G.A.Mylavathi ,
              <br /> Associate Professor ,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Mrs. S.Poonkodi ,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.R.Naleiny ,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Mr. P.Sedhupathy ,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.V.Azhaharasan ,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Mr. K.Madheswaran ,
              <br /> Associate Professor ,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Mr. R.Santhosh
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.B.Kiruthika,
              <br /> Associate Professor ,
              <br /> Department of Information Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Ms. P.Mythili ,
              <br /> Associate Professor ,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.M.Prabakaran ,
              <br /> Associate Professor ,
              <br /> Department of Computer Technology,
              <br /> Gobi Arts & Science College (Autonomous), 
              <br />Gobichettipalayam, Tamilnadu, India .
            </h3>

            <h3>
            	Dr.R. Pragaladan ,
              <br /> Assistant Professor and Head ,
              <br /> Department of Computer Technology,
              <br /> Sri Vasavi College,
              <br /> Erode, Tamilnadu, India .
            </h3>

          </div>
          
        </div>

        {/* International Advisory Committee */}
        <div className="committe_box">
          <div className="committe_heads">
            <h2>International Advisory Committee</h2>
            <div className="sub_lines"></div>
          </div>

          <div className="advisory col_com">
            <h3>
            	Dr. Balamurugan Easwaran,
              <br /> Professor  & Registrar,
              <br /> Texila American University ,
              <br /> Zambia, West Africa .
            </h3>

            <h3>
            	Mr. Vishnuprasath N.S,
              <br /> Manager - Projects,
              <br /> Cognizant Technology Solutions (CTS), USA .
            </h3>

            <h3>
            	Mr. Balasubramaniam Palanisamy
              <br />Technical Specialist, Zensar Technologies UK Limited,
              <br /> Ground floor ,Green park ,
              <br /> 100 Brook Dr,Reading , UK , Postal Code : RG26UJ .
            </h3>

            <h3>
            	Dr. Sujith Jayaprakash ,
              <br /> Assoc. Vice President (Academics) & School of Technology, 
              <br /> Britts Imperial University College (UAE), 
              <br /> Global Study Center of Euclea Business School (France) ,
              <br /> Sharjah, United Arab Emirates .
            </h3>
            
            <h3>
            	Dr. Xiao-Zhi Gao
              <br /> School of Computing ,
              <br /> University of Eastern Finland ,
              <br /> Kuopio, Finland.
            </h3>

            <h3>
              v	Dr. Dhenesh V Subramanian,
              <br /> Lecturer IIBIT Federation University ,
              <br /> Casual Lecturer, Kaplan Business School ,
              <br /> Adelaide campus, Australia .
            </h3>

            <h3>
              v	Dr. Gerald Weber,
              <br />Senior Lecturer, School of Computer Science , 
              <br /> , Science Centre 303 - Bldg 303, 38 Princes St , 
              <br /> Auckland Central, Auckland, 1010, New Zealand .
            </h3>

            <h3>
            	Dr. Christof Lutteroth,
              <br /> Department of Computer Science ,
              <br /> The University of Auckland ,
              <br /> Private Bag 92019,
              <br /> Auckland 1142, New Zealand .
            </h3>

            <h3>
              v	Dr. Yu-Chen Hu ,
              <br /> Distinguished Professor,
              <br /> Department of Computer Science & Information Management , 
              <br /> Providence University, 200, Sec. 7, Taiwan Boulevard,
              <br /> Shalu Dist., Taichung City 43301, Taiwan (R.O.C.)
            </h3>

            <h3>
              v	Dr. Lal Bihari Barik,
              <br /> King Abdulaziz University,
              <br /> Department of Information Systems, PhD (Computer Science) ,
              <br /> Kingdom of Saudi Arabia .
            </h3>

            <h3>
            	Dr. Sajilal Divakaran,
              <br /> Principal,
              <br /> FTMS College, FTMS College, Lot No. 12159,
              <br /> Jalan Cyber Point 6, Cyber 8,
              <br /> 63000 Cyberjaya, Selangor, Malaysia .
            </h3>

            <h3>
              v	Prof. Dr. Sardar M N Islam (Naz), Ph. D., LL.B.  (Law),
              <br /> Victoria University, Australia ,
              <br /> Distinguished Visiting Professor  of Artificial Intelligence.
            </h3>

            <h3>
            	Dr. J. Amudhavel
              <br /> Senior Researcher, Center of Photonics and Computational Imaging ,
              <br /> University of Tartu,
              <br /> Füüsika Instituut, Tartu
            </h3>

            <h3>
            	Parteek Bhatia ,
              <br /> Visiting Professor at Department of Computer Science ,
              <br /> Whitman College,Walla Walla, WA, USA .
            </h3>

            <h3>
            	Dr. Ali Daud,
              <br /> Professor Computer Science,
              <br />(Artificial Intelligence and Data Science), 
              <br /> Tsinghua University ,Abu Dhabi Emirate, United Arab
            </h3>

            <h3>
            	Dr. Aqeel Ahmad,
              <br /> Assistant Professor (Agricultural Sciences),
              <br /> IGSNRR, CAS, Beijing, China.
            </h3>

            <h3>
            	Alex Khang ,
              <br /> Prof. of IT | DSc | Data Scientist | AI Researcher ,
              <br />Global Research Institute of Technology and Engineering , 
              <br /> NC, USA.
            </h3>

            <h3>
            	Dr. P. C. Srinivasa Rao Ph.D ,
              <br /> Associate Professor , 
              <br /> K L Hyderabad & Research Scientist and Consultant at XtraLeap,USA. 
              <br /> Former Researcher, Purdue University NW, USA
            </h3>

            <h3>
            	Dr. Dilbag Singh ,
              <br /> Post-Doc at NYU Langone Health ,
              <br /> New York, United States 
            </h3>

            <h3>
            	Hamed Alizadeh Ghazijahani ,
              <br /> Assistant Professor at Azarbaijan Shahid Madani University,
              <br /> Tabriz, East Azerbaijan Province, Iran
            </h3>

            <h3>
            	Hamilton Mann , 
              <br /> Group Vice President Digital at Thales ,
              <br /> France .
            </h3>

            <h3>
            	Shariful Islam , 
              <br /> Associate Professor, NHMRC Emerging Leadership Fellow ,
              <br />Deakin University, Greater Sydney Area, Australia .
            </h3>

            <h3>
            	Janaki Raman Palaniappan, 
              <br /> Software Engineer & Researcher ,
              <br /> DBrunswick Corporation, USA.
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
