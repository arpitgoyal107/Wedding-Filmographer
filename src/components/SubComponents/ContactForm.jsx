import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent continuous clicking

    try {
      setIsSubmitting(true);
      // Show sending toast
      toast.info("Sending message...");
      const response = await axios.post(
        "http://localhost:3001/send-email",
        formData
      );
      // Show success toast
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        tel: "",
        message: "",
      });
    } catch (err) {
      // Show error toast
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="my-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Full Name
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Your Name*"
            className="w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <p className="p-2 text-sm text-[#D14D72D7]">
            Please input your name.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-3">
          <div className="flex flex-col ">
            <label htmlFor="tel" className="hidden">
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
              value={formData.tel}
              onChange={handleChange}
            />
            <p className="p-2 text-sm text-[#D14D72D7]">
              Please input a phone number.
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="hidden">
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
              value={formData.email}
              onChange={handleChange}
            />
            <p className="p-2 text-sm text-[#D14D72D7]">
              Please input your email address.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="message" className="hidden">
            Event Details
          </label>
          <textarea
            autoComplete="off"
            name="message"
            id="message"
            rows="2"
            className="w-full py-3 px-3 rounded-lg bg-white border border-[#D14D72D7] text-[#D14D72] font-semibold focus:border-[#D14D72] focus:outline-none"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <p className="p-2 text-sm text-[#D14D72D7]">
            Any special requirements or anything you want to mention?
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`min-w-28 hover:bg-white hover:text-[#D14D72D7] border-[#D14D72D7] border-2 font-bold p-3 rounded-md mt-6 bg-[#D14D72] text-white transition ease-in-out duration-300 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
