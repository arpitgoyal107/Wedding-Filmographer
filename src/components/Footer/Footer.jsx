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
    <footer className="bg-gradient-to-l from-[#D14D72] via-[#FFABAB] to-[#D14D72] text-white relative">
      <div className=" max-w-7xl mx-auto overflow-hidden p-3">
        <div className="w-full flex  lg:flex-row flex-wrap justify-between">
          <div className="py-6 basis-1/4">
            <img src="/images/White.png" className="px-6" alt="" />
          </div>

          <div className="py-6 basis-1/4">
            <h1 className="text-3xl font-bold text-center ">Social Media</h1>
            <div className="flex justify-center space-x-4 mt-2">
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
          </div>

          <div className="py-6 text-right basis-1/4">
            <h1 className="text-3xl font-bold">Get in touch:</h1>
            <a
              href="tel:+917696331130"
              className="flex justify-end text-white hover:underline mt-2"
            >
              <FaPhone className="mr-2 mt-1" />
              <span>+91-76963-31130</span>
            </a>
            <a
              href="mailto:weddingfilmographer@gmail.com"
              className="flex justify-end text-white hover:underline mt-2"
            >
              <FaEnvelope className="mr-2 mt-1" />
              <span>weddingfilmographer@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-center text-white text-base">
            &copy; 2024 Wedding Filmographer | All Rights Reserved | Crafted
            with &hearts; by{" "}
            <a
              href="https://www.linkedin.com/in/arpitgoyal107/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Arpit Goyal
            </a>
          </p>
        </div>
      </div>
      <div className="absolute top-0 h-full right-0 opacity-40">
        <img src="/images/gold-rings.png" className="h-full" alt="" />
      </div>
      {/* <div className="absolute top-0 h-full left-0 opacity-40 rotate-180">
        <img src="/images/gold-rings.png" className="h-full" alt="" />
      </div> */}
    </footer>
  );
};

export default Footer;
