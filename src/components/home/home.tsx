"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const techStack = [
  "Bootstrap",
  "CI/CD",
  "CSS3",
  "Docker",
  "Figma",
  "Git",
  "GSAP",
  "HTML5",
  "JavaScript",
  "Laravel",
  "Livewire",
  "Next.js",
  "PostgreSQL",
  "TailwindCSS",
  "TypeScript",
  "Vue JS",
  "Wordpress",
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const textbox = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const marqueeRefs = useRef<HTMLDivElement[]>([]);

  const quotes = [
    "&lt;p&gt;I build websites that people love to use.&lt;/p&gt;",
    "&lt;p&gt;Web development is where creativity meets logic.&lt;/p&gt;",
    "&lt;p&gt;Every line of code is a step toward something bigger.&lt;/p&gt;",
    "&lt;p&gt;Simplicity is the soul of efficiency.&lt;/p&gt;",
    "&lt;p&gt;I craft digital experiences, not just websites.&lt;/p&gt;",
  ];

  useGSAP(
    () => {
      if (!textRef.current || !cursorRef.current || !cardRef.current) return;

      // Fade in card
      gsap.from([cardRef.current, textbox.current], {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Floating profile card
      gsap.to(cardRef.current, {
        y: -15,
        rotate: 3,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      // Blinking cursor
      gsap.fromTo(
        cursorRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, repeat: -1, yoyo: true, duration: 0.5 },
      );

      // Typewriter animation
      const tl = gsap.timeline({ repeat: -1 });
      quotes.forEach((quote) => {
        tl.to(textRef.current, { duration: 3, text: quote, ease: "none" }).to(
          textRef.current,
          { duration: 0.5, text: "", delay: 1 },
        );
      });

      // Infinite marquee animation
      marqueeRefs.current.forEach((el, i) => {
        const isLeft = i % 2 === 0;
        const startX = isLeft ? 0 : -el.scrollWidth / 2;
        const endX = isLeft ? -el.scrollWidth / 2 : 0;

        gsap.fromTo(
          el,
          { x: startX },
          { x: endX, repeat: -1, ease: "linear", duration: 50 + i * 3 },
        );
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen flex justify-center items-center overflow-hidden
                 bg-gradient-to-br from-white via-gray-200 to-gray-400
                 dark:from-black dark:via-gray-800 dark:to-gray-900"
    >
      {/* Tech Marquee: 7 rows */}
      <div className="absolute inset-0 flex flex-col justify-around space-y-4 overflow-hidden pointer-events-none z-0">
        {[0, 1, 2, 3, 4, 5, 6].map((row) => (
          <div
            key={row}
            ref={(el) => {
              if (el) marqueeRefs.current[row] = el;
            }}
            className={`flex space-x-12 whitespace-nowrap font-bold select-none
                        text-gray-700/20 dark:text-gray-500/20
                        ${row % 3 === 0 ? "text-xl md:text-3xl" : row % 3 === 1 ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"}`}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center space-x-8">
        {/* Left text */}
        <div className="flex flex-col text-left space-y-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold 
                         bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                         dark:from-gray-300 dark:via-white dark:to-gray-200
                         bg-clip-text text-transparent drop-shadow-md"
          >
            Alexie Simangan Tuzon
          </h1>

          <div
            ref={textbox}
            className="relative bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-4 shadow-lg"
          >
            <p className="text-xl md:text-2xl text-black dark:text-gray-300 italic flex items-center">
              <span ref={textRef} className="mr-2"></span>
              <span ref={cursorRef}>|</span>
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div
          ref={cardRef}
          className="relative w-72 h-96 md:w-96 md:h-[500px] bg-white/10 dark:bg-black/20 rounded-2xl backdrop-blur-lg shadow-2xl 
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
