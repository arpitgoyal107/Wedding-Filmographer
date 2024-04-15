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

const invitationcard = [
  "/images/Invitation card/1.jpeg",
  "/images/Invitation card/2.jpeg",
  "/images/Invitation card/3.jpeg",
  "/images/Invitation card/4.jpeg",
  "/images/Invitation card/5.jpeg",
  "/images/Invitation card/6.jpeg",
];

function Gallery() {
  return (
    <>
      <ScrollToTop />
      <section className="bg-white overflow-hidden">
        <div className="pt-[108px]"></div>
        <div className="h-[calc(100svh-108px)]">
          <Carousel events={events} />
        </div>

        <div className="bg-[#FDF0F0]">
          <div className="max-w-6xl mx-auto py-16 md:py-24 px-6">
            <img
              src="../images/decor/bride.png"
              alt=""
              className="w-32 md:w-48 mx-auto"
            />
            <h1 className="text-center font-normal text-xl md:text-2xl">
              Our Hearts
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden aspect-[2/3]"
                >
                  <Link to={`/our-work/${event.name}`}>
                    <div className="relative overflow-hidden aspect-[2/3]">
                      <img
                        src={event.url}
                        alt={event.name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-16 bg-black opacity-50"></div>
                    <div className="absolute inset-x-0 bottom-0 h-16 flex items-center justify-center text-white">
                      <p className="text-center">{event.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[#D14D72]">
          <div className="max-w-6xl mx-auto py-16 md:py-24 px-6">
            <div className="mb-8 md:mb-16 flex flex-col md:flex-row items-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Special Offer
              </h1>
              <p className="text-sm md:text-lg text-white self-center md:ml-2">
                ~ Exclusive Deal for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
              <div className="bg-white rounded-md shadow-xl p-6 md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#D14D72] mb-6 text-center underline">
                  Complimentary Gift with
                  <br />
                  Gold Package
                </h2>
                <div className="w-full mx-auto aspect-[5/7]">
                  <ImageCarousel images={invitationcard} />
                </div>
              </div>

              <div className="bg-white rounded-md shadow-xl p-6 md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#D14D72] mb-6 text-center underline">
                  Complimentary Gift with
                  <br />
                  Platinum Package
                </h2>
                <div className=" items-center justify-center">
                  <div className="aspect-w-16 aspect-h-9">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover rounded-md shadow-xl"
                    >
                      <source src="../video/hero.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold text-[#D14D72] mt-3 text-center">
                    +
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#D14D72] text-center">
                    Complimentary Gift with
                    <br />
                    Gold package
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#FDF0F0]">
          <div className="max-w-6xl mx-auto pt-16 pb-24 md:py-24">
            <div className="flex justify-center mb-8 md:mb-16">
              <div className="flex items-center">
                <img
                  src="../images/decor/instagramlogo.png"
                  alt=""
                  className="w-12 md:w-16 mx-auto"
                />
                <Link
                  to="https://www.instagram.com/weddingfilmographer"
                  className=" font-medium text-xl md:text-2xl pl-2"
                >
                  Instagram
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1">
              {instagramfeed.map((instagrampost, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden aspect-square"
                >
                  <Link to={`${instagrampost.igurl}`}>
                    <div className="relative overflow-hidden bg-[url('../images/decor/instabg.png')] bg-contain ">
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
