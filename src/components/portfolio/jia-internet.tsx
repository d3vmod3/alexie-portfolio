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
    title: "Dashboard",
    src: "/images/jia-internet-screenshots/dashboard.jpeg",
  },
  {
    title: "Expenses",
    src: "/images/jia-internet-screenshots/expenses.jpeg",
  },
  {
    title: "Payments",
    src: "/images/jia-internet-screenshots/payments.jpeg",
  },
  {
    title: "Add Payment",
    src: "/images/jia-internet-screenshots/add-payments.jpeg",
  },
  {
    title: "Subscribers",
    src: "/images/jia-internet-screenshots/subscribers.jpeg",
  },
  {
    title: "Subscriptions",
    src: "/images/jia-internet-screenshots/subscriptions.jpeg",
  },
  {
    title: "Billings",
    src: "/images/jia-internet-screenshots/subscriber-billings.jpeg",
  },
  {
    title: "Billings(PDF)",
    src: "/images/jia-internet-screenshots/bllings-pdf.jpeg",
  },
];

const JiaInternet = () => {
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
          className="text-4xl md:text-5xl font-extrabold
                     bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400
                     dark:from-gray-300 dark:via-white dark:to-gray-200
                     bg-clip-text text-transparent drop-shadow-md"
        >
          GoldenPress
        </h1>
        <span className="mt-2 text-gray-800 dark:text-gray-200 text-lg md:text-xl">
          A business based in Gattaran, Cagayan, specializing in P2P services
          and operations. The project is deployed locally within the
          company&apos;s infrastructure and utilizes ZeroTier to enable secure
          remote connectivity for users accessing the system outside the office
          premises. This setup ensures reliable communication, seamless access
          to internal resources, and efficient management of business operations
          from different locations.
        </span>

        {/* Tools Badge */}
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          <span className="font-bold rounded-md border px-2 py-1 bg-white/20 dark:bg-black/20 text-gray-800 dark:text-gray-200">
            Wordpress
          </span>
        </div>
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
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
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.title === "Mobile View" ? 300 : 1000}
                  height={item.title === "Mobile View" ? 300 : 1000}
                  className="hover:cursor-pointer rounded-lg"
                />
              </DialogTrigger>
              <DialogContent
                className={
                  item.title === "Mobile View"
                    ? "sm:max-w-md h-screen"
                    : "sm:max-w-7xl"
                }
              >
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.title === "Mobile View" ? 300 : 1000}
                  height={item.title === "Mobile View" ? 300 : 1000}
                  className="w-full rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JiaInternet;
