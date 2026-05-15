import React from "react";

const LandingPage = () => {
  return (
    // Change h-screen to h-[85vh] and text-9xl to text-7xl
    <div className="relative w-full h-[85vh] text-[white] overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-[90%]">
          {" "}
          {/* Slightly shorter container */}
          <div className="absolute inset-0 flex justify-center items-center translate-y-6">
            <div className="w-[85%] md:w-[88%] h-[70%] rounded-tl-[150px] rounded-bl-[150px] rounded-br-[150px] overflow-hidden -rotate-3">
              <video
                src="/test3.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            {/* Scaled down from 9xl to 7xl for a cozier look */}
            <h1
              className="text-6xl md:text-7xl font-extrabold text-[#015de4] -rotate-3"
              style={{ fontFamily: "head" }}
            >
              FEEL LABAN
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
