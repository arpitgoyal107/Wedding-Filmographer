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
    <>
      <footer className="bg-gradient-to-l from-[#D14D72] via-[#FFABAB] to-[#D14D72] text-white relative">
        <div className=" max-w-7xl mx-auto overflow-hidden p-3">
          <div className="w-full flex flex-row flex-wrap justify-center lg:justify-between">
            <div className="py-6 basis-1/2 lg:basis-1/3 order-1 flex flex-col self-center">
              <img src="/images/White.png" className="px-6 max-w-64" alt="" />
            </div>

            <div className=" flex flex-row lg:flex-col py-6 lg:basis-1/3 order-3 lg:order-2">
              <h1 className="text-lg md:text-3xl font-bold text-center flex  self-center pt-1 pr-1">
                Social Media:
              </h1>
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

            <div className="py-6 text-center md:text-right basis-1/2 lg:basis-1/3 order-2 lg:order-3">
              <h1 className="text-lg md:text-3xl font-bold">Get in touch:</h1>
              <a
                href="tel:+917696331130"
                className="flex justify-center md:justify-end text-white hover:underline mt-1 md:mt-2 text-sm md:text-base"
              >
                <FaPhone className="mr-2 mt-1" />
                <span>+91-76963-31130</span>
              </a>
              <a
                href="mailto:weddingfilmographer@gmail.com"
                className="flex justify-center md:justify-end text-white hover:underline mt-1 md:mt-2 text-sm md:text-base"
              >
                <FaEnvelope className="mr-2 mt-1" />
                <span>weddingfilmographer@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-full right-0 opacity-40">
          <img
            src="/images/gold-rings.png"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </footer>
      <footer>
        <div className="py-2 bg-[#D14D72] text-white">
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
      </footer>
    </>
  );
};

export default Footer;
