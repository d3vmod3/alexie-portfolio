import Image from "next/image";
import StackIcon from "tech-stack-icons";
import FluxUI from "@/components/ui/logos/flux-ui";
import MSSql from "@/components/ui/logos/microsoft-sql-server-logo-svgrepo-com.svg";
import Livewire from "@/components/ui/logos/livewire.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const TechStackItems = () => {
  const items = [
    { name: "bootstrap5" },
    { name: "css3" },
    { name: "cypress" },
    { name: "docker" },
    { name: "figma" },
    { name: "git" },
    { name: "gsap" },
    { name: "html5" },
    { name: "js" },
    { name: "laravel" },
    { name: "nextjs" },
    { name: "mysql" },
    { name: "postgresql" },
    { name: "tailwindcss" },
    { name: "typescript" },
    { name: "vuejs" },
    { name: "wordpress" },
  ];

  const itemsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!itemsRef.current) return;

      gsap.from(itemsRef.current, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // clean up on unmount
  }, []);

  const handleHover = (idx: number, enter: boolean) => {
    gsap.to(itemsRef.current[idx], {
      scale: enter ? 1.65 : 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  return (
    <div>
      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            className="flex items-center justify-center rounded-lg p-3 sm:p-4 dark:bg-white/70"
          >
            <StackIcon
              name={item.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
        ))}

        {/* Flux UI */}
        <div
          className="flex items-center justify-center rounded-lg p-3 sm:p-4 dark:bg-white/70"
          ref={(el) => {
            if (el) itemsRef.current[18] = el;
          }}
          onMouseEnter={() => handleHover(18, true)}
          onMouseLeave={() => handleHover(18, false)}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <FluxUI />
          </div>
        </div>

        {/* MSSQL */}
        <div
          className="flex items-center justify-center rounded-lg p-3 sm:p-4 dark:bg-white/70"
          ref={(el) => {
            if (el) itemsRef.current[19] = el;
          }}
          onMouseEnter={() => handleHover(19, true)}
          onMouseLeave={() => handleHover(19, false)}
        >
          <Image
            src={MSSql}
            alt="Microsoft SQL Server"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>

        {/* Livewire */}
        <div
          className="flex items-center justify-center rounded-lg p-3 sm:p-4 dark:bg-white/70"
          ref={(el) => {
            if (el) itemsRef.current[20] = el;
          }}
          onMouseEnter={() => handleHover(20, true)}
          onMouseLeave={() => handleHover(20, false)}
        >
          <Image
            src={Livewire}
            alt="Livewire"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStackItems;
