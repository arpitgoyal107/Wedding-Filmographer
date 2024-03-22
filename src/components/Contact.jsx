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
      <section className="bg-[#DED0B6] overflow-hidden">
        <div className="pt-[112px]"></div>
        <div className=" h-[calc(100svh-112px)]">
          <ImageCarousel images={images} />
        </div>

        <div className="grid md:grid-cols-2">
          <div className=" max-w-xl w-full md:ml-auto mx-auto md:mr-0 my-16 md:my-32 px-6">
            <div className="mb-16">
              <h1 className="font-bold text-sm md:text-lg text-[#624b1480] ">
                Contact Us
              </h1>
              <h1 className=" text-[#624B14] drop-shadow-md font-bold text-3xl md:text-6xl md:mb-2">
                We're here for you
              </h1>
              <h1 className="font-bold text-sm md:text-lg text-[#624b1480]">
                We will be GLAD to be a part of your SPECIAL DAY!!
              </h1>
            </div>

            <div className="my-6">
              <a
                href="tel:+917696331130"
                className="font-bold text-base md:text-xl text-[#624B14]"
              >
                +91-76963-31130
              </a>
              <p className="py-1 text-sm md:text-base font-bold text-[#624b1480] tracking-wide">
                Questions? Call Us!
              </p>
            </div>

            <hr className="border-t-2 border-[#FFFBF5]" />

            <div className="my-6">
              <a
                href="mailto:weddingfilmographer@gmail.com"
                className="font-bold text-base md:text-xl text-[#624B14]"
              >
                weddingfilmographer@gmail.com
              </a>
              <p className="py-1 text-sm md:text-base font-bold text-[#624b1480] tracking-wide">
                Drop us a line!
              </p>
            </div>

            <hr className="border-t-2 border-[#FFFBF5]" />

            <div className="my-6">
              <p className="font-bold text-base md:text-xl text-[#624B14]">
                Mon to Sat - 11:00 to 20:00
              </p>
              <p className="py-1 text-sm md:text-base font-bold text-[#624b1480] tracking-wide">
                Our common business hours
              </p>
            </div>
          </div>

          <div className="bg-[#FFFBF5] ">
            <div className="max-w-xl w-full mx-auto md:ml-0 md:mr-auto my-16 md:my-32 px-6">
              <div className="mb-16">
                <h1 className="font-bold text-sm md:text-lg text-[#624b1480] ">
                  Contact Us
                </h1>
                <h1 className=" text-[#624B14] drop-shadow-md font-bold text-3xl md:text-6xl md:mb-2">
                  Enquiry Form
                </h1>
                <h1 className="font-bold text-sm md:text-lg text-[#624b1480]">
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
                  <p className="p-2 text-sm text-[#624b1480]">
                    This field is required. Please input your name.
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
                    <p className="p-2 text-sm text-[#624b1480]">
                      This field is required. Please input a phone number.
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
                    <p className="p-2 text-sm text-[#624b1480]">
                      This field is required. Please input a valid email
                      address.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-3">
                  <label for="Event_Dates" className="hidden">
                    Event Details
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="Event_Dates"
                    id="Event_Dates"
                    placeholder="Dates & Events*"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                    required
                  />
                  <p className="p-2 text-sm text-[#624b1480]">
                    This field is required. Please enter text.
                  </p>
                </div>

                <div className="flex flex-col mt-3">
                  <label for="Location" className="hidden">
                    Venue
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="Location"
                    id="Location"
                    placeholder="City/Venue*"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                    required
                  />
                  <p className="p-2 text-sm text-[#624b1480]">
                    This field is required. Please enter text.
                  </p>
                </div>

                <div class="flex flex-col mt-3">
                  <label for="Event_Details" className="hidden">
                    Event Details
                  </label>
                  <textarea
                    autoComplete="off"
                    name="message"
                    id="Event_Details"
                    rows="1"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-[#624b1480] text-[#624B14] font-semibold focus:border-[#624B14] focus:outline-none"
                    placeholder="Event Details"
                  />
                  <p className="p-2 text-sm text-[#624b1480]">
                    Any special requirements or anything you want to mention?
                  </p>
                </div>

                <button
                  type="submit"
                  className="min-w-28 bg-white text-[#624B1480] border-[#624B1480] border-2 font-bold p-3 rounded-md mt-6 hover:bg-[#624B14] hover:text-white transition ease-in-out duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
