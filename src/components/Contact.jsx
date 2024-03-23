import React from "react";
import ScrollToTop from "./Card/ScrollToTop";
import ImageCarousel from "./Card/ImageCarousel";

const images = ["/images/section/13.jpg"];

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Email sent successfully");
      // Optionally, reset the form after successful submission
      e.target.reset();
    } else {
      console.error("Failed to send email");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

function Contact() {
  return (
    <>
      <ScrollToTop />
      <section className="bg-[#FFFBF5] overflow-hidden">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className="w-screen h-[calc(100svh-112px)] grid grid-cols-2">
          <div className="w-full h-full bg-[#D14D72]">
            <div className="max-w-[40rem] h-full bg-[#FFDFDF] mr-0 ml-auto relative">
              <div className="w-1/3 h-full bg-[#D14D72]"></div>

              <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
                <div className="w-full aspect-video">
                  <ImageCarousel images={images} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-[#FFDFDF] flex justify-center items-center">
            <div class="max-w-xl w-full md:ml-0 mx-auto md:mr-auto px-6">
              <div class="mb-16">
                <h1 class="font-bold text-sm md:text-lg text-[#d14d72d7] ">
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

        <div className="w-screen h-[calc(100svh-112px)] grid grid-cols-2">
          <div className="w-full h-full bg-[#FDF0F0] flex justify-center items-center">
            <div class="max-w-[40rem] w-full md:mr-0 mx-auto md:ml-auto px-6">
              <div className="mb-16">
                <h1 className="font-bold text-sm md:text-lg text-[#D14D72D7] ">
                  Contact Us
                </h1>
                <h1 className=" text-[#D14D72] drop-shadow-md font-bold text-3xl md:text-6xl md:mb-2">
                  Enquiry Form
                </h1>
                <h1 className="font-bold text-sm md:text-lg text-[#D14D72D7]">
                  Want to make us a part of your celebration?
                </h1>
              </div>

              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Your Name*"
                    className=" w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                    required
                  />
                  <p className="p-2 text-sm text-[#D14D72D7]">
                    Please input your name.
                  </p>
                </div>

                <div className=" grid grid-cols-2 gap-12 mt-3">
                  <div className="flex flex-col ">
                    <label for="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="tel"
                      id="tel"
                      placeholder="Contact Number*"
                      className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                      required
                    />
                    <p className="p-2 text-sm text-[#D14D72D7]">
                      Please input a phone number.
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <label for="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email Address*"
                      className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                      required
                    />
                    <p className="p-2 text-sm text-[#D14D72D7]">
                      Please input your email address.
                    </p>
                  </div>
                </div>

                <div class="flex flex-col mt-3">
                  <label for="Event_Details" className="hidden">
                    Event Details
                  </label>
                  <textarea
                    autoComplete="off"
                    name="message"
                    id="Event_Details"
                    rows="2"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                    placeholder="Message"
                  />
                  <p className="p-2 text-sm text-[#D14D72D7]">
                    Any special requirements or anything you want to mention?
                  </p>
                </div>

                <button
                  type="submit"
                  className="min-w-28 bg-white text-[#D14D72D7] border-[#624B1480] border-2 font-bold p-3 rounded-md mt-6 hover:bg-[#624B14] hover:text-white transition ease-in-out duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="w-full h-full bg-[#FFABAB]">
            <div className="max-w-[40rem] h-full bg-[#FDF0F0] ml-0 mr-auto relative">
              <div className="w-1/3 h-full bg-[#FFABAB] mr-0 ml-auto"></div>

              <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
                <div className="w-full aspect-video">
                  <ImageCarousel images={images} />
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
