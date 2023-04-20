/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useContactForm from "../hooks/useContactForm";
import sendEmail from "@/lib/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const req: any = await sendEmail(
        values.email,
        values.subject,
        values.message
      );
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
        return toast.success("Message sent successfully");
      }
    } catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
      return toast.error(
        "Unable to send message. Try contacting me through the email below or via LinkedIn"
      );
    }
  };
  return (
    <div id="Contact" className="mb-10 pt-24 md:pt-32">
      <div>
        <h2 className="text-5xl">Contact Me</h2>
        <h4 className="mt-6 text-2xl text-grey">
          Interested in hiring me? <br /> You can message me on LinkedIn, or by
          filling out the form below.
        </h4>
      </div>

      <div className="mx-auto mt-10 w-auto rounded-xl bg-white p-10 pt-10 drop-shadow-md backdrop-blur-md md:w-2/3 lg:w-8/12">
        <h4 className="m-4 mt-6 text-2xl">Let's get in touch</h4>

        <form
          onSubmit={handleSubmit}
          className="m-2 flex flex-col flex-wrap md:flex-row"
        >
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label className="text-sm leading-7">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-8 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              />
            </div>
          </div>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label className="text-sm leading-7 ">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={values.subject}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-8 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full p-2">
            <div className="relative">
              <label className="text-sm leading-7">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={values.message}
                onChange={handleChange}
                className="h-32 w-full resize-none rounded border border-gray-300 bg-offWhite px-3 py-1 text-base leading-6 text-grey outline-none transition-colors duration-200 ease-in-out focus:border-primary"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              value="Submit"
              className="mx-auto flex rounded border-0 bg-primary px-8 py-2 text-lg text-white hover:bg-primary focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
        <div className="mt-4 flex w-full flex-col justify-around border-t border-gray-200 p-2 pt-8 text-center md:mt-8 md:flex-row">
          <p className="">
            <span className="font-semibold">Email: </span>
            murad.coding@gmail.com
          </p>

          <p className="">
            <span className="font-semibold">Phone Number: </span>+44 7305581194
          </p>
        </div>
        <div className="mt-2 flex w-full items-center justify-center space-x-2 ">
          <Link
            className="cursor-pointer"
            href="https://github.com/Murad-code"
            target="_blank"
          >
            <Icon
              icon="foundation:social-github"
              color="#353535"
              width="30"
              height="30"
            />
          </Link>
          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/in/murad-k-0872001b5/"
            target="_blank"
          >
            <Icon
              icon="foundation:social-linkedin"
              color="#353535"
              width="30"
              height="30"
            />
          </Link>
          <button className="cursor-pointer">
            <Icon icon="mdi:gmail" color="#353535" width="30" height="30" />
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Contact;
