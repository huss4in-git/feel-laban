import React, { useRef, useState, useLayoutEffect } from 'react';
import './Horizontal.css'; // 👈 contains the no-scrollbar styles

const allProducts = {
    Shakes: [
        { image: 'test.webp', name: 'Nutella', tags: ['Shake'] },
        { image: 'test.webp', name: 'Pistachio', tags: ['Shake'] },
        { image: 'test.webp', name: 'Lotus', tags: ['Shake'] },
    ],
    'New Arrivals': [
        { image: 'Loua - Kinder Pistachio Choclate.png', name: 'Nutella Pistachio Kinder', tags: ['Louah'] },
        { image: 'Loua - Kinder Choclate.png', name: 'Chocolate Kinder', tags: ['Louah'] },
        { image: 'Lazy Cat.png', name: 'Lazy Cat', tags: ['Salankatiya'] },
        { image: 'Kabsa.png', name: 'Kabsa', tags: ['Salankatiya'] },
        { image: 'Creme dela cream.png', name: 'Creme De La Creme', tags: ['Salankatiya'] },
        { image: 'Hebba Cake.png', name: 'Hebba Cake', tags: ['Salankatiya'] },
        { image: 'Al Mazia.png', name: 'Al Mazia', tags: ['Salankatiya'] },
    ],
    Bestsellers: [
        { image: 'Loptus Pistachio - Koshary.png', name: 'Pistachio Lotus', tags: ['Koshari'] },
        { image: 'Kinder Nutella Koshary.png', name: 'Kinder Nutella', tags: ['Koshari'] },
        { image: 'Bambooza - Pistachio.png', name: 'Pistachio', tags: ['Bambooza'] },
        { image: 'Cheese Bomb.png', name: 'Cheese Bomb', tags: ['Salankatiya'] },
        { image: 'Loua - Kinder Pistachio Choclate.png', name: 'Nutella Pistachio Kinder', tags: ['Louah'] },
    ],
};

const categories = ['Shakes', 'New Arrivals', 'Bestsellers'];

function CardSlider() {
    const sliderRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('New Arrivals');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const products = allProducts[activeCategory] || [];

    useLayoutEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        if (activeCategory === 'Shakes') {
            slider.scrollTo({
                left: slider.scrollWidth / 2 - slider.clientWidth / 2,
                behavior: 'smooth',
            });
        } else {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        }

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
                    className={`flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar ${
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
                            <div className="bg-[#e8e6e3] p-20 flex flex-col items-center w-full">
                                <div className="relative flex justify-center items-center w-full">
                                    <div className="h-60 w-40 flex items-center justify-center rounded-full">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-30 w-45  "
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#2563eb] font-medium text-xl mt-4">
                                {product.name}
                            </div>

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
