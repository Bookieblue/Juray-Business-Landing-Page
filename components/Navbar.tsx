"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const showNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween w-full z-30 bg-white shadow-md py-3 fixed top-0">
      <div className="max-container padding-container flexBetween w-full 4xl:px-0">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={74} height={29} />
        </Link>
        <div>
          <div className="hidden w-full lg:flex gap-10 justify-center items-center">
            <ul className="flex gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="medium-16 text-gray-500 flexCenter cursor-pointer pt-4 transition-all hover:font-bold hover:text-blue-700"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex mt-3">
              <Button variant="outline">Log in</Button>
              <Button variant="ghost">Sign up</Button>
            </div>
          </div>
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={showNav}
          className="inline-block cursor-pointer lg:hidden"
        ></Image>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] h-screen bg-white border-2 p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={showNav} className="cursor-pointer">
              <h1 className="bold-32 mb-5">&times;</h1>
            </div>
          </div>
          <ul className="">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                key={link.key}
                className="medium-16 text-black flexStart cursor-pointer py-3 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex flex-col mt-3">
              <Button variant="outline">Log in</Button>
              <Button variant="ghost">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
