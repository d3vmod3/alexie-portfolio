"use client";

import TechStackItems from "@/components/tech-stack/techstack-items";
import MarqueTechStack from "@/components/ui/marquee-tech-stack";

const TechStack = () => {
  return (
    <div
      className="relative min-h-screen  py-10 px-4 flex flex-col items-center
                 bg-gradient-to-br from-white via-gray-200 to-gray-400
                 dark:from-black dark:via-gray-800 dark:to-gray-900"
    >
      <MarqueTechStack />
      <div className="text-center">
        <h1
          className="text-4xl md:text-6xl font-extrabold
                     bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                     dark:from-gray-300 dark:via-white dark:to-gray-200
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Tech Stack
        </h1>
      </div>
      <div className="w-full py-4 px-0 sm:px-32">
        <TechStackItems />
      </div>
    </div>
  );
};
export default TechStack;
