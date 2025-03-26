import React from "react";
import { FaPhone, FaWhatsapp, FaInstagram, FaMotorcycle } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../feel5.png')" }}
      ></div>

      {/* 2x2 Dripping Icons in White Section */}
      <div className="absolute left-0 md:left-50 w-full md:w-auto flex md:grid md:grid-cols-2 justify-center md:justify-start gap-6">
        {[
          { icon: <FaPhone />, link: "tel:+1234567890", label: "call" },
          { icon: <FaWhatsapp />, link: "https://wa.me/yourwhatsappnumber", label: "whatsapp" },
          { icon: <FaInstagram />, link: "https://instagram.com/feellaban", label: "instagram" },
          { icon: <FaMotorcycle />, link: "your-delivery-link-here", label: "delivery" }
        ].map(({ icon, link, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 flex items-center justify-center bg-[#015de4] rounded-full text-3xl transition-all duration-300 shadow-lg text-white 
                hover:bg-white hover:text-[#015de4]"
            >
              {icon}
            </a>
            <span className="mt-2 text-sm font-light text-[#015de4]" style={{ fontFamily: 'ant', fontWeight: '300' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;