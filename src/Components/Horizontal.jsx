import React, { useRef, useState, useLayoutEffect } from 'react';

const allProducts = {
    Shakes: [
        { image: 'test.webp', name: 'Nutella', tags: ['Shake'] },
        { image: 'test.webp', name: 'Pistachio', tags: ['Shake'] },
        { image: 'test.webp', name: 'Lotus', tags: ['Shake'] },
    ],
    'New Arrivals': [
        { image: 'test.webp', name: 'Mango', tags: ['Qashtutah'] },
        { image: 'test.webp', name: 'Pistachio Nutella', tags: ['Qashtutah'] },
    ],
    Bestsellers: [
        { image: 'test.webp', name: 'Kabsa', tags: ['Salankatiya'] },
        { image: 'test.webp', name: 'Creme De La Creme', tags: ['Salankatiya'] },
        { image: 'test.webp', name: 'Lazy Cat', tags: ['Salankatiya'] },
        { image: 'test.webp', name: 'Hebba Cake', tags: ['Louah'] },
        { image: 'test.webp', name: 'Hot Chocolate', tags: ['Drink'] },
    ],
};

const categories = ['Shakes', 'Bestsellers', 'New Arrivals'];

function CardSlider() {
    const sliderRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('Bestsellers');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const products = allProducts[activeCategory] || [];

    useLayoutEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        if (activeCategory === 'Shakes') {
            // Center the Shakes cards
            slider.scrollTo({
                left: slider.scrollWidth / 2 - slider.clientWidth / 2,
                behavior: 'smooth',
            });
        } else {
            // Start from first card for other categories
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        }

        // Update arrow visibility
        const updateArrows = () => {
            const { scrollLeft, scrollWidth, clientWidth } = slider;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        };

        updateArrows();

        slider.addEventListener('scroll', updateArrows);
        return () => slider.removeEventListener('scroll', updateArrows);
    }, [activeCategory]);

    const scroll = (dir) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-[#faf9f6] py-6 sm:py-18">
            {/* Categories */}
            <div className="flex justify-center items-baseline gap-4 sm:gap-8 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap px-4">
                {categories.map((category) => (
                    <span
                        key={category}
                        className={`text-3xl sm:text-6xl font-serif cursor-pointer inline-block ${
                            category === activeCategory
                                ? 'font-bold text-[#2563eb]'
                                : 'text-[#c3d7f5]'
                        } mr-4`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </span>
                ))}
            </div>

            {/* Slider */}
            <div className="relative max-w-8xl mx-auto px-4 pt-6">
                {/* Left Arrow */}
                {activeCategory !== 'Shakes' && canScrollLeft && (
                    <button
                        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
                        onClick={() => scroll(-1)}
                        aria-label="Scroll left"
                    >
                        <svg
                            width="60"
                            height="30"
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
                    className={`flex gap-5 overflow-x-auto scroll-smooth pb-4 ${
                        activeCategory === 'Shakes' ? 'justify-center' : ''
                    }`}
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {products.map((product, idx) => (
                        <div
                            key={`${activeCategory}-${idx}`}
                            className="flex flex-col items-start min-w-[340px]"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            {/* Card */}
                            <div className="bg-[#e8e6e3] p-20 flex flex-col items-center w-full">
                                <div className="relative flex justify-center items-center w-full">
                                    <div className="h-60 w-40 flex items-center justify-center rounded-full">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-100 w-42 object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Product Name */}
                            <div className="text-[#2563eb] font-medium text-xl mt-4">
                                {product.name}
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-[#2563eb] rounded-full px-2 py-2 text-sm text-[#2563eb]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

  {/* Shop All Button */}
{activeCategory !== 'Shakes' && (
    <button
        className="flex mt-7 flex-col items-center justify-center text-center rounded-full border border-[#2563eb] text-[#2563eb] font-semibold transition-colors duration-300 min-w-[340px] min-h-[300px] hover:bg-[#2563eb] hover:text-white"
        style={{
            scrollSnapAlign: 'start',
            width: '340px',
            height: '340px',
        }}
        onClick={() => alert('Shop All clicked!')}
    >
        <span className="text-xl">Shop All</span>
        <span className="text-xl mt-1">{activeCategory}</span>
    </button>
)}



                </div>

                {/* Right Arrow */}
                {activeCategory !== 'Shakes' && canScrollRight && (
                    <button
                        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 focus:outline-none"
                        onClick={() => scroll(1)}
                        aria-label="Scroll right"
                    >
                        <svg
                            width="60"
                            height="30"
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
