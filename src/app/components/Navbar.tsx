"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full container p-4 absolute left-0 right-0 mx-auto md:-mt-10 lg:-mt-10">
      <div className="inline-flex items-center -mt-10 md:mt-0 lg:mt-0 -ml-4 w-[150px]">
        <Image
          src="/images/5.png"
          width={80}
          height={80}
          sizes="100vh"
          alt="Piranti Logo"
          className="ml-3"
        />
        <Image
          src="/images/2.png"
          width={170}
          height={170}
          sizes="100vh"
          alt="Piranti Logo"
          className="-ml-10"
        />
      </div>
      <div className="lg:hidden md:hidden">
        <button
          className="navbar-burger flex items-center text-black p-3 relative -top-4"
          onClick={toggleMenu}>
          <svg
            className="block h-5 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute shadow-4xl w-full top-20 right-0 p-5 pt-0 border-b z-40">
            <p className="w-full rounded-xl">
              <Link
                className="flex items-center justify-between w-full p-3 mb-1 rounded-sm bg-white text-black hover:bg-black hover:text-white"
                href={"/"}>
                Beranda
              </Link>
              <Link
                className="flex items-center justify-between w-full p-3 mb-1 rounded-sm bg-white text-black hover:bg-black hover:text-white"
                href={"/harga"}>
                Harga
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="hidden md:flex lg:flex gap-7" id="menu-1">
        <Link className="text-xs" href={"/"}>
          Beranda
        </Link>
        <Link className="text-xs" href={"/harga"}>
          Harga
        </Link>
      </div>
      <div className="hidden lg:flex w-[150px]">Login</div>
    </nav>
  );
}
