import React from "react";

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

const ContactForm = () => {
  return (
    <>
      <form className="my-6" onSubmit={handleSubmit}>
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
            className=" w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
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
              className="w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
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
              className="w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
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
            className="w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
            placeholder="Message"
          />
          <p className="p-2 text-sm text-[#D14D72D7]">
            Any special requirements or anything you want to mention?
          </p>
        </div>

        <button
          type="submit"
          className="min-w-28 bg-white text-[#D14D72D7] border-[#D14D72D7] border-2 font-bold p-3 rounded-md mt-6 hover:bg-[#D14D72] hover:text-white transition ease-in-out duration-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
