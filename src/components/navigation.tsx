"use client";
import { MenuIcon, SearchIcon } from "lucide-react";
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
          <Link className="hover:text-primary max-md:hidden" href="/">
            Home
          </Link>
          <Link className="hover:text-primary max-md:hidden" href="/portfolio">
            Portfolio
          </Link>
          <Link className="hover:text-primary max-md:hidden" href="/about">
            About
          </Link>
          <Link className="hover:text-primary max-md:hidden" href="/contacts">
            Contacts
          </Link>
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
