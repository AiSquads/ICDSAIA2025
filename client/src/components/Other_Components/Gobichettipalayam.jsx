import React from "react";
import agricultureImage from "../../assets/images/gobi/agri.jpg";
import kodiveriImage from "../../assets/images/gobi/kodiveri2.jpg";
import pachamalaiImage from "../../assets/images/gobi/pachamalai.jpg";
import pariImage from "../../assets/images/gobi/paariyur.jpg";
import gunderipallamImage from "../../assets/images/gobi/gunderipallam.jpg";
import perumpallamImage from "../../assets/images/gobi/perumpallam.jpg";

const Gobichettipalayam = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Section 1: Gobichettipalayam Overview */}
          <section>
            <div className="about_heads">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Gobichettipalayam
              </h2>
            </div>
            <div className="about_contents">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Gobichettipalayam is the Selection grade municipality in the
                Indian state of Tamil Nadu. It is the administrative
                headquarters of Gobichettipalayam taluk. It is situated at the
                center of the South Indian Peninsula, 37 kilometres (23 mi) from
                the district headquarters Erode (Demanding Gobichettipalayam
                District),44 kilometres (27 mi) north of Tiruppur and 80
                kilometres (50 mi) east of Coimbatore. Agriculture and textile
                industries contribute majorly to the economy of the town and is
                popularly known as the rice bowl of western Tamil Nadu. The town
                is situated at 213 metres (699 ft) above sea level, surrounded
                by Western Ghats.
                <br />
                <br />
                The town is a part of Gobichettipalayam constituency and elects
                its member of legislative assembly every five years, and a part
                of the Tirupur constituency that elects its member of
                parliament. The town is administered by a municipality
                established in 1949 and has a population of 65,238 as of 2011.
                It is known as "Mini Kollywood" because of the film shooting
                that takes place here and many films in Tamil and other
                languages have been shot.
              </p>
            </div>
            <div className="image flex flex-wrap justify-center mt-8">
              <img
                className="imgs mx-2 mb-4 md:mb-0"
                src={agricultureImage}
                alt="Agriculture"
              />
              <img
                className="imgs mx-2"
                src={kodiveriImage}
                alt="Kodiveri Dam"
              />
            </div>
          </section>

          {/* Section 2: History */}
          <section>
            <div className="about_heads">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                History
              </h2>
            </div>
            <div className="about_contents">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                A major part of present Gobichettipalayam was previously known
                as "Veerapandi Gramam", and documents and records still use that
                name. The town was part of the country ruled by king Vēl Pāri,
                who is regarded as one of the Kadai ēzhu vallal (the last seven
                great patrons). Pariyur, a temple town near Gobichettipalayam
                was named after him. The land was later ruled by the Cheras and
                Vijayanagara empire with the town deriving its name after Gobi
                Chetti, a Vijayanagara Polygar. It was captured by Tipu Sultan
                and after Tipu's defeat, British annexed it to their territory.
              </p>
            </div>
          </section>

          {/* Section 3: Culture */}
          <section>
            <div className="about_heads">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Culture
              </h2>
            </div>
            <div className="about_contents">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Kongu Tamil, a dialect of Tamil is the language spoken by
                majority of the people. English is used as an official language
                along with Tamil. Other languages spoken include Malayalam,
                Kannada and Telugu. Gobichettipalayam cuisine is predominantly
                south Indian with rice as its base. Most locals still retain
                their rural tradition, with many restaurants still serving food
                on a banana leaf. North Indian, Chinese and continental cuisines
                are also available. mysorepa (a sweet made from lentil flour)
                and halwa (a sweet made of different ingredients such as milk,
                wheat or rice) are famous. Idly, dosa, vada-sambar and biryani
                are popular among the locals. Coffee shops and chat centers
                cater to young people. Karupatti, coconut milk are famous.
              </p>
            </div>
          </section>

          {/* Section 4: Places of Interest */}
          <div>
            <div className="about_heads">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Places of Interest
              </h2>
            </div>
            <div className="call_list bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
              <ul className="text-lg text-gray-800">
                <li>Kodiveri Dam</li>
                <li>Pachaimalai Subramanya Swamy Temple</li>
                <li>Pariyur Kondathu Kaliamman Temple</li>
                <li>Gunderipallam Dam</li>
                <li>Perumpallam Dam</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Gallery */}
          <section className="gallery mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={pachamalaiImage}
                  alt="Pachamalai"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Pachamalai</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={pariImage}
                  alt="Pariyur"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Pariyur</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={gunderipallamImage}
                  alt="Gunderipallam"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Gunderipallam</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={perumpallamImage}
                  alt="Perumpallam"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Perumpallam</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={agricultureImage}
                  alt="Agriculture"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Agriculture</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={kodiveriImage}
                  alt="Kodiveri Dam"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-white text-lg">Kodiveri Dam</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Gobichettipalayam;
