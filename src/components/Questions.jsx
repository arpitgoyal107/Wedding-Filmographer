import React from "react";
import ScrollToTop from "./SubComponents/ScrollToTop";
import ImageCarousel from "./SubComponents/ImageCarousel";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "How do I book you?",
    answer:
      "To book us for your wedding, you can fill out the contact form on our website or email us at weddingfilmographer@gmail.com. We will get back to you as soon as possible.",
  },
  {
    question: "How many weddings do you cover in a year?",
    answer:
      "We take up a limited number of weddings per year. We believe in quality over quantity. We want to give our best to each and every wedding we cover.",
  },
  {
    question: "What is your style of photography?",
    answer:
      "We are a team of photographers who love to capture candid moments and emotions. We believe in capturing the moments as they happen, without any interference. We also love to capture the details and decor of the wedding. We are always looking for the perfect light and the perfect frame to capture your love story.",
  },
  {
    question: "What is your pricing?",
    answer:
      "We have different packages for different requirements. We also have a team of photographers and cinematographers who can cover your wedding. We can also customize the packages according to your requirements. Please fill out the contact form on our website or email us at weddingfilmographer@gmail.com",
  },
  {
    question: "Do you travel for weddings?",
    answer:
      "Yes, we love to travel for weddings. We are based in Delhi and Haryana but we have covered weddings all over India. We have covered weddings in Goa, Rajasthan, Punjab, Himachal Pradesh, Madhya Pradesh, Maharashtra, Gujarat, and many more.",
  },
  {
    question: "How many images do you deliver?",
    answer:
      "We deliver around 50-100 images per function. We believe in quality over quantity.",
  },
  {
    question: "How long does it take to deliver the images?",
    answer: "We deliver the images within 3-4 weeks after the wedding.",
  },
  {
    question: "Do you provide videography services?",
    answer:
      "Yes, we provide videography services. We have a team of cinematographers who can cover your wedding.",
  },
  {
    question: "Do you provide albums?",
    answer:
      "Yes, we provide albums. We have different options for albums. You can choose from a variety of options.",
  },
  {
    question: "Do you provide drone services?",
    answer:
      "Yes, we provide drone services. We have a team of drone pilots who can cover your wedding.",
  },
  {
    question: "Do you provide pre-wedding shoots?",
    answer:
      "Yes, we provide pre-wedding shoots. We have a team of photographers who can cover your wedding.",
  },
  {
    question: "Do you provide wedding films?",
    answer:
      "Yes, we provide wedding films. We have a team of cinematographers who can cover your wedding.",
  },
];

const images = ["/images/section/7.jpg"];
const images2 = [
  "/images/section/8.jpg",
  "/images/section/9.jpg",
  "/images/section/10.jpg",
  "/images/section/11.jpg",
];

function Faq() {
  return (
    <>
      <ScrollToTop />
      <section className=" bg-[#FFFBF5] overflow-hidden">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className=" bg-[#FFFBF5] lg:pt-24 py-16">
          <div className=" max-w-7xl mx-auto px-6 lg:flex">
            <div className="lg:w-1/3 self-center lg:pr-6 overflow-hidden">
              <h1 className="text-[#D14D72] drop-shadow-md font-bold text-3xl md:text-6xl text-left">
                Frequently Asked Questions
              </h1>
              <p className=" text-base md:text-lg font-medium text-[#D14D72] mt-2 lg:mt-6 mb-12 lg:mb-0 self-center text-justify">
                Got a question? We're here to answer! if you don't see your
                question here, drop us a line at our{" "}
                <Link
                  to="/contact"
                  className=" font-semibold underline-offset-2 underline hover:text-[#d14d72b2]"
                >
                  Contact Page
                </Link>
              </p>
            </div>

            <div className=" lg:w-2/3 aspect-video max-h-[100svh-112px] lg:pl-6 mx-auto">
              <ImageCarousel images={images2} />
            </div>
          </div>
        </div>

        <div className="bg-[#FDF0F0] py-16 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="grid md:grid-cols-2 gap-6 rounded-md">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="p-6 rounded-sm border-2 border-[#FFFBF5]"
                >
                  <dt className="text-[#001d2c] drop-shadow-md font-bold text-justify text-base md:text-lg ">
                    {question.question}
                  </dt>
                  <dd className="text-[#001d2c] text-justify italic font-normal leading-relaxed text-sm md:text-base">
                    {question.answer}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
