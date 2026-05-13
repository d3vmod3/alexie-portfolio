"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const screenshots = [
  {
    title: "Dashboard",
    src: "/images/jia-internet/dashboard.jpeg",
  },
  {
    title: "Expenses",
    src: "/images/jia-internet/expenses.jpeg",
  },
  {
    title: "Payments",
    src: "/images/jia-internet/payments.jpeg",
  },
  {
    title: "Add Payment",
    src: "/images/jia-internet/add-payment.jpeg",
  },
  {
    title: "Subscribers",
    src: "/images/jia-internet/subscribers.jpeg",
  },
  {
    title: "Subscriptions",
    src: "/images/jia-internet/subscriptions.jpeg",
  },
  {
    title: "Billings",
    src: "/images/jia-internet/subscriber-billings.jpeg",
  },
  {
    title: "Billings(PDF)",
    src: "/images/jia-internet/billing-pdf.jpeg",
  },
];

const JiaInternetComponent = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  // Hover scale using GSAP
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
          Jia&apos; Internet
        </h1>
        <p className="mt-2 text-gray-800 dark:text-gray-200 text-lg md:text-xl">
          A business based in Gattaran, Cagayan, specializing in P2P services
          and operations. The project is deployed locally within the
          company&apos;s infrastructure and utilizes ZeroTier to enable secure
          remote connectivity for users accessing the system outside the office
          premises. This setup ensures reliable communication, seamless access
          to internal resources, and efficient management of business operations
          from different locations.
        </p>
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {["Laravel", "Livewire", "MySQL"].map((tech, idx) => (
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
          <Card
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="card-item opacity-90 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 shadow-lg"
            onMouseEnter={() => handleHover(idx, true)}
            onMouseLeave={() => handleHover(idx, false)}
          >
            <CardHeader>
              <CardTitle className="text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="hover:cursor-pointer rounded-lg"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-7xl">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                  </DialogHeader>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JiaInternetComponent;
