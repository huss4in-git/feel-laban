import React from "react";

const StoreSections = () => (
  <div style={{fontFamily:'san'}}>
    {/* Section 1 */}
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5">
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
        <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
          Our Stores
        </h1>
        <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
          From sustainable lifestyle guides to zero-waste recipes, we’re sharing it all on the blog.
        </p>
        <button className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white">
          Contact Now
        </button>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <div className="overflow-hidden rounded-full h-[30rem] sm:h-[57rem] max-w-[22rem] sm:max-w-[37rem] w-full bg-white flex items-center justify-center">
          <img
            src="store.jpg"
            alt="Vertical Capsule"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="flex flex-col lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5 mt-8 sm:mt-10">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <div className="overflow-hidden rounded-full h-[30rem] sm:h-[57rem] max-w-[22rem] sm:max-w-[37rem] w-full bg-white flex items-center justify-center">
          <img
            src="store.jpg"
            alt="Vertical Capsule"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
        <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
          We Pop Up!
        </h1>
        <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
          Party at your place? Hosting an event? Book our popup shop to give your guests a sustainable experience.
        </p>
        <button className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white">
          See All Locations
        </button>
      </div>
    </section>

    {/* Section 3 */}
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5 mt-8 sm:mt-10">
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
        <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
          Our Stores
        </h1>
        <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
          From sustainable lifestyle guides to zero-waste recipes, we’re sharing it all on the blog.
        </p>
        <button className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white">
          See All Locations
        </button>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <div className="overflow-hidden rounded-full h-[30rem] sm:h-[57rem] max-w-[22rem] sm:max-w-[37rem] w-full bg-white flex items-center justify-center">
          <img
            src="store.jpg"
            alt="Vertical Capsule"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  </div>
);

export default StoreSections;
