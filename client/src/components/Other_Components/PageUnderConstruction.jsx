import React from "react";

const PageUnderConstruction = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <main className="mains">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-yellow-800">
          Page Under Construction...
        </h1>
      </main>
      <div className="mt-20 md:mt-32">
        <img
          src="/images/under-construction.png"
          alt="Under Construction"
          className="w-64 md:w-96 mx-auto"
        />
      </div>
    </div>
  );
};

export default PageUnderConstruction;
