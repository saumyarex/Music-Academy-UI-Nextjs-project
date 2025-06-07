import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  font-bold sm:mx-20 mx-5 gap-10 my-10 text-lg relative z-40">
      <div>
        <h2>About Us</h2>
        <p className="font-normal text-gray-400 text-base mt-4">
          Music School is a premier institution dedicated to teaching the art
          and science of music. We nurture talent from the ground up, fostering
          a vibrant community of musicians.
        </p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul className="font-normal text-gray-400 text-base mt-4">
          <li className="hover:text-white hover:cursor-pointer">Home</li>
          <li className="hover:text-white hover:cursor-pointer">About</li>
          <li className="hover:text-white hover:cursor-pointer">Courses</li>
          <li className="hover:text-white hover:cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <h2>Follow Us</h2>
        <ul className="font-normal text-gray-400 text-base mt-4">
          <li className="hover:text-white">
            <Link href={"https://x.com/Saumya_rex"}>Twitter</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"https://www.instagram.com/saumya_rex/"}>
              Instagram
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href={"https://www.linkedin.com/in/saumya-a0913b171/"}>
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p className="font-normal text-gray-400 text-base mt-4">
          New Delhi, India
        </p>
        <p className="font-normal text-gray-400 text-base">Delhi 10001</p>
        <p className="font-normal text-gray-400 text-base">
          Email: info@musicschool.com
        </p>
        <p className="font-normal text-gray-400 text-base">
          Phone: (123) 456-7890
        </p>
      </div>
    </footer>
  );
}

export default Footer;
