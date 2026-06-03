import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, image }) => {
  return (
    // Removed max-w-[320px] and mx-auto so it perfectly fills the grid column
    // Added rounded-[2rem] and border-blue-100 to identically match the Location cards
    <div className="w-full bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full border border-blue-100 hover:shadow-md transition-shadow">
      
      {/* Top Section: The Image Area */}
      <div className="bg-[#015de4]/10 w-full h-64 flex items-center justify-center p-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Bottom Section: Text and Button */}
      <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
        <h3 className="text-2xl font-bold text-[#015de4]">{title}</h3>
        <p className="text-sm text-gray-600 mt-3 mb-8 flex-grow">
          {description}
        </p>
        
        {/* The Explore Link */}
        <Link 
          to="/menu" 
          className="bg-[#015de4] text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-blue-800 transition-colors w-full inline-block"
        >
          Explore
        </Link>
      </div>

    </div>
  );
};

export default ProductCard;