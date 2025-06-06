"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

function Contact() {
  return (
    <div>
      <div className="relative z-50 flex flex-col items-center gap-5">
        <h1 className="text-7xl font-bold  text-center mt-40">Contact Us</h1>
        <p className="text-center w-[35rem] text-gray-400">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        {/* input box */}
        <div className="relative z-50 mx-5">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-gray-950 text-gray-300 py-3 px-5 rounded-xs sm:w-[40rem] "
          />
        </div>
      </div>
      <BackgroundBeams className="bg-gray-900" />
    </div>
  );
}

export default Contact;
