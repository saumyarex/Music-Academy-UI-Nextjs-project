"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn from Top Instructors",
    description:
      "Our experienced musicians and educators bring decades of industry knowledge to help you master your instrument or voice. From classical to contemporary styles, get personalized guidance to grow your musical talent.",
  },
  {
    title: "Live Jam Sessions",
    description:
      "Collaborate and perform with fellow students in live jam sessions. Whether you're a beginner or advanced, these sessions help you gain confidence, rhythm, and the joy of live performance.",
  },
  {
    title: "Track Your Progress",
    description:
      "Receive structured feedback and weekly progress reports. Our platform keeps you motivated and on track toward your musical goals — whether you're aiming to perform live or pass a graded exam.",
  },
  {
    title: "Online & In-Person Classes",
    description:
      "Attend classes at your convenience — online from home or in-person at our fully equipped music academy. Enjoy flexibility while ensuring a high-quality learning experience with dedicated mentors.",
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
