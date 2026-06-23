"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Forex Cargo US",
    subtitle: "Enhanced",
    tools: ["Codeigniter"],
    href: "./portfolio/forexcargo",
  },
  {
    title: "Fitness Test",
    subtitle: "Deployed Locally",
    tools: ["Vue 3", "Laravel", "Tailwind (Daisy UI)", "MySQL"],
    href: "./portfolio/fitness-test",
  },
  {
    title: "Golden Press",
    tools: ["Wordpress"],
    href: "./portfolio/goldenpress",
  },
  {
    title: "Jia's Internet",
    subtitle: "Deployed Locally",
    tools: ["Laravel", "Livewire", "Flux UI", "MySQL"],
    href: "./portfolio/jia-internet",
  },
  {
    title: "Living Pianos",
    subtitle: "Archived",
    tools: ["Docker", "Next.js"],
    href: "./portfolio/living-pianos",
  },
  {
    title: "Love PH",
    subtitle: "Archived",
    tools: ["Next.js"],
    href: "https://book.philippines-hoho.ph/",
  },
  {
    title: "RONLapor - Admin Panel for RONLapor Mobile App",
    subtitle: "Archived",
    tools: ["Docker", "Laravel", "Livewire", "MySQL"],
    href: "./portfolio/ronlapor",
  },
  {
    title: "SGI - Maunlad Lending Portal",
    subtitle: "Deployed Locally",
    tools: ["Laravel", "Livewire", "Flux UI", "MySQL"],
    href: "./portfolio/sgi-maunlad-lending-portal",
  },
  {
    title: "Soros Security Consulting",
    tools: ["Docker", "Next.js"],
    href: "https://sorosservices.com/",
  },
];

const Portfolio = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;

      gsap.from(cardsRef.current, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // clean up on unmount
  }, []);

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
          Portfolio
        </h1>
        <div className="mt-4 max-w-2xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl">
            Hello and welcome! Here, you&apos;ll find a curated selection of my
            work, showcasing my passion and creativity.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="opacity-90 hover:opacity-100 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 transition-transform duration-500 hover:scale-105 shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                {project.subtitle && (
                  <span className="text-xs italic text-gray-500 dark:text-gray-400">
                    ({project.subtitle})
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Tools / Framework:</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-semibold border rounded-full px-2 py-1 bg-white/20 dark:bg-gray-700/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild className="w-full sm:w-auto mt-2">
                <Link href={project.href} target="_blank">
                  View
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
