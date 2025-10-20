import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Feel Laban - Calicut",
    address: "Calicut – Convent Road, Moonalungal",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.076752581696!2d75.77147307570822!3d11.25576418892372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659003ddb39e5%3A0xe2fdb7f9fcd20cb0!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760686041443!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Calicut"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Bangalore",
    address: "Bangalore – Kammanahalli",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.31434812398!2d77.63757287573223!3d13.015643087303822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17edf8378715%3A0xb9ae9e587785254c!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760686849019!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Mangalore",
    address: "Belma Village, Deralakatte",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4881406783607!2d74.87995737572929!3d12.811702187489187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35f742254dadf%3A0x1f0d4d6231d39880!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760687873151!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Perumbavoor",
    address: "4F7C+VG3, 683542 ",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8100528354225!2d76.4687245756946!3d10.114628789996717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e30062ce26e3%3A0x82dd1b7c03a5fec5!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760688148634!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Tirur",
    address: "Ring Road, Pan Bazaar",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 2:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5911206511123!2d75.92428547570412!3d10.918646589238872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b128e2c7f41b%3A0xfbb376248da521a0!2sFeel%20Laban%20Tirur!5e0!3m2!1sen!2sin!4v1760688594039!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Bangalore"
      ></iframe>
    ),
  },
  {
    name: "Feel Laban - Nadapuram ",
    address: "Alfa Food Court - Kakkemvelli",
    email: "hello@feellaban.com",
    phone: "+91 98765 11111",
    hours: "Open 1:00 PM - 1:00 AM",
    image: "store.jpeg",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2111615619233!2d75.64056707571372!3d11.679441988529616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba681003e8e0be1%3A0x580cf53962f82224!2sFeel%20Laban!5e0!3m2!1sen!2sin!4v1760687531919!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Feel Laban Chennai"
      ></iframe>
    ),
  },
];

export default function LocationSection() {
  const [current, setCurrent] = useState(0);
  const loc = locations[current];

  const next = () => setCurrent((prev) => (prev + 1) % locations.length);
  const prev = () => setCurrent((prev) => (prev - 1 + locations.length) % locations.length);

  return (
    <div className="bg-[#faf9f6] text-[#015de4] px-6 md:px-19 py-20 flex flex-col md:flex-row items-center justify-between md:space-x-12">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        {/* Header */}
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
           Explore Feel Laban
          </h2>
        </div>

        {/* Image */}
<div className="overflow-hidden rounded-[2rem] w-full h-85">
  <img
    src={loc.image}
    alt={loc.name}
    className="object-cover w-full h-full transition-all duration-500"
  />
</div>


        {/* Location Info */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{loc.name}</h3>
          <p className="text-sm">{loc.address}</p>
          <p className="text-sm">{loc.email}</p>
          <p className="text-sm">{loc.phone}</p>
          <p className="text-sm">{loc.hours}</p>
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center space-x-3 ">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[#015de4] hover:bg-[#015de4] hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-[#015de4] hover:bg-[#015de4] hover:text-white transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — Google Map */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0">
        <div className="relative w-full h-[500px] rounded-2xl border border-[#d8d2bf] overflow-hidden shadow-sm">
          {loc.mapEmbed}
        </div>
      </div>
    </div>
  );
}
