import React from "react";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen text-[white] overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
          {/* Background Shape with Rotation */}
          <div className="absolute inset-0 flex justify-center items-center translate-y-10">
            <div className="w-[90%] md:w-[93%] h-[74%] rounded-tl-[200px] rounded-bl-[200px] rounded-br-[200px] overflow-hidden -rotate-3">
              <video 
                src="/test3.mp4" 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Overlay Content Moved Below */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-9xl font-extrabold text-[#015de4] -rotate-3" style={{fontFamily:'head'}}>FEEL LABAN</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
