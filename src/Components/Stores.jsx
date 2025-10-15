import React from "react";
import { Link } from 'react-router-dom';

const StoreSections = () => (
  <div style={{ fontFamily: "san" }}>
    {/* Section 1 */}
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5">
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
        <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
          Visit Feel Laban
        </h1>
        <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
          Indulge in creamy laban desserts and sweet treats crafted with love. 
          Our stores in Calicut and Nadapuram are open daily from 2 PM to 1 AM.
        </p>
        <a
        >
          <button
  onClick={() => window.open("https://www.google.com/maps/search/Feel+Laban", "_blank")}
  className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
>
  Locations
</button>

        </a>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <div className="overflow-hidden rounded-full h-[30rem] sm:h-[57rem] max-w-[22rem] sm:max-w-[37rem] w-full bg-white flex items-center justify-center">
          <img
            src="store.jpeg"
            alt="Feel Laban Store"
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
            src="Image-413.jpg"
            alt="Feel Laban Pop Up"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
  <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
    Franchise Enquiries?
  </h1>
  <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
    Partner with us and bring our brand to your city. Submit your details to start your franchise journey today.
  </p>

  <button
    onClick={() => {
      const footer = document.getElementById('site-footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white"
  >
    Contact Now
  </button>
</div>

    </section>

    {/* Section 3 */}
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen bg-[#faf9f6] px-5 mt-8 sm:mt-10">
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-14">
        <h1 className="font-serif text-[#015de4] text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-normal">
          About Feel Laban
        </h1>
        <p className="text-[#015de4] mb-6 sm:mb-9 max-w-xs sm:max-w-md text-sm sm:text-lg">
          Feel Laban is a dessert haven offering creamy laban-based treats and desserts. Experience the perfect blend of tradition and creativity in every bite.
        </p>
        <a
          href="https://wa.me/917736660688"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#faf9f6] text-[#015de4] px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-serif rounded-full border border-[#015de4] transition-colors duration-200 hover:bg-[#015de4] hover:text-white">
            Contact Now
          </button>
        </a>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <div className="overflow-hidden rounded-full h-[30rem] sm:h-[57rem] max-w-[22rem] sm:max-w-[37rem] w-full bg-white flex items-center justify-center">
          <img
            src="flaban.jpg"
            alt="Feel Laban Desserts"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  </div>
);

export default StoreSections;
