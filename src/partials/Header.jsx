import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/whitetap/whitetap.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [top, setTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="White Tap">
              <img className="md:w-48 w-36" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {dropdownOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Site navigation */}
          <nav className="hidden md:flex md:flex-grow justify-end items-center space-x-6">
            <ul className="md:flex md:flex-grow justify-end items-center space-x-6">
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 px-5 py-3 rounded-full transition duration-150 ease-in-out flex items-center"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {dropdownOpen && (
        <div className="absolute  top-16 right-0 bg-white shadow-md border border-y border-gray-200 w-full p-6">
          <ul className="space-y-3 flex justify-evenly  ">
            <li>
              <Link
                to="/signin"
                className="text-black mt-6 font-semibold hover:text-gray-900 flex items-center"
                onClick={() => setDropdownOpen(false)}
              >
                Sign in
              </Link>
            </li>
            <li>
            <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 px-5 py-3 rounded-full transition duration-150 ease-in-out flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
