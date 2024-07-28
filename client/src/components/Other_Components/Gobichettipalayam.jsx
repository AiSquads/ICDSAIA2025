import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import agricultureImage from "../../assets/images/gobi/agri.jpg";
import kodiveriImage from "../../assets/images/gobi/kodiveri2.jpg";
import pachamalaiImage from "../../assets/images/gobi/pachamalai.jpg";
import pariImage from "../../assets/images/gobi/paariyur.jpg";
import gunderipallamImage from "../../assets/images/gobi/gunderipallam.jpg";
import perumpallamImage from "../../assets/images/gobi/perumpallam.jpg";

gsap.registerPlugin(ScrollTrigger);

const Gobichettipalayam = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true
          }
        }
      );
    });

    imagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 50%",
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Section 1: Gobichettipalayam Overview */}
          <section ref={(el) => (sectionsRef.current[0] = el)}>
            <div className="subm_head text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4">
                Gobichettipalayam
                <div className="sub_lines"></div>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Gobichettipalayam is a selection grade municipality in the
                Indian state of Tamil Nadu. It is the administrative
                headquarters of Gobichettipalayam taluk and is known for its
                rich agricultural and textile industries.
              </p>
            </div>
            <div className="image flex flex-wrap justify-center mt-8 gap-4">
              <img
                ref={(el) => (imagesRef.current[0] = el)}
                className="w-full md:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
                src={agricultureImage}
                alt="Agriculture"
              />
              <img
                ref={(el) => (imagesRef.current[1] = el)}
                className="w-full md:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
                src={kodiveriImage}
                alt="Kodiveri Dam"
              />
            </div>
          </section>

          {/* Section 2: History */}
          <section ref={(el) => (sectionsRef.current[1] = el)}>
            <div className="subm_head text-center mb-8">
              <h2 className="text-4xl md:text-5xl mb-4">
                History
                <div className="sub_lines"></div>
              </h2>
            </div>
            <div className="about_contents text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A major part of present Gobichettipalayam was previously known
                as "Veerapandi Gramam". The town was part of the country ruled
                by King Vēl Pāri and later ruled by the Cheras and Vijayanagara
                Empire. It was captured by Tipu Sultan and after Tipu's defeat,
                the British annexed it to their territory.
              </p>
            </div>
          </section>

          {/* Section 3: Culture */}
          <section ref={(el) => (sectionsRef.current[2] = el)}>
            <div className="subm_head text-center mb-8">
              <h2 className="text-4xl md:text-5xl mb-4">
                Culture
                <div className="sub_lines"></div>
              </h2>
            </div>
            <div className="about_contents text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Kongu Tamil, a dialect of Tamil, is the language spoken by the
                majority. The cuisine is predominantly South Indian with rice as
                its base. Popular dishes include mysorepa, halwa, idly, dosa,
                vada-sambar, and biryani.
              </p>
            </div>
          </section>

          {/* Section 4: Places of Interest */}
          <section className="p-6" ref={(el) => (sectionsRef.current[3] = el)}>
            <div className="subm_head text-center mb-8">
              <h2 className="text-4xl md:text-5xl mb-4">
                Places of Interest
                <div className="sub_lines"></div>
              </h2>
            </div>
            <div className="call_list bg-[#ffe8e8] rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <ul className="text-lg text-gray-800 space-y-2">
                <li>Kodiveri Dam</li>
                <li>Pachaimalai Subramanya Swamy Temple</li>
                <li>Pariyur Kondathu Kaliamman Temple</li>
                <li>Gunderipallam Dam</li>
                <li>Perumpallam Dam</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Gallery */}
          <section
            className="gallery mt-12"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { src: pachamalaiImage, alt: "Pachamalai" },
                { src: pariImage, alt: "Pariyur" },
                { src: gunderipallamImage, alt: "Gunderipallam" },
                { src: perumpallamImage, alt: "Perumpallam" },
                { src: agricultureImage, alt: "Agriculture" },
                { src: kodiveriImage, alt: "Kodiveri Dam" }
              ].map((image, index) => (
                <div
                  key={image.alt}
                  className="relative group"
                  ref={(el) => (imagesRef.current[index + 2] = el)}
                >
                  <img
                    className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p className="text-white text-lg">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Gobichettipalayam;
