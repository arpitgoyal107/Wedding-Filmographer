import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scrolling
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  return (
    <>
      <header className="z-10 bg-white fixed w-full">
        <nav className="flex items-center justify-between max-w-6xl px-6 my-5 mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-col pr-6">
            <img src="../images/Black.png" alt="Logo" className="w-52" />
          </Link>

          {/* Responsive menu button (for mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none transition-transform duration-300"
            >
              {isOpen ? (
                <FaTimes size={33} color="black" />
              ) : (
                <FaBars size={30} color="black" />
              )}
            </button>
          </div>

          {/* Sidebar for mobile view */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-[-10] transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-[108px]">
              <ul className="text-black text-center font-medium uppercase">
                <li className="py-2">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="font-bold"
                    className="block py-2 duration-200 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/about-us"
                    activeClassName="font-bold"
                    className="block py-2 duration-200 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/photography"
                    activeClassName="font-bold"
                    className="block py-2 duration-200 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Our Work
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/questions"
                    activeClassName="font-bold"
                    className="block py-2 duration-200 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Questions?
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/contact"
                    activeClassName="font-bold"
                    className="block py-2 duration-200 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu options */}
          <div className={`lg:flex items-center hidden space-x-12`}>
            <ul className="flex lg:flex-row space-x-12">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-0 ${
                      isActive
                        ? "text-[#D14D72] font-bold border-b-2 border-[#D14D72]"
                        : "text-black font-medium border-black"
                    } hover:border-b-2 transition ease-in-out uppercase`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `duration-0 ${
                      isActive
                        ? "text-[#D14D72] font-bold border-b-2 border-[#D14D72]"
                        : "text-black font-medium border-black"
                    } hover:border-b-2 transition ease-in-out uppercase`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/photography"
                  className={({ isActive }) =>
                    `duration-0 ${
                      isActive
                        ? "text-[#D14D72] font-bold border-b-2 border-[#D14D72]"
                        : "text-black font-medium border-black"
                    } hover:border-b-2 transition ease-in-out uppercase`
                  }
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/questions"
                  className={({ isActive }) =>
                    `duration-0 ${
                      isActive
                        ? "text-[#D14D72] font-bold border-b-2 border-[#D14D72]"
                        : "text-black font-medium border-black"
                    } hover:border-b-2 transition ease-in-out uppercase`
                  }
                >
                  Questions?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-0 ${
                      isActive
                        ? "text-[#D14D72] font-bold border-b-2 border-[#D14D72]"
                        : "text-black font-medium border-black"
                    } hover:border-b-2 transition ease-in-out uppercase`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
