import React from "react";
import ScrollToTop from "./SubComponents/ScrollToTop";
import ImageCarousel from "./SubComponents/ImageCarousel";
import ContactForm from "./SubComponents/ContactForm";

const images = ["/images/section/14.jpg"];

const images2 = ["/images/section/17.jpg", "/images/section/4.jpg"];

const images3 = ["/images/section/18.jpg", "/images/section/16.jpg"];

function Contact() {
  return (
    <>
      <ScrollToTop />
      <section className="bg-[#FFFBF5] overflow-hidden">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className="w-screen lg:h-[calc(100svh-112px)] grid lg:grid-cols-2">
          <div className="w-full h-full bg-[#D14D72]">
            <div className="max-w-[40rem] h-full bg-[#FFDFDF] relative lg:mr-0 lg:ml-auto mx-auto">
              <div className="absolute z-0 left-0 w-1/3 h-full bg-[#D14D72]"></div>

              <div className="w-full flex h-full justify-center items-center relative z-[1] ">
                <div className="w-full aspect-video my-12 mx-6 rounded-md overflow-hidden bg-[#FFDFDF]">
                  <ImageCarousel images={images2} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-[#FFDFDF] flex justify-center items-center">
            <div class="max-w-[40rem] w-full mx-auto lg:ml-0 lg:mr-auto px-6">
              <div class="mb-16">
                <h1 class="font-bold text-sm md:text-lg text-[#d14d72d7] mt-6">
                  Contact Us
                </h1>
                <h1 class="text-[#D14D72] drop-shadow-md font-bold text-3xl md:text-6xl md:mb-2">
                  We're here for you
                </h1>
                <h1 class="font-bold text-sm md:text-lg text-[#D14D72d7]">
                  We will be GLAD to be a part of your SPECIAL DAY!!
                </h1>
              </div>

              <div class="my-6">
                <a
                  href="tel:+917696331130"
                  class="font-bold text-base md:text-xl text-[#D14D72]"
                >
                  +91-76963-31130
                </a>
                <p class="py-1 text-sm md:text-base font-bold text-[#D14D72D7] tracking-wide">
                  Questions? Call Us!
                </p>
              </div>

              <hr class="border-t-2 border-[#FFFBF5]" />

              <div class="my-6">
                <a
                  href="mailto:weddingfilmographer@gmail.com"
                  class="font-bold text-base md:text-xl text-[#D14D72]"
                >
                  weddingfilmographer@gmail.com
                </a>
                <p class="py-1 text-sm md:text-base font-bold text-[#D14D72D7] tracking-wide">
                  Drop us a line!
                </p>
              </div>

              <hr class="border-t-2 border-[#FFFBF5]" />

              <div class="my-6">
                <p class="font-bold text-base md:text-xl text-[#D14D72]">
                  Mon to Sat - 11:00 to 20:00
                </p>
                <p class="py-1 text-sm md:text-base font-bold text-[#D14D72D7] tracking-wide">
                  Our common business hours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen lg:h-[calc(100svh-112px)] grid lg:grid-cols-2">
          <div className="w-full h-full bg-[#FDF0F0] flex justify-center items-center">
            <div class="max-w-[40rem] w-full mx-auto lg:mr-0 lg:ml-auto px-6">
              <div className="mb-16">
                <h1 className="font-bold text-sm md:text-lg text-[#D14D72D7] mt-6">
                  Contact Us
                </h1>
                <h1 className=" text-[#D14D72] drop-shadow-md font-bold text-3xl md:text-6xl md:mb-2">
                  Enquiry Form
                </h1>
                <h1 className="font-bold text-sm md:text-lg text-[#D14D72D7]">
                  Want to make us a part of your celebration?
                </h1>
              </div>

              <ContactForm />
            </div>
          </div>

          <div className="w-full h-full bg-[#FFABAB]">
            <div className="max-w-[40rem] h-full bg-[#FDF0F0] relative lg:ml-0 lg:mr-auto mx-auto">
              <div className=" absolute z-0 right-0 w-1/3 h-full bg-[#FFABAB] "></div>

              <div className=" h-full w-full flex justify-center items-center relative z-[1]">
                <div className="w-full aspect-video my-12 mx-6 rounded-md overflow-hidden bg-[#FDF0F0]">
                  <ImageCarousel images={images3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
