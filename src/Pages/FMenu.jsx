import React from "react";

function FMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">FMenu</h1>
      <a
        href="/f-menu1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open PDF
      </a>
    </div>
  );
}

export default FMenu;
