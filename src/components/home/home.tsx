"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import MarqueTechStack from "@/components/ui/marquee-tech-stack";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function Home() {
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
      className="relative min-h-screen flex justify-center items-center overflow-hidden
                 bg-gradient-to-br from-white via-gray-200 to-gray-400
                 dark:from-black dark:via-gray-800 dark:to-gray-900"
    >
      {/* Foreground Content */}
      <MarqueTechStack />
      <div className="relative z-10 flex flex-col md:flex-row items-center space-x-8">
        {/* Left text */}
        <div className="flex flex-col order-1 md:order-0 items-center md:items-start space-y-4 ml-6 md:ml-0 mt-10 md:mt-0">
          <h1
            className="text-5xl md:text-6xl font-extrabold
                         bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                         dark:from-gray-300 dark:via-white dark:to-gray-200
                         bg-clip-text text-transparent drop-shadow-md"
          >
            Alexie Tuzon
          </h1>
          <div className="flex space-x-4 mt-2">
            {/* GitHub */}
            <Link
              href="https://github.com/d3vmod3"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
                className="w-8 h-8 text-gray-800 dark:text-gray-200"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/alexie-tuzon-4a2844103/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="w-8 h-8 text-gray-800 dark:text-gray-200"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </Link>
          </div>

          <div
            ref={textbox}
            className="relative w-72 h-72 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-2 shadow-lg"
          >
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-start py-2 gap-2">
              <div className="flex flex-col gap-0 text-xl md:text-md text-black dark:text-gray-700">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
              </div>
              <div className="">
                <p className="text-xl text-black dark:text-gray-300 italic flex items-center">
                  <span ref={textRef} className="mr-2"></span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div
          ref={cardRef}
          className="relative w-72 h-96 order-0 md:order-1 md:w-96 md:h-[500px] bg-white/10 dark:bg-black/20 rounded-2xl backdrop-blur-lg shadow-2xl 
                     overflow-hidden transition-all duration-500 hover:w-96 hover:h-[600px] md:hover:w-[400px] md:hover:h-[650px]"
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
      </div>
    </div>
  );
}
