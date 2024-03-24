import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./SubComponents/ImageCarousel";
import ScrollToTop from "./SubComponents/ScrollToTop";
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
      <div className=" overflow-hidden bg-[#FFFBF5]">
        <section className="relative z-[1]">
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
            <div className="grid md:grid-cols-2 mb-16 md:mb-32 gap-6">
              <div className=" self-center">
                <h1 className=" font-bold text-3xl md:text-6xl text-left ">
                  We Are Passionate In Creating Truely Unique Wedding
                  Experiences.
                </h1>
                <h1 className=" font-semibold text-sm md:text-base py-3 tracking-wider">
                  Check out our short history and why we've decided to get into
                  the wedding filmography business.
                </h1>
                <Link
                  to="/about-us"
                  className="btn underline text-sm md:text-base "
                >
                  Read More
                </Link>
              </div>
              <div className="flex justify-center md:justify-end  self-center">
                <img
                  src="../images/decor/hero.jpg"
                  alt=""
                  className=" w-2/3 shadow-2xl drop-shadow-2xl "
                />
              </div>
            </div>

            <div className=" grid md:grid-cols-2 gap-6">
              <iframe
                className=" w-full aspect-video"
                src="https://www.youtube.com/embed/pVqzoSmUtzs?si=XktCi42nsT9eZx9J&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className=" w-full aspect-video"
                src="https://www.youtube.com/embed/_pFh8SSbCac?si=ARNJO1bkNeXWSP10&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className=" w-full aspect-video"
                src="https://www.youtube.com/embed/uSeYihKcwa0?si=MAte13oaacX_6EZM&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className=" w-full aspect-video"
                src="https://www.youtube.com/embed/0cMwutOMtMc?si=zXeRbYvLKYjfWEWn&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className=" w-full aspect-video"
                src="https://www.youtube.com/embed/-7WHueaMYsM?si=6aVZkLw5MC2x75vT&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className=' bg-[url("/../images/section/1.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-[100vh]'></div>
        </section>
        <div className="mt-[-112px] ">
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default Home;
