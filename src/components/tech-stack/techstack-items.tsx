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
    { name: "cypress", learning: true },
    { name: "docker" },
    { name: "figma" },
    { name: "flutter", learning: true },
    { name: "git" },
    { name: "gsap", learning: true },
    { name: "html5" },
    { name: "js" },
    { name: "laravel" },
    { name: "nextjs" },
    { name: "mysql" },
    { name: "postgresql", learning: true },
    { name: "tailwindcss" },
    { name: "typescript" },
    { name: "vuejs" },
    { name: "wordpress" },
  ];

  const itemsRef = useRef<HTMLDivElement[]>([]);
  const progressRefs = useRef<HTMLDivElement[]>([]);
  const itemsClass =
    "flex flex-col items-center justify-center rounded-lg p-3 sm:p-4 bg-white/10 dark:bg-white/20 backdrop-blur-xs rounded-xl p-6 shadow-lg";
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!itemsRef.current) return;

      gsap.from(itemsRef.current, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
      gsap.fromTo(
        progressRefs.current,
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 70, // adjust depending on your progress width

          opacity: 1,
          duration: 1,
          ease: "none",
          repeat: -1,
          repeatDelay: 0.6,
        },
      );
    });

    return () => ctx.revert(); // clean up on unmount
  }, []);

  const handleHover = (idx: number, enter: boolean) => {
    gsap.to(itemsRef.current[idx], {
      scale: enter ? 1.05 : 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  return (
    <div>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            className={itemsClass}
          >
            <StackIcon
              name={item.name}
              className="min-w-20 min-h-20 w-24 h-24"
            />
            <p className="mt-3 text-sm font-medium capitalize">
              {item.name === "nextjs"
                ? "Next.js"
                : item.name === "js"
                  ? "JavaScript"
                  : item.name === "css3"
                    ? "CSS3"
                    : item.name === "html5"
                      ? "HTML5"
                      : item.name}
            </p>
            {item.learning && (
              <div className="mt-3">
                <div className="flex justify-between text-xs italic">
                  <span>Learning</span>
                </div>

                <div className="relative mt-1 h-1 overflow-hidden rounded-full bg-neutral-700">
                  <div className="relative h-full w-2/5 rounded-full bg-sky-500">
                    <div
                      ref={(el) => {
                        if (el) progressRefs.current[index] = el;
                      }}
                      className="absolute top-0 h-full w-4 bg-white/80 blur-[2px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Flux UI */}
        <div
          className={itemsClass}
          ref={(el) => {
            if (el) itemsRef.current[18] = el;
          }}
          onMouseEnter={() => handleHover(18, true)}
          onMouseLeave={() => handleHover(18, false)}
        >
          <p className="mt-3 text-sm font-medium capitalize">Flux UI</p>
          <div className="min-w-20 min-h-20 w-24 h-24 flex items-center justify-center">
            <FluxUI />
          </div>
        </div>

        {/* MSSQL */}
        <div
          className={itemsClass}
          ref={(el) => {
            if (el) itemsRef.current[19] = el;
          }}
          onMouseEnter={() => handleHover(19, true)}
          onMouseLeave={() => handleHover(19, false)}
        >
          <p className="mt-3 text-sm font-medium capitalize">MS SQL</p>
          <Image
            src={MSSql}
            alt="Microsoft SQL Server"
            className="min-w-20 min-h-20 w-24 h-24 object-contain"
          />
        </div>

        {/* Livewire */}
        <div
          className={itemsClass}
          ref={(el) => {
            if (el) itemsRef.current[20] = el;
          }}
          onMouseEnter={() => handleHover(20, true)}
          onMouseLeave={() => handleHover(20, false)}
        >
          <p className="mt-3 text-sm font-medium capitalize">Livewire</p>
          <Image
            src={Livewire}
            alt="Livewire"
            className="min-w-20 min-h-20 w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStackItems;
