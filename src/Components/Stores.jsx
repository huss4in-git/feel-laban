import React from "react";

const StoreSections = () => (
  <div>
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-14">
        <h1 className="font-serif text-[#015de4] text-5xl md:text-6xl mb-5 font-normal">Our Stores</h1>
        <p className="text-[#015de4] mb-9 max-w-md text-lg">
          From sustainable lifestyle guides to zero-waste recipes, we’re sharing it all on the blog.
        </p>
        <button
          className="bg-[#faf9f6] text-[#015de4] px-8 py-3 text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
        >
          Contact Now
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
  <div className="overflow-hidden rounded-full h-[57rem] max-w-[37rem] w-full bg-white flex items-center justify-center">
    <img
      src="store.jpg"
      alt="Vertical Capsule"
      className="object-cover w-full h-full"
    />
  </div>
</div>

    </section>
    <section className="flex flex-col lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5 mt-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
  <div className="overflow-hidden rounded-full h-[57rem] max-w-[37rem] w-full bg-white flex items-center justify-center">
    <img
      src="store.jpg"
      alt="Vertical Capsule"
      className="object-cover w-full h-full"
    />
  </div>
</div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-14">
        <h1 className="font-serif text-[#015de4] text-5xl md:text-6xl mb-5 font-normal">We Pop Up!</h1>
        <p className="text-[#015de4] mb-9 max-w-md text-lg">
          Party at your place? Hosting an event? Book our popup shop to give your guests a sustainable experience.
        </p>
        <button
          className="bg-[#faf9f6] text-[#015de4] px-8 py-3 text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
        >
          See All Locations
        </button>
      </div>
    </section>
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-14">
        <h1 className="font-serif text-[#015de4] text-5xl md:text-6xl mb-5 font-normal">Our Stores</h1>
        <p className="text-[#015de4] mb-9 max-w-md text-lg">
          From sustainable lifestyle guides to zero-waste recipes, we’re sharing it all on the blog.
        </p>
        <button
          className="bg-[#faf9f6] text-[#015de4] px-8 py-3 text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
        >
          See All Locations
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
  <div className="overflow-hidden rounded-full h-[57rem] max-w-[37rem] w-full bg-white flex items-center justify-center">
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
