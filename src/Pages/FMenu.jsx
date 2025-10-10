import React, { useState, useEffect } from "react";

function FMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <img
          src="Feel Laban (Pamphlet Design - Page (2).png"
          alt="Mobile Menu Image"
        />
      ) : (
        <>
          <img
            src="Feel Laban Menu - Sign Board (1).png"
            alt="Menu Image 1"
          />
          <img
            src="Feel Laban Menu - Sign Board (2).png"
            alt="Menu Image 2"
          />
        </>
      )}
    </div>
  );
}

export default FMenu;
