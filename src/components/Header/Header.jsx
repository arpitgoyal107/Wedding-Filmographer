import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <header className='px-12 m-0 z-10 bg-white fixed w-full'>
            <nav className="flex items-center justify-between pt-6 pb-4 max-w-screen-2xl mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="../images/Black-png.png" alt="Logo" className=" h-24" />
                </Link>

                {/* Responsive menu button (for mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19 6L5 6 5 8 19 8 19 6ZM19 11L5 11 5 13 19 13 19 11ZM5 16L19 16 19 14 5 14 5 16Z"
                        />
                        ) : (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6L20 6 20 8 4 8 4 6ZM20 11L4 11 4 13 20 13 20 11ZM4 16L20 16 20 14 4 14 4 16Z"
                        />
                        )}
                    </svg>
                    </button>
                </div>

                {/* Sidebar for mobile view */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-800 py-4`}>
                    <ul className="text-white text-center">
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
                        to="/photography"
                        activeClassName="font-bold"
                        className="block py-2 duration-200 hover:text-gray-300"
                        onClick={toggleMenu}
                        >
                        Photography
                        </NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink
                        to="/contact"
                        activeClassName="font-bold"
                        className="block py-2 duration-200 hover:text-gray-300"
                        onClick={toggleMenu}
                        >
                        Contact
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
                    </ul>
                </div>

                {/* Menu options */}
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex font-bold lg:flex-row space-x-12 tracking-widest">
                        <li>
                            <NavLink
                            to="/"
                            className={({isActive}) =>`duration-300 ${isActive ? "text-gray-400" : "text-black"} hover:text-gary-400 uppercase`}
                            >
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about-us"
                            className={({isActive}) =>`duration-300 ${isActive ? "text-gray-400" : "text-black"} hover:text-gary-400 uppercase`}
                            >
                            About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/photography"
                            className={({isActive}) =>`duration-300 ${isActive ? "text-gray-400" : "text-black"} hover:text-gary-400 uppercase`}
                            >
                            Our Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/questions"
                            className={({isActive}) =>`duration-300 ${isActive ? "text-gray-400" : "text-black"} hover:text-gary-400 uppercase`}
                            >
                            Questions?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/contact"
                            className={({isActive}) =>`duration-300 ${isActive ? "text-gray-400" : "text-black"} hover:text-gary-400 uppercase`}
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

export default Header