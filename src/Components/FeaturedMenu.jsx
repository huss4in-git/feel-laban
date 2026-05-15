import React from "react";
import ProductCard from "./ProductCard";

const FeaturedMenu = () => {
  const featuredCategories = [
    {
      id: 1,
      title: "Signature Cakes",
      description: "Rich, decadent, and crafted to perfection. Experience our premium cake selections like the Fazea.",
      image: "/cakes.png" 
    },
    {
      id: 2,
      title: "Creamy Puddings",
      description: "Dive into layers of sweetness with our signature laban-based puddings and Koshari bowls.",
      image: "/puddings.png" 
    },
    {
      id: 3,
      title: "Premium Shakes",
      description: "Thick, dreamy, and blended with your favorite flavors like Lotus, Nutella, and Pistachio.",
      image: "/shakes.png" 
    }
  ];

  return (
    // Reduced bottom padding (pb-8) to close the gap with the section below
    <div className="w-full bg-[#faf9f6] pt-16 pb-8 px-6 md:px-16" style={{ fontFamily: "san" }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#015de4] mb-4" style={{ fontFamily: 'head' }}>
            OUR MENU
          </h1>
          <p className="text-[#015de4] opacity-80 text-lg md:text-xl">
            Discover our most loved laban creations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <ProductCard 
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedMenu;