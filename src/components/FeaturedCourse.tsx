"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const featuredCourses = courseData.courses.filter(
  (course: Courses) => course.isFeatured === true
);

function FeaturedCourse() {
  return (
    <div className=" flex py-10 flex-col justify-center items-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-xl text-teal-600 font-medium">FEATURED COURSES</h2>
        <p className="md:text-5xl text-3xl font-extrabold tracking-tight mt-3">
          Learn With the Best
        </p>
      </div>

      {/* Featured Courses */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCourses.map((course) => (
          <div key={course.id} className="flex mx-5">
            <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
              <div className="flex flex-col justify-center items-center flex-grow ">
                <h3 className="font-bold text-center">{course.title}</h3>
                <p className="text-center mt-3">{course.description}</p>
                <Link href={`/courses/${course.slug}`}>
                  <button className="mt-5 text-sm sm:text-base bg-neutral-200 py-1 px-3 rounded-xs hover:cursor-pointer text-black">
                    Learn More
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div>
        <Link href={"/courses"}>
          <button className="bg-neutral-100 hover:cursor-pointer text-black py-1 px-3 rounded-xs">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourse;
