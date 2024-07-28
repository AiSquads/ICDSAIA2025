import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Venue = () => {
  const venueRef = useRef(null);
  const detailRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      venueRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: venueRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(
      detailRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-black p-4">
      <div className=" p-6 w-full rounded-lg ">
        <div ref={venueRef} className="subm_head text-center my-8">
          <h2 className="">VENUE</h2>
          <div className="lines"></div>
        </div>
        <div ref={detailRef} className="text-center my-8">
          <p className="text-lg md:text-xl leading-relaxed">
            Gobi Arts & Science College (Autonomous) <br />
            <span className="">
              Gobichettipalayam,
              <br /> Erode, Tamilnadu, India
            </span>
          </p>
        </div>
        <div className=" subm_head text-center my-8">
          <h2 className="">Location</h2>
          <div className="lines"></div>
        </div>
        <div ref={mapRef} className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4227655850545!2d77.40168821412168!3d11.449380649543594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d698880c345%3A0xe08dd16d1dc3a42f!2sGobi%20Arts%20%26%20Science%20College%2C%20Gobi!5e0!3m2!1sen!2sin!4v1679469443797!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gobi Arts & Science College"
            className="rounded-lg shadow-2xl"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Venue;
