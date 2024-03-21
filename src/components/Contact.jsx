import React from "react";
import FormCard from "./Card/FormCard";
import ScrollToTop from "./Card/ScrollToTop";
import ImageCarousel from "./Card/ImageCarousel";

const images = ["/images/section/13.jpg"];
function Contact() {
  return (
    <>
      <ScrollToTop />
      <section className="bg-[#DED0B6] overflow-hidden">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className="grid md:grid-cols-2">
          <div className=" max-w-xl w-full ml-auto mr-0 my-16 md:my-32 px-6">
            <div className="mb-16">
              <h1 className="font-bold text-xl ml-1">Contact Us</h1>
              <h1 className=" text-[#624B14] drop-shadow-md font-bold text-3xl md:text-6xl mb-2">
                We're here for you
              </h1>
              <h1 className="font-bold text-xl ml-1">
                We will be GLAD to be a part of your SPECIAL DAY!!
              </h1>
            </div>

            <div className="">
              <p className=" text-xl font-semibold text-gray-500 leading-relaxed py-6">
                "Want to make us a part of your celebration ?"
              </p>
              <hr className=" border-t-2" />

              <div className="py-6">
                <a
                  href="tel:+917696331130"
                  className="py-1 text-xl font-semibold text-gray-500"
                >
                  +91-76963-31130
                </a>
                <p className="py-1 text-base text-gray-400 tracking-wide">
                  Questions? Call Us!
                </p>
              </div>
              <hr className="border-t-2" />

              <div className="py-6">
                <a
                  href="mailto:weddingfilmographer@gmail.com"
                  className="py-1 text-xl font-semibold text-gray-500"
                >
                  weddingfilmographer@gmail.com
                </a>
                <p className="py-1 text-base text-gray-400 tracking-wide">
                  Drop us a line!
                </p>
              </div>
              <hr className="border-t-2" />

              <div className="py-6">
                <p className="py-1 text-xl font-semibold text-gray-500">
                  Mon to Sat - 11:00 to 20:00
                </p>
                <p className="py-1 text-base text-gray-400 tracking-wide">
                  Our common business hours
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFBF5] ">
            <div className="max-w-xl w-full ml-0 mr-auto my-16 md:my-32 px-6">
              <div className="mb-16">
                <h1 className="font-bold text-xl ml-1">Contact Us</h1>
                <h1 className=" text-[#624B14] drop-shadow-md font-bold text-3xl md:text-6xl mb-2">
                  Enquiry Form
                </h1>
                <h1 className="font-bold text-xl ml-1">
                  Want to make us a part of your celebration?
                </h1>
              </div>
              <FormCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
