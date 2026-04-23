"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import MarqueTechStack from "@/components/ui/marquee-tech-stack";
import { Card } from "@/components/ui/card";

const infoCards = [
  {
    label: "Full Name",
    value: "Alexie Simangan Tuzon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Gender",
    value: "Male",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          fillRule="evenodd"
          d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    ),
  },
  {
    label: "Birthdate",
    value: "July 11, 1996",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513"
        />
      </svg>
    ),
  },
  {
    label: "Highest Level of Education",
    value:
      "Bachelor of Science in Information Technology, St. Paul University Philippines",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347"
        />
      </svg>
    ),
  },
];

const About = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "bounce.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative min-h-screen py-10 px-4 flex flex-col items-center
                 bg-gradient-to-br from-white via-gray-200 to-gray-400
                 dark:from-black dark:via-gray-800 dark:to-gray-900"
    >
      <MarqueTechStack />
      <div className="text-center mb-8">
        <h1
          className="text-4xl md:text-5xl font-extrabold
                     bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                     dark:from-gray-300 dark:via-white dark:to-gray-200
                     bg-clip-text text-transparent drop-shadow-md"
        >
          About Me
        </h1>
        <div className="mt-4 max-w-2xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl">
            Experienced IT Programmer with a strong background in web and
            software development. Skilled in creating solutions with both
            creativity and precision.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white/10 dark:bg-black/20 rounded-full backdrop-blur-lg shadow-2xl overflow-hidden w-48 h-48 md:w-54 md:h-54">
            <Image
              src="/images/profile-pic-3.jpg"
              width={200}
              height={200}
              alt="Profile Picture"
              className="object-cover w-full h-full rounded-full hover:w-[100px] hover:h-[100px] md:hover:w-[500px] md:hover:h-[500px] transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {infoCards.map((info, idx) => (
          <Card
            key={idx}
            ref={(el) => {
              if (el && !cardsRef.current.includes(el))
                cardsRef.current.push(el);
            }}
            className="flex justify-between backdrop-blur-md items-center p-4 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-center">
              <h2 className="font-semibold">{info.label}</h2>
              <p>{info.value}</p>
            </div>
            <div>{info.icon}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
