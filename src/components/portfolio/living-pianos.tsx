"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const screenshots = [
  {
    title: "Sign In Page",
    src: "/images/living-pianos-screenshots/sign-in.png",
  },
  {
    title: "Sign Up Page",
    src: "/images/living-pianos-screenshots/sign-up.png",
  },
  { title: "Home Page", src: "/images/living-pianos-screenshots/home.png" },
  { title: "About Page", src: "/images/living-pianos-screenshots/about.png" },
  {
    title: "Piano Store Page",
    src: "/images/living-pianos-screenshots/pianos-for-sale.png",
  },
  { title: "Mobile View", src: "/videos/living-pianos/lp-mobile-view.mp4" },
];

const LivingPianos = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

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
          className="text-4xl md:text-6xl font-extrabold
                     bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                     dark:from-gray-300 dark:via-white dark:to-gray-200
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Living Pianos
        </h1>
        <span className="mt-2 text-gray-800 dark:text-gray-200 text-lg md:text-xl">
          The World&apos;s 1st Online Piano Store
        </span>

        {/* Tools / Framework badges */}
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {["Docker", "Next JS"].map((tech, idx) => (
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
          <div
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="card-item opacity-90 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg p-4"
            onMouseEnter={() => handleHover(idx, true)}
            onMouseLeave={() => handleHover(idx, false)}
          >
            <h2 className="text-center font-semibold">{item.title}</h2>
            <Dialog>
              <DialogTrigger className="w-full mt-2 flex justify-center">
                {item.title === "Mobile View" ? (
                  <video
                    preload="auto"
                    className="hover:cursor-pointer rounded-lg"
                  >
                    <source src={item.src} type="video/mp4" />
                    <track srcLang="en" label="English" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="hover:cursor-pointer rounded-lg"
                  />
                )}
              </DialogTrigger>
              <DialogContent className="sm:max-w-7xl">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                {item.title === "Mobile View" ? (
                  <video controls preload="auto" className="w-full rounded-lg">
                    <source src={item.src} type="video/mp4" />
                    <track srcLang="en" label="English" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingPianos;
