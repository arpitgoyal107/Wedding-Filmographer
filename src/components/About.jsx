import React from "react";
import ScrollToTop from "./Card/ScrollToTop";
import "./styles.css";

const images = ["/images/section/7.jpg"];

function About() {
  return (
    <>
      <ScrollToTop />
      <section className=" overflow-hidden">
        <div className="pt-[112px]"></div>

        <div className=" lg:h-[calc(100svh-112px)] w-screen grid lg:grid-cols-2 bg-[#FFDFDF] overflow-hidden ">
          <div className="overflow-hidden h-[calc(100svh-112px)]">
            <img
              src="/images/section/16.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="max-w-xl self-center mx-auto lg:mr-auto lg:ml-0 px-6 my-8">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-[#001d2c]">
              Welcome to{" "}
              <span className="text-[#FF6B6B]">Wedding Filmographer</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              We're not just filmmakers; we're storytellers. We immortalize
              emotions, weaving them into a cinematic tapestry you'll cherish.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
              Step into our world, where each frame paints your love story. With
              passion and attention to detail, we craft timeless memories.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
              Join us, where dreams become reality, and every "I do" is an
              eternal vow.
            </p>
          </div>
        </div>

        <div className="lg:h-[calc(100svh-112px)] w-screen grid lg:grid-cols-3 bg-[#FFFBF5] overflow-hidden">
          <div className="w-full h-full bg-[#D14D72]">
            <div className="relative h-full w-full min-h-16 max-w-xl mx-auto">
              <h1 className="text-3xl lg:text-7xl font-bold text-[#FFFBF5] flex uppercase  absolute right-0 px-6 py-1 top-0 bottom-0 self-center verticaltext lg:rotate-180">
                About Us
              </h1>
            </div>
          </div>

          <div className="max-w-xl mx-auto w-full self-center p-8 my-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001d2c] mb-4 ">
              Experiences Beyond Imagining
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              Our journey has taken us worldwide, capturing love stories from
              Bali to the Alps. Our films resonate globally, showcasing love in
              its purest form.
            </p>

            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001d2c] mb-4 mt-8">
              Crafting Memories, Not Just Videos
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              We craft unique cinematic experiences that capture the essence of
              your relationship. With state-of-the-art equipment and passionate
              storytellers, we weave laughter, tears, and everything in between
              into beautiful narratives.
            </p>
          </div>
          <div className="overflow-hidden h-[calc(100svh-112px)] bg-[#FFABAB]">
            <img
              src="/images/section/6.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="h-[calc(100svh-112px)] w-screen grid grid-cols-2 bg-[#FDF0F0]">
          <div className="overflow-hidden h-full">
            <img
              src="/images/section/4.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="max-w-xl self-center mx-auto lg:mr-auto lg:ml-0 px-6 my-8">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-[#001d2c]">
              Let's Create{" "}
              <span className="text-[#FF6B6B]">Something Magical</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Your wedding day is one of the most important moments of your
              life. Let us help you preserve those memories in a way that
              captures the true essence of your love story. Get in touch with us
              today to learn more about our services and how we can bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
