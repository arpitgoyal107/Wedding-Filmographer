import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./Card/ImageCarousel";
import ScrollToTop from "./Card/ScrollToTop";
import Gallery from "./Photography";

const events = [
  {
    url: "/images/Lavneet and Shweta Wedding/VEER3399 copy.jpg",
    name: "Lavneet & Shweta",
  },
  {
    url: "/images/Piyush and Tripti Wedding/Layout/22.jpg",
    name: "Piyush & Tripti",
  },
  {
    url: "/images/Harshit/6.jpg",
    name: "Harshit & Anjali",
  },
  {
    url: "/images/Rakhi and Hemant/ss1.png",
    name: "Hemant & Rakhi",
  },
  {
    url: "/images/Harshit/6.jpg",
    name: "Harshit & Anjali",
  },
];

function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-[#FFFBF5] relative z-[1]">
        <div className=" w-screen h-svh overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover h-full w-full"
          >
            <source src="../video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="py-16 md:py-32 max-w-7xl px-6 mx-auto">
          <div className=" md:max-w-[900px] mx-auto pb-20">
            <h1 className=" font-bold text-3xl md:text-6xl text-center leading-[1.1]">
              We Are Passionate In Creating
              <br />
              Truely Unique Wedding
              <br />
              Experiences.
            </h1>
            <h1 className=" font-semibold text-sm md:text-base text-center py-3 md:w-3/5 tracking-wider mx-auto">
              Check out our short history and why we've decided to get into the
              wedding filmography business.
            </h1>
          </div>

          <div className=" md:columns-2 gap-4">
            <div className="mb-4 relative">
              <img
                src="../video/thumbnails/1.jpg"
                alt=""
                className="hover:cursor-pointer "
              />
              <div className="absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50"></div>
              <img
                src="../images/decor/playbutton.png"
                alt=""
                className=" h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer "
              />
            </div>
            <div className="mb-4 relative">
              <img
                src="../video/thumbnails/2.jpg"
                alt=""
                className="hover:cursor-pointer "
              />
              <div className="absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50"></div>
              <img
                src="../images/decor/playbutton.png"
                alt=""
                className=" h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer "
              />
            </div>
            <div className="mb-4 relative">
              <img
                src="../video/thumbnails/3.jpg"
                alt=""
                className="hover:cursor-pointer "
              />
              <div className="absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50"></div>
              <img
                src="../images/decor/playbutton.png"
                alt=""
                className=" h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer "
              />
            </div>
            <div className="mb-4 relative">
              <img
                src="../video/thumbnails/4.jpg"
                alt=""
                className="hover:cursor-pointer "
              />
              <div className="absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50"></div>
              <img
                src="../images/decor/playbutton.png"
                alt=""
                className=" h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer "
              />
            </div>
          </div>
        </div>

        <div className=' bg-[url("/../images/section/1.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-svh'></div>
      </div>
      <div className="mt-[-112px] ">
        <Gallery />
      </div>
    </>
  );
}

export default Home;
