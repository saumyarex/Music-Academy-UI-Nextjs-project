import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    link: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    link: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    link: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "digital-music-marketing",
    isFeatured: true,
  },
];

function FeaturedWebinars() {
  return (
    <div className=" flex py-10 flex-col justify-center items-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-xl text-teal-600 font-medium">FEATURED WEBINARS</h2>
        <p className="md:text-5xl text-3xl font-extrabold tracking-tight mt-3">
          Enhance Your Musical Journey
        </p>
      </div>

      {/* Featured Webinars */}
      <div className=" mx-auto px-8">
        <HoverEffect items={featuredWebinars} />
      </div>
      <div>
        <Link href="/webinars">
          <button className="bg-neutral-100 hover:cursor-pointer text-black py-1 px-3 rounded-xs">
            View All Webinars
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedWebinars;
