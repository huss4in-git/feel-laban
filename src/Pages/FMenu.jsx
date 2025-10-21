import React, { useState, useEffect } from "react";

function FMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {isMobile ? (
        <>
          <img
            src="Menumobile.jpeg"
            alt="Mobile Menu Image 2"
            className="w-full"
          />
          <img
            src="Feel Laban (Pamphlet Design - Page (2).png"
            alt="Mobile Menu Image 1"
            className="w-full"
          />
        </>
      ) : (
        <>
          <img
            src="Feel Laban Menu - Sign Board (1).png"
            alt="Menu Image 1"
            className="w-full"
          />
          <img
            src="Feel Laban Menu - Sign Board (2).png"
            alt="Menu Image 2"
            className="w-full"
          />
        </>
      )}
    </div>
  );
}

export default FMenu;
