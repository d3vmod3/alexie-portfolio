"use client";
import { MenuIcon } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import Logo from "/images/logo.svg";

const navigationData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Tech Stack",
    href: "/tech-stack",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 border">
      <div className="w-full mx-auto px-4 py-7 flex items-center justify-between gap-8 container">
        <Link
          className="hover:text-primary max-md:hidden text-xl font-bold"
          href="/"
        >
          Alexie Tuzon
        </Link>
        <div className="text-muted-foreground flex items-center gap-8 font-medium md:justify-center lg:gap-16">
          {navigationData.map((item, index) => (
            <Link
              key={index}
              className="hover:text-primary max-md:hidden"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}

          <Link
            href="/Alexie_Tuzon_Resume.pdf"
            target="_blank"
            className="cursor-pointer flex justify-between items-end gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black p-2 rounded-lg "
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>

          <ModeToggle />
        </div>

        <div className="flex sm:flex md:flex lg:hidden xl:hidden items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
