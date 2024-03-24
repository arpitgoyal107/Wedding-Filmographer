import React from "react";
import ScrollToTop from "./SubComponents/ScrollToTop";
import "./styles.css";

const images = ["/images/section/7.jpg"];

function About() {
  return (
    <>
      <ScrollToTop />
      <section className="overflow-hidden">
        <div className="pt-[112px]"></div>

        <div className=" lg:h-[calc(100svh-112px)] w-screen grid lg:grid-cols-2 bg-[#FFDFDF] overflow-hidden ">
          <div className="overflow-hidden h-[calc(100svh-112px)]">
            <img
              src="/images/section/16.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="max-w-3xl lg:max-w-[40rem] self-center mx-auto lg:mr-auto lg:ml-0 px-6 my-8">
            <h1 className="text-3xl lg:text-6xl font-bold mb-6 text-[#001d2c]">
              Welcome to{" "}
              <span className="text-[#FF6B6B]">Wedding Filmographer</span>
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              We're not just filmmakers; we're storytellers. We immortalize
              emotions, weaving them into a cinematic tapestry you'll cherish.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mt-4 text-justify">
              Step into our world, where each frame paints your love story. With
              passion and attention to detail, we craft timeless memories.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mt-4 text-justify">
              Join us, where dreams become reality, and every "I do" is an
              eternal vow.
            </p>
          </div>
        </div>

        <div className="lg:h-[calc(100svh-112px)] w-screen grid lg:grid-cols-3 bg-[#FFFBF5] overflow-hidden">
          <div className="w-full bg-[#D14D72]">
            <div className="max-w-3xl lg:max-w-[40rem] flex justify-start lg:justify-end items-center mx-auto h-full lg:mr-0">
              <div className="text-center">
                <h1 className="text-3xl lg:text-6xl font-bold text-[#FFFBF5] uppercase p-6 verticaltext lg:rotate-180">
                  About Us
                </h1>
              </div>
            </div>
          </div>

          <div className="max-w-3xl lg:max-w-[40rem] self-center mx-auto px-6 my-8">
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
          <div className="max-w-[40rem] self-center mx-auto lg:mr-auto lg:ml-0 px-6 my-8">
            <h1 className="text-3xl lg:text-6xl font-bold mb-6 text-[#001d2c]">
              Let's Create{" "}
              <span className="text-[#FF6B6B]">Something Magical</span>
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              Your wedding day is one of the most important moments of your
              life. Let us help you preserve those memories in a way that
              captures the true essence of your love story. Get in touch with us
              today to learn more about our services and how we can bring your
              vision to life.
            </p>
          </div>
        </div>

        <div className="lg:h-[calc(100svh-112px)] w-screen grid lg:grid-cols-3 bg-[#FFFBF5] overflow-hidden">
          <div className="w-full bg-[#D14D72]">
            <div className="max-w-3xl lg:max-w-xl flex justify-start lg:justify-end items-center mx-auto h-full lg:mr-0">
              <div className="text-center">
                <h1 className="text-3xl lg:text-6xl font-bold text-[#FFFBF5] uppercase p-6 verticaltext lg:rotate-180">
                  Founder
                </h1>
              </div>
            </div>
          </div>

          <div className="max-w-3xl lg:max-w-[40rem] self-center mx-auto px-6 my-8">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#001d2c] ">
              Akash Singhal
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              With a keen eye, the ability to use gradients, light, and colors,
              stunning creativity, and the talent to capture good frames in
              adverse situations, Akash Singhal has what it takes to be a pro
              photographer & cinematographer.
            </p>
          </div>

          <div className="bg-[#FFABAB]">
            <div className="items-center p-8 lg:px-16 flex mx-auto lg:ml-0 h-full justify-center ">
              <img
                src="../images/Akash_Singhal.png"
                alt=""
                className="max-w-48  lg:max-w-full rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
