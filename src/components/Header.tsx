import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  const [headerVisible, setHeaderVisibility] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    window.onscroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        setHeaderVisibility(false);
      } else {
        // upscroll code
        setHeaderVisibility(true);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const vh = (percent: number) => {
    const h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  };

  return (
    <header
      className={`z-50 fixed w-full transition-all duration-1000 ${
        !headerVisible ? "top-[-80px]" : "top-0"
      }`}
    >
      <nav className="flex items-center justify-between flex-wrap bg-[#043873] p-6 shadow-2xl shadow-black">
        <div className="ml-60 flex flex-row items-center flex-shrink-0 text-white mr-6">
          <Image
            src="/assets/icons/logo.png"
            height={70}
            width={28}
            alt="logo"
          ></Image>
          <span className="font-semibold text-xl tracking-tight ml-2">
            ORAND
          </span>
        </div>
        <div className="w-full block flex-wrap lg:flex lg:items-center lg:w-auto justify-between">
          <div className="text-md lg:flex-wrap justify-between mr-52">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-10"
              href="/"
            >
              Services
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-10"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-10"
              href="/about"
            >
              Contact Us
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-10"
              href="/about"
            >
              FAQ
            </Link>
          </div>

          <div>
            <button className="px-10 py-2 rounded-md text-[#043873] font-bold hover:shadow-2xl bg-[#FFE492]">
              Log in
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
