import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./SubComponents/ImageCarousel";
import ScrollToTop from "./SubComponents/ScrollToTop";
import Gallery from "./Photography";
import Carousel from "./SubComponents/Carousel";

const invitationcard = [
  "/images/Invitation card/1.jpeg",
  "/images/Invitation card/2.jpeg",
  "/images/Invitation card/3.jpeg",
  "/images/Invitation card/4.jpeg",
  "/images/Invitation card/5.jpeg",
  "/images/Invitation card/6.jpeg",
];
function Home() {
  return (
    <>
      <ScrollToTop />

      <section className="overflow-hidden bg-white">
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

        <div className="bg-[#FDF0F0]">
          <div className="py-16 md:py-32 max-w-6xl px-6 mx-auto">
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
        </div>

        <div className=' bg-[url("/../images/section/1.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-[100vh]'></div>
      </section>

      <section className="bg-[#D14D72] relative z-[2]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white">Exclusive Deals</h1>
            <p className="text-lg text-white">Exclusively for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-semibold text-[#D14D72] mb-4 text-center">
                Gold Package
              </h2>
              <div className="w-4/5 mx-auto aspect-[5/7]">
                <ImageCarousel images={invitationcard} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-semibold text-[#D14D72] mb-4 text-center">
                Platinum Package
              </h2>
              <div className=" items-center justify-center">
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover rounded-lg shadow-xl"
                  >
                    <source src="../video/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-3xl font-semibold text-[#D14D72] mr-2 text-center">
                  +
                  <br />
                  Gold package
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[-108px] ">
        <Gallery />
      </div>
    </>
  );
}

export default Home;
