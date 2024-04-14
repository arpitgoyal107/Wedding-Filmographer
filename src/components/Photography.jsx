import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./SubComponents/ScrollToTop";
import ImageCarousel from "./SubComponents/ImageCarousel";
import Carousel from "./SubComponents/Carousel";

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

const images = ["/images/section/6.jpg"];

const instagramfeed = [
  {
    url: "/images/InstagramFeed/1.jpg",
    igurl:
      "https://www.instagram.com/p/C4JCU3vxcQP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/2.jpg",
    igurl:
      "https://www.instagram.com/reel/C4JBNFORecM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/3.jpg",
    igurl:
      "https://www.instagram.com/p/C4Ilv1LPjht/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/4.jpg",
    igurl:
      "https://www.instagram.com/p/C376l78xr-n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/5.jpg",
    igurl:
      "https://www.instagram.com/p/C3756mqxV-V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/6.jpg",
    igurl:
      "https://www.instagram.com/p/C375XDMRZnv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/7.jpg",
    igurl:
      "https://www.instagram.com/p/C2jby4bRprk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/8.jpg",
    igurl:
      "https://www.instagram.com/reel/C2o-V6FROZg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/9.jpg",
    igurl:
      "https://www.instagram.com/p/C2jan4lxlB1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/10.jpg",
    igurl:
      "https://www.instagram.com/p/CyQw4nVx8Cy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/11.jpg",
    igurl:
      "https://www.instagram.com/reel/CyLkbgQKvFg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/12.jpg",
    igurl:
      "https://www.instagram.com/p/CyQv09mR1DI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/13.jpg",
    igurl:
      "https://www.instagram.com/p/Cvj1ihVRZAb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/14.jpg",
    igurl:
      "https://www.instagram.com/p/CvZvX4VxpSv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/15.png",
    igurl:
      "https://www.instagram.com/p/CvSX95mRruw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/16.jpg",
    igurl:
      "https://www.instagram.com/p/CtYZ-txP3eJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/17.jpg",
    igurl:
      "https://www.instagram.com/p/CtYBPO2vYA_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/18.jpg",
    igurl:
      "https://www.instagram.com/p/CtWRXqovtr8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/19.jpg",
    igurl:
      "https://www.instagram.com/p/CqaiYNnSTDp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/20.jpg",
    igurl:
      "https://www.instagram.com/p/CqaiED7yNJD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    url: "/images/InstagramFeed/21.jpg",
    igurl:
      "https://www.instagram.com/p/CqagNvTyDuS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

function Gallery() {
  return (
    <>
      <ScrollToTop />
      <section className="bg-[#FDF0F0] overflow-hidden">
        <div className="pt-[108px]"></div>
        <div className=" h-[calc(100svh-108px)]">
          <Carousel events={events} />
        </div>

        <div className=" max-w-6xl mx-auto my-24 md:my-32 px-6">
          <img
            src="../images/decor/bride.png"
            alt=""
            className=" w-32 md:w-48 mx-auto"
          />
          <h1 className="text-center font-normal text-xl md:text-2xl italic font-serif ">
            Our Hearts
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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

        <div className="bg-[#D14D72]">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className=" text-2xl md:text-3xl font-semibold text-center py-3 md:py-5 tracking-wider text-white capitalize">
              we're here to win hearts.
            </h1>
          </div>
        </div>

        <div className=" bg-white">
          <div className="max-w-6xl mx-auto py-24 md:py-32">
            <div className=" flex justify-center">
              <div className=" flex items-center mb-12">
                <img
                  src="../images/decor/instagramlogo.png"
                  alt=""
                  className=" w-12 md:w-16 mx-auto"
                />
                <h1 className="text-center font-medium text-xl md:text-2xl font-serif italic pl-2">
                  Instagram
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1">
              {instagramfeed.map((instagrampost) => (
                <div
                  key={instagrampost.url}
                  className=" relative overflow-hidden aspect-square"
                >
                  <Link to={`${instagrampost.igurl}`}>
                    <div className=" relative overflow-hidden bg-[url('../images/decor/instabg.png')] bg-contain ">
                      <img
                        src={instagrampost.url}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 hover:cursor-pointer hover:opacity-50"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
