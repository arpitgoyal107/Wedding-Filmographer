import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./Card/ScrollToTop";
import ImageCarousel from "./Card/ImageCarousel";

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

const images = [
  "/images/section/7.jpg",
  "/images/section/9.jpg",
  "/images/section/8.jpg",
  "/images/section/6.jpg",
];

const instagramfeed = [
  {
    url: "/images/InstagramFeed/1.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/2.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/3.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/4.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/5.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/6.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/7.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/8.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/9.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/10.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/11.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/12.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/13.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/14.jpg",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
  {
    url: "/images/InstagramFeed/15.png",
    igurl: "https://www.instagram.com/p/CU3z3z3L3Zz/",
  },
];

function Gallery() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-[#FFFBF5]">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className=" max-w-7xl mx-auto mt-24 mb-6 p-6">
          <img
            src="../images/decor/bride.png"
            alt=""
            className=" w-48 mx-auto"
          />
          <h1 className="text-center font-medium text-2xl italic font-serif mb-8">
            Our Hearts
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.name}
                className=" relative overflow-hidden aspect-[2/3]"
              >
                <Link to={`/photography/${event.name}`}>
                  <div className=" relative overflow-hidden aspect-[2/3]">
                    <img
                      src={event.url}
                      alt={event.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-black opacity-50"></div>
                  <div className="absolute inset-x-0 bottom-0 h-16 flex items-center justify-center text-white">
                    <p className=" text-center">{event.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <img src="/images/decor/tagline.png" alt="" />

        <div className="pt-20 pb-32 max-w-7xl px-6 mx-auto">
          <div className=" flex justify-center mb-12">
            <div className=" flex items-center">
              <img
                src="../images/decor/instagramlogo.png"
                alt=""
                className=" w-16 mx-auto"
              />
              <h1 className="text-center font-medium text-2xl font-serif italic pl-2">
                Instagram
              </h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
            {instagramfeed.map((instagrampost) => (
              <div
                key={instagrampost.url}
                className=" relative overflow-hidden aspect-square"
              >
                <Link to={`${instagrampost.igurl}`}>
                  <div className=" relative overflow-hidden bg-black">
                    <img
                      src={instagrampost.url}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 hover:cursor-pointer hover:opacity-50"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className=" justify-center flex mt-6">
            <img src="/images/decor/border.png" alt="#FFDFDF" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
