import React, { useEffect, useRef } from "react";
import "../../assets/css/page_under_construction.css";
import logo from "../../assets/images/logos/IEEE_Logo.png";

const PageUnderConstruction = () => {
  const radio1Ref = useRef(null);
  const radio2Ref = useRef(null);

  useEffect(() => {
    const clickRadio2 = () => {
      if (radio2Ref.current) {
        radio2Ref.current.click();
      }
    };

    const clickRadio1 = () => {
      if (radio1Ref.current) {
        radio1Ref.current.click();
      }
    };

    const interval2 = setInterval(clickRadio2, 2000);
    const interval1 = setInterval(clickRadio1, 4000);

    return () => {
      clearInterval(interval2);
      clearInterval(interval1);
    };
  }, []);

  return (
    <div className="">
      <main className="mains">
        {/* <h1 className="text-4xl md:text-6xl text-center font-bold text-yellow-800">
          Page Under Construction...
        </h1> */}
      </main>
      <div className="book_container">
        <div className="cover">
          <div className="book">
            <label htmlFor="page-1" className="book__page book__page--1">
              <img src={logo} alt="Cover" />
            </label>

            <label htmlFor="page-2" className="book__page book__page--4">
              <img src={logo} alt="Back Cover" />
            </label>

            {/* Resets the page */}
            <input
              type="radio"
              name="page"
              id="page-1"
              ref={radio1Ref}
              defaultChecked
            />

            {/* Goes to the second page */}
            <input type="radio" name="page" id="page-2" ref={radio2Ref} />

            <label className="book__page book__page--2">
              <div className="book__page-front">
                <div className="page__content">
                  <h1 className="page__content-book-title">
                    Page PageUnder Construction
                  </h1>
                  <h2 className="page__content-author">2025</h2>
                  <p className="page__content-credits">
                    {/* Date  */}
                    <span>February 27 & 28 2025</span>
                  </p>

                  <p className="page__content-credits">
                    {/* Venue  */}
                    <span>Gobi Arts & Science College (Autonomous)</span>
                  </p>

                  {/* <div className="page__content-copyright">
                    <p>Time : 10</p>
                  </div> */}
                </div>
              </div>

              <div className="book__page-back">
                <div className="page__content">
                  <h1 className="page__content-book-title">
                    Page PageUnder Construction
                  </h1>
                  <h2 className="page__content-author">2025</h2>
                  <p className="page__content-credits">
                    {/* Date  */}
                    <span>February 27 & 28 2025</span>
                  </p>

                  <p className="page__content-credits">
                    {/* Venue  */}
                    <span>Gobi Arts & Science College (Autonomous)</span>
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
