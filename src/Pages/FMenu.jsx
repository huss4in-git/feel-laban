import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Footer from "../Components/Footer";

const menuItems = [
  // KOSHARI
  { id: 1, name: "Trio", category: "Koshari", image: "/koshari-trio.png" },
  { id: 2, name: "Pistachio Lotus", category: "Koshari", image: "/koshari-pista-lotus.png" },
  { id: 3, name: "Kinder Nutella", category: "Koshari", image: "/koshari-kinder-nutella.png" },
  { id: 4, name: "Pistachio Nutella", category: "Koshari", image: "/koshari-pista-nutella.png" },

  // LOUAH
  { id: 5, name: "Nutella Pistachio Kinder", category: "Louah", image: "/louah-nutella-pista.png" },
  { id: 6, name: "Chocolate Kinder", category: "Louah", image: "/louah-choco-kinder.png" },

  // SALANKATIYA
  { id: 7, name: "Pistachio Nutella", category: "Salankatiya", image: "/salan-pista-nutella.png" },
  { id: 8, name: "Pistachio Lotus", category: "Salankatiya", image: "/salan-pista-lotus.png" },
  { id: 9, name: "Trio", category: "Salankatiya", image: "/salan-trio.png" },

  // SPECIALTIES & CAKES
  { id: 10, name: "Kabsa", category: "Specialties", image: "/special-kabsa.png" },
  { id: 11, name: "Creme De La Creme", category: "Specialties", image: "/special-creme.png" },
  { id: 12, name: "Lazy Cat", category: "Specialties", image: "/special-lazy-cat.png" },
  { id: 13, name: "Cheese Bomb", category: "Specialties", image: "/special-cheese-bomb.png" },
  { id: 14, name: "Hebba Cake", category: "Specialties", image: "/special-hebba.png" },
  { id: 15, name: "Al Mazia", category: "Specialties", image: "/special-al-mazia.png" },

  // QASHTUTAH
  { id: 16, name: "Mango", category: "Qashtutah", image: "/qash-mango.png" },
  { id: 17, name: "Pistachio Nutella", category: "Qashtutah", image: "/qash-pista.png" },

  // BEVERAGES
  { id: 18, name: "Hot Chocolate (250ml)", category: "Beverages", image: "/bev-hot-choco.png" },
  { id: 19, name: "Nutella Shake", category: "Beverages", image: "/shake-nutella.png" },
  { id: 20, name: "Pistachio Shake", category: "Beverages", image: "/shake-pista.png" },
  { id: 21, name: "Lotus Shake", category: "Beverages", image: "/shake-lotus.png" },
];

const categories = ["All", ...new Set(menuItems.map(item => item.category))];

function FMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#faf9f6] min-h-screen font-sans">
      
      <div className="w-full bg-[#faf9f6] px-6 md:px-16 py-4 flex justify-between items-center border-b border-blue-100 sticky top-0 z-30 shadow-sm">
        <Link to="/" className="text-[#015de4] font-bold flex items-center gap-2 hover:text-blue-800 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
        <img src="/f-logo.png" alt="Feel Laban" className="h-8 md:h-10 object-contain" onError={(e) => e.target.style.display='none'} />
        <div className="w-10 sm:w-28"></div> 
      </div>

      <div className="w-full px-6 md:px-16 pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="w-full mb-12 rounded-[2rem] overflow-hidden shadow-sm border border-blue-100">
             <img src="/menu.jpg" alt="Feel Laban Categories" className="w-full h-auto object-cover" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#015de4] mb-4" style={{ fontFamily: 'head' }}>
              OUR MENU
            </h1>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-6 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full border-2 border-[#015de4] font-bold transition-all ${
                  activeCategory === category 
                    ? "bg-[#015de4] text-white" 
                    : "text-[#015de4] hover:bg-[#015de4]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-[2rem] border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group"
              >
                <div className="bg-[#015de4]/5 w-full aspect-square p-6 flex items-center justify-center relative">
                  {/* Prices removed from here */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "/f-logo.png"; 
                      e.target.className = "w-1/2 h-1/2 object-contain opacity-20";
                    }} 
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow text-center justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-[#015de4] leading-tight mb-1">
                    {item.name}
                  </h3>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FMenu;