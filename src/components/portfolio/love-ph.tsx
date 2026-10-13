"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const screenshots = [
  {
    title: "Booking",
    src: "/images/love-ph/b2c-booking.jpg",
  },
  {
    title: "Booking (Personal Information Form)",
    src: "/images/love-ph/b2c-booking-details.jpg",
  },
  {
    title: "Booking (Personal Information Review)",
    src: "/images/love-ph/b2c-booking-details.jpg",
  },
  {
    title: "Booking - Waiver (Email)",
    src: "/images/love-ph/b2c-booking-waiver.jpg",
  },
  {
    title: "Booking - Waiver (Auto-Fill)",
    src: "/images/love-ph/b2c-booking-waiver-2.jpg",
  },
];

const LovePhComponent = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  // Hover scale using GSAP
  const handleHover = (idx: number, enter: boolean) => {
    gsap.to(cardsRef.current[idx], {
      scale: enter ? 1.05 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      className="min-h-screen py-10 px-4 flex flex-col items-center
                 bg-gradient-to-br from-white via-gray-200 to-gray-400
                 dark:from-black dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center mb-8">
        <h1
          className="text-4xl py-4 md:text-6xl font-extrabold
                     bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                     dark:from-gray-300 dark:via-white dark:to-gray-200
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Love-PH (Booking Platform)
        </h1>
        <small className="italic text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-md lg:text-lg">
          Formerly known as Philippines Hop-On Hop-Off (HOHO)
        </small>
        <p className="mt-2 text-gray-800 dark:text-gray-200 text-lg md:text-xl">
          A web-based transit tour booking platform in the Philippines that
          helps travelers make the most of their layovers by exploring nearby
          destinations and local attractions. The website allows users to browse
          available tour packages, view itineraries, check travel details, and
          book experiences that fit their layover schedules, making it easier to
          discover the Philippines while waiting for connecting flights.
        </p>
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind CSS"].map((tech, idx) => (
            <span
              key={idx}
              className="font-bold rounded-md border px-2 py-1 bg-white/20 dark:bg-black/20 text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {screenshots.map((item, idx) => (
          <Card
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="card-item opacity-90 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 shadow-lg"
            onMouseEnter={() => handleHover(idx, true)}
            onMouseLeave={() => handleHover(idx, false)}
          >
            <CardHeader>
              <CardTitle className="text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="hover:cursor-pointer rounded-lg"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-7xl">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                  </DialogHeader>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LovePhComponent;
