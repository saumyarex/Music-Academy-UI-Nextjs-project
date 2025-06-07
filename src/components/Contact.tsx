"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div>
      <div className="relative z-10 flex flex-col items-center gap-5 justify-center w-full pb-50">
        <h1 className="sm:text-7xl text-4xl font-bold  text-center mt-40">
          Contact Us
        </h1>
        <p className="text-center max-w-lg mx-4 text-gray-400">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        {/* input box */}
        <form
          onSubmit={handelSubmit}
          className=" space-y-4 mt-4 px-5 w-full flex flex-col items-center max-w-2xl"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="bg-gray-950 text-gray-300 py-3 px-5 rounded-md border border-gray-800 sm:max-w-2xl block w-full placeholder:text-neutral-700 "
            required
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="bg-gray-950 text-gray-300 py-3 px-5 rounded-md border border-gray-800 sm:max-w-2xl block w-full placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 py-2 px-6 rounded-md font-bold hover:cursor-pointer hover:bg-teal-600 self-start mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <BackgroundBeams className="bg-gray-900" />
    </div>
  );
}

export default Contact;
