import React, { useRef, useState, useLayoutEffect } from "react";
import "./Horizontal.css"; // 👈 contains the no-scrollbar styles

const allProducts = {
  Shakes: [
    { image: "test.webp", name: "Nutella", tags: ["Shake"] },
    { image: "test.webp", name: "Pistachio", tags: ["Shake"] },
    { image: "test.webp", name: "Lotus", tags: ["Shake"] },
  ],
  "New Arrivals": [
    { image: "test.webp", name: "Mango", tags: ["Qashtutah"] },
    { image: "test.webp", name: "Pistachio Nutella", tags: ["Qashtutah"] },
  ],
  Bestsellers: [
    { image: "Kabsa.png", name: "Kabsa", tags: ["Salankatiya"] },
    { image: "Creme dela cream.png", name: "Creme De La Creme", tags: ["Salankatiya"] },
    { image: "Lazy Cat.png", name: "Lazy Cat", tags: ["Salankatiya"] },
    { image: "Hebba Cake.png", name: "Hebba Cake", tags: ["Louah"] },
    { image: "Loua - Kinder Pistachio Choclate.png", name: "Loua - Kinder Pistachio Chocolate", tags: ["Louah"] },
  ],
};

const categories = ["Shakes", "Bestsellers", "New Arrivals"];

function CardSlider() {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Bestsellers");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = allProducts[activeCategory] || [];

  useLayoutEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    if (activeCategory === "Shakes") {
      slider.scrollTo({
        left: slider.scrollWidth / 2 - slider.clientWidth / 2,
        behavior: "smooth",
      });
    } else {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }

    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateArrows();
    slider.addEventListener("scroll", updateArrows);
    return () => slider.removeEventListener("scroll", updateArrows);
  }, [activeCategory]);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const cardWidth = window.innerWidth <= 380 ? sliderRef.current.clientWidth * 0.95 : 320;
      sliderRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#faf9f6] py-6 sm:py-18">
      {/* Categories */}
      <div
        className="
          flex items-baseline gap-4 sm:gap-8 mb-0 sm:mb-8 
          overflow-x-auto whitespace-nowrap no-scrollbar
          justify-start sm:justify-center
          pl-6 sm:pl-0 mt-5 sm:mt-0
        "
      >
        {categories.map((category) => (
          <span
            key={category}
            className={`text-3xl sm:text-6xl font-serif cursor-pointer inline-block ${
              category === activeCategory ? "font-bold text-[#2563eb]" : "text-[#c3d7f5]"
            } mr-4`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Slider */}
      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-6">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            <svg
              width="36"
              height="24"
              viewBox="0 0 60 30"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="55" y1="15" x2="10" y2="15" />
              <polyline points="20 5 10 15 20 25" />
            </svg>
          </button>
        )}

        {/* Products */}
        <div
          ref={sliderRef}
          className={`flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar ${
            activeCategory === "Shakes" ? "justify-center" : ""
          }`}
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {products.map((product, idx) => (
            <div
              key={`${activeCategory}-${idx}`}
              className="
                flex flex-col items-center 
                min-w-[92%] sm:min-w-[340px] 
                mx-auto sm:mx-0
              "
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <div className="bg-[#e8e6e3] p-10 sm:p-20 flex flex-col items-center w-full rounded-none">
                <div className="relative flex justify-center items-center w-full">
                  <div className="h-56 w-36 flex items-center justify-center rounded-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[130px] w-[130px] object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="text-[#2563eb] font-medium text-xl mt-3 text-center w-full sm:text-left">
                {product.name}
              </div>

              <div className="flex gap-2 mt-2 flex-wrap justify-center sm:justify-start">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#2563eb] rounded-full px-3 py-1 text-sm text-[#2563eb]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            <svg
              width="36"
              height="24"
              viewBox="0 0 60 30"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="15" x2="50" y2="15" />
              <polyline points="40 5 50 15 40 25" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default CardSlider;
