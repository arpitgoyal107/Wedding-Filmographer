import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./../SubComponents/ContactForm";

function Footer() {
  return (
    <footer className="bg-[#001d2c] text-[#FFFBF5] py-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Get in touch */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
          <hr className="w-16 border-gray-500 mb-4" />
        </div>
        {/* Form */}
        <ContactForm />
        {/* <form className="col-span-1 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="px-4 py-3 rounded-lg bg-white text-black"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="px-4 py-3 rounded-lg bg-white text-black"
            required
          />
          <textarea
            placeholder="Message*"
            className="px-4 py-3 rounded-lg bg-white text-black"
            required
          ></textarea>
          <button className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300">
            Send Message
          </button>
        </form> */}
        {/* Social icons */}
        <div className="col-span-1 flex justify-center items-center space-x-4">
          <Link to="#">
            <img src="/images/social/facebook.svg" alt="Facebook" />
          </Link>
          <Link to="#">
            <img src="/images/social/instagram.svg" alt="Instagram" />
          </Link>
          <Link to="#">
            <img src="/images/social/twitter.svg" alt="Twitter" />
          </Link>
          <Link to="#">
            <img src="/images/social/youtube.svg" alt="YouTube" />
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <p className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} Wedding Filmographer. All rights
        reserved. | Designed by{" "}
        <Link
          to="https://www.linkedin.com/in/arpitgoyal107/"
          className="underline hover:text-red-500"
        >
          Arpit Goyal
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
