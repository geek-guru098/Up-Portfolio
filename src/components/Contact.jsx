import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a9h7cjt",
        "template_lg7w1o9",
        form.current,
        "5oZIMxzruvib8mJln"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Message sent successfully!", {
            icon: "✅",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("An error occurred, please try again.", {
            icon: "❌",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-blue-50 py-10"
    >
      <div className="w-full max-w-md bg-blue-100 p-8 shadow-lg rounded-lg">
        <h1 className="font-bold text-3xl mb-4 text-center text-blue-700">
          Contact Us
        </h1>
        <span className="block mb-8 text-center text-blue-600">
          Provide your details below:
        </span>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-600 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="from_name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-600 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-blue-600 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md transition-transform duration-300 transform ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="w-5 h-5 animate-spin mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 1116 0A8 8 0 014 12zm-2 0a10 10 0 1020 0A10 10 0 002 12z"
                ></path>
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
