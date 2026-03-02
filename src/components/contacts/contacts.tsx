"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Card } from "@/components/ui/card";

const contactCards = [
  {
    label: "Email",
    value: "astuzon@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+63 9672 815 421",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value:
      "Gonzaga Street Extension, Ugac Norte, Tuguegarao City, Cagayan 3500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: (
      <Button asChild className="w-full sm:w-full lg:w-auto">
        <Link href="https://www.linkedin.com/in/alexie-tuzon-4a2844103/">
          Click Here
        </Link>
      </Button>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
        className="w-12 h-12"
      >
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
];

const Contacts = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

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
          Contact Information
        </h1>
        <div className="mt-4 max-w-2xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl">
            Greetings! Thank you for exploring my portfolio. If you have any
            inquiries, collaboration proposals, or simply wish to connect,
            I&apos;d be delighted to hear from you. Feel free to reach out via
            phone or email, and I&apos;ll respond promptly.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {contactCards.map((contact, idx) => (
          <Card
            key={idx}
            ref={(el) => {
              if (el && !cardsRef.current.includes(el))
                cardsRef.current.push(el);
            }}
            className="flex justify-between items-center p-4 bg-white/10 dark:bg-black/20 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex-1 text-center">
              <h2 className="font-semibold">{contact.label}</h2>
              <p>{contact.value}</p>
            </div>
            <div>{contact.icon}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
