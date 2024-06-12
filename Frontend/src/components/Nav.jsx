import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-xl font-bold">
              URL DETECTOR
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="space-x-4 md:flex md:justify-between gap-2">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white hover:text-white"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-gray-800 py-2 px-4 md:hidden">
            <ul>
              <li>
                <a href="#" className="block text-white py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-white py-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block text-white py-2">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block text-white py-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
