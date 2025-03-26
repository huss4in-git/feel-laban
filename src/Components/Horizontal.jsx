import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const Example = () => {
    return (
        <div 
            id="projects" 
            className="min-h-screen bg-no-repeat bg-center" 
            style={{ 
                backgroundColor: '#015de4', 
                backgroundImage: "url('logo1.jpeg')", // Ensure correct path
                backgroundSize: "cover",  // Ensures full image is visible without cropping
                backgroundPosition: "center",
                backgroundAttachment: "fixed" // Keeps the image still while scrolling
            }}
        >
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div data-aos="fade-up" className='flex justify-center text-6xl sm:text-8xl pt-20'>
                <p className="text-white" style={{fontFamily:'ant'}}>MENU</p>
            </div>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-end"></div>
        </a>
    );
};

export default Example;

const cards = [
    { url: "menu1.jpg", title: "Qashtota", id: 1 },
    { url: "menu2.jpg", title: "Salankatiya", id: 2 },
    { url: "menu3.jpg", title: "koshary", id: 3 },
    { url: "menu4.jpg", title: "Cheese Bomb", id: 4 },
    { url: "menu5.jpg", title: "Lehalebo", id: 5 },
    { url: "menu6.jpg", title: "Shakes", id: 6 },
    { url: "menu7.jpg", title: "Hot Choco", id: 7 },
];
