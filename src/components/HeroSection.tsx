"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

function HeroSection() {
  return (
    <div className="h-auto relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div
        className={cn("flex flex-col items-center my-40 mx-7  relative z-20")}
      >
        <h1 className="md:text-7xl text-5xl font-bold text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text text-center ">
          Master the art of music
        </h1>
        <p className="mt-4 mx-auto w-auto max-w-lg text-xl text-center text-neutral-400 font-medium">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&lsquore a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>

        <div className="mt-10">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:cursor-pointer"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
