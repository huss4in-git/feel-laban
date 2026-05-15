import React from "react";
import { Link } from "react-router-dom";

const StoreSections = () => {
  return (
    // Starts exactly where Location.jsx leaves off. Same background, same horizontal padding.
    <div className="w-full bg-[#faf9f6] px-6 md:px-16 pb-16" style={{ fontFamily: "san" }}>
      
      {/* Wrapped in max-w-7xl so it aligns perfectly with the Location grid above it */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Section 1: Franchise Enquiries */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="overflow-hidden bg-white flex items-center justify-center rounded-[2rem] h-[24rem] sm:h-[28rem] w-full max-w-[30rem] lg:max-w-full">
              <img
                src="Image-413.jpg"
                alt="Feel Laban Pop Up"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-serif text-[#015de4] text-4xl sm:text-5xl md:text-6xl mb-6 font-normal">
              Franchise Enquiries?
            </h1>
            <p className="text-[#015de4] mb-8 max-w-md text-base sm:text-lg">
              Partner with us and bring our brand to your city. Submit your details
              to start your franchise journey today.
            </p>
            <Link
              to="/franchise"
              className="inline-block bg-[#faf9f6] text-[#015de4] px-8 py-3 text-xl sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </section>

        {/* Section 2: About Feel Laban */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-serif text-[#015de4] text-4xl sm:text-5xl md:text-6xl mb-6 font-normal">
              About Feel Laban
            </h1>
            <p className="text-[#015de4] mb-8 max-w-md text-base sm:text-lg">
              Feel Laban is a dessert haven offering creamy laban-based treats and
              desserts. Experience the perfect blend of tradition and creativity in
              every bite.
            </p>
            <a
              href="https://wa.me/917736660688"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#faf9f6] text-[#015de4] px-8 py-3 text-xl sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
            >
              Contact Now
            </a>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="overflow-hidden bg-white flex items-center justify-center rounded-[2rem] h-[24rem] sm:h-[28rem] w-full max-w-[30rem] lg:max-w-full">
              <img
                src="flaban.jpg"
                alt="Feel Laban Desserts"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StoreSections;