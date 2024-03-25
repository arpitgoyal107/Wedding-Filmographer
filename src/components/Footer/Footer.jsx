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
    <footer>
      <section className="bg-gradient-to-l from-[#D14D72] via-[#FFABAB] to-[#D14D72] text-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 px-6 py-6 overflow-hidden relative z-[1] gap-4">
          <div className="">
            <div className="w-52 mx-auto md:ml-0 ">
              <img src="/images/White.png" alt="" />
              <p className=" text-sm text-center pt-1 pr-1">
                We're here to win hearts
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <h1 className="text-lg md:text-3xl font-bold text-center">
              Social Media
            </h1>
            <div className="flex flex-row justify-center space-x-4 md:space-x-2 lg:space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full shadow-md"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full shadow-md"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-l from-[#FFABAB] from-10% to-[#D14D72] p-3 rounded-full shadow-md"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <h1 className="text-lg md:text-3xl font-bold text-center md:text-right">
              Get in touch
            </h1>
            <div className="flex justify-center md:justify-end">
              <a
                href="tel:+917696331130"
                className="flex text-white hover:underline mt-1 text-sm"
              >
                <FaPhone className="mr-2 mt-1" />
                <span>+91-76963-31130</span>
              </a>
            </div>
            <div className=" flex justify-center md:justify-end">
              <a
                href="mailto:weddingfilmographer@gmail.com"
                className="flex text-white hover:underline mt-1 text-sm md:text-base"
              >
                <FaEnvelope className="mr-2 mt-1" />
                <span className=" break-all">
                  weddingfilmographer@gmail.com
                </span>
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
      </section>
      <section className="bg-[#D14D72] text-white">
        <div className="py-2 max-w-7xl px-6 mx-auto">
          <p className="text-center text-white text-sm md:text-base">
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
      </section>
    </footer>
  );
};

export default Footer;
