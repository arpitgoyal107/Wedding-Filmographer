import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#FFDFDF] from-10% via-[#FFABAB] via-50% to-[#D14D72] text-white">
      <div className="max-w-7xl py-8 px-6 mx-auto flex flex-col space-y-6 md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-64">
          <img src="/images/White-1.png" alt="" />
        </div>
        <div className="flex justify-center space-x-4 md:order-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full"
          >
            <FaInstagram />
          </a>
        </div>
        <nav className="flex flex-col items-center md:flex-row md:items-center md:order-1 space-y-4 md:space-y-0 md:space-x-4">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/about" className="text-white hover:underline">
            About
          </a>
          <a href="/services" className="text-white hover:underline">
            Services
          </a>
          <a href="/team" className="text-white hover:underline">
            Team
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contact
          </a>
        </nav>
        <div className="text-center md:text-right md:order-2">
          <p className="text-white text-sm mb-2">Get in Touch:</p>
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <a
              href="tel:+1234567890"
              className="text-white flex items-center hover:underline"
            >
              <FaPhone className="mr-1" />
              <span>(123) 456-7890</span>
            </a>
            <a
              href="mailto:info@weddingfilmographer.com"
              className="text-white flex items-center hover:underline"
            >
              <FaEnvelope className="mr-1" />
              <span>info@weddingfilmographer.com</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-white text-sm">
        ©2024 Wedding Filmographer | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
