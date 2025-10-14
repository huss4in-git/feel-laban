import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-8 py-4 flex items-center">
        <a href="/" className="flex items-center">
          <img
            src="/f-logo.png"
            alt="Logo"
            className="h-30 w-auto cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
