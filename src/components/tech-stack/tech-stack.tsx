"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TechStackItems from "@/components/tech-stack/techstack-tems";
import MarqueTechStack from "@/components/ui/marquee-tech-stack";
import { Card } from "@/components/ui/card";

const TechStack = () => {
  const textbox = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  // const cursorRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const quotes = [
    "&lt;p&gt;I build websites that people love to use.&lt;/p&gt;",
    "&lt;p&gt;Web development is where creativity meets logic.&lt;/p&gt;",
    "&lt;p&gt;Every line of code is a step toward something bigger.&lt;/p&gt;",
    "&lt;p&gt;Simplicity is the soul of efficiency.&lt;/p&gt;",
    "&lt;p&gt;I craft digital experiences, not just websites.&lt;/p&gt;",
  ];

  useGSAP(() => {
    if (!textRef.current || !cardRef.current) return;

    // Fade in card
    gsap.from([cardRef.current, textbox.current], {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Floating profile card
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    gsap.to(cardRef.current, {
      y: -15,
      rotate: isDesktop ? 3 : 0,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    // Blinking cursor
    // gsap.fromTo(
    //   cursorRef.current,
    //   { autoAlpha: 0 },
    //   { autoAlpha: 1, repeat: -1, yoyo: true, duration: 0.5 },
    // );

    // Typewriter animation
    const tl = gsap.timeline({ repeat: -1 });
    quotes.forEach((quote) => {
      tl.to(textRef.current, { duration: 3, text: quote, ease: "none" }).to(
        textRef.current,
        { duration: 0.5, text: "", delay: 1 },
      );
    });
  });
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
          Tech Stack
        </h1>
      </div>

      <div className="flex items-center justify-between container">
        {/* Profile Card */}
        <div
          ref={cardRef}
          className="relative w-72 h-96 order-1 md:order-0 md:w-96 md:h-[500px] bg-white/10 dark:bg-black/20 rounded-2xl backdrop-blur-lg shadow-2xl 
                     overflow-hidden transition-all duration-500 hover:w-[200px] hover:h-[600px] md:hover:w-[650px] md:hover:h-[650px]"
        >
          <Image
            src="/images/profile-pic-3.jpg"
            width={384}
            height={500}
            alt="Profile"
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm p-4 rounded-b-2xl">
            <p className="text-white dark:text-gray-200 text-lg md:text-xl font-semibold">
              Full-Stack Web Developer
            </p>
          </div>
        </div>
        <div className="w-full p-8">
          <TechStackItems />
        </div>
      </div>
    </div>
  );
};
export default TechStack;
