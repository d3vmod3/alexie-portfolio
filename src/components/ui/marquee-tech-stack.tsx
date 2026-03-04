"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

const MarqueTechStack = () => {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
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
      });
      return () => ctx.revert();
    },
    { scope: container },
  );

  return (
    <div className="absolute inset-0 flex flex-col justify-around space-y-4 overflow-hidden pointer-events-none z-0">
      {[0, 1, 2, 3, 4, 5, 6].map((row) => (
        <div
          key={row}
          ref={(el) => {
            if (el) marqueeRefs.current[row] = el;
          }}
          className={`flex space-x-12 whitespace-nowrap font-bold select-none
                        text-gray-700/35 dark:text-gray-500/60
                        ${row % 3 === 0 ? "text-xl md:text-3xl" : row % 3 === 1 ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"}`}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MarqueTechStack;
