import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";

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
      <nav className="flex items-center justify-between flex-row bg-[#043873] p-6 shadow-2xl shadow-black">
        <div className="flex flex-row items-center flex-shrink-0 text-white mr-6 md:ml-20 lg:ml-36">
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
        <div className="w-full md:flex md:items-center md:w-auto justify-between hidden">
          <div className="text-md md:flex justify-between md:mr-26 md:mr-auto md:flex-row">
            <Link
              className="block mt-4 md:inline-block md:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter"
              href="#home"
            >
              <span>Home</span>
            </Link>
            <Link
              className="block mt-4 md:inline-block md:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter"
              href="#services"
            >
              <span>Services</span>
            </Link>

            <Link
              className="block mt-4 md:inline-block md:mt-0 text-white font-bold mr-10 underline-effect-unique relative  font-inter"
              href="#about"
            >
              <span>About Us</span>
            </Link>
            <Link
              className="block mt-4 md:inline-block md:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter"
              href="#contact"
            >
              <span>Contact Us</span>
            </Link>
            <Link
              className="block mt-4 md:inline-block md:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter"
              href="#faq"
            >
              <span>FAQ</span>
            </Link>
          </div>

          {/* <div className={`${isDrawerOpen ? "block" : "hidden"} lg:block`}>
            <button className="px-10 py-2 rounded-md text-[#043873] font-bold hover:shadow-2xl bg-[#FFE492]">
              Log in
            </button>
          </div> */}
        </div>
        <div className="block md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (
      node.current?.contains(e.target as Node) ||
      menuIconRef.current?.contains(e.target as Node)
    ) {
      // inside click or menu icon click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          ref={menuIconRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#043873] text-sm font-medium text-gray-700 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          <CgMenu size="25px" color="white" />
        </button>
      </div>

      {isOpen && (
        <div
          ref={node}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            className="flex py-1 bg-[#043873] flex-col pl-3 justify-center items-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              onClick={() => setIsOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter my-3"
              href="#home"
            >
              <span>Home</span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter my-3"
              href="#services"
            >
              <span>Services</span>
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-10 underline-effect-unique relative  font-inter my-3"
              href="#about"
            >
              <span>About Us</span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter my-3"
              href="#contact"
            >
              <span>Contact Us</span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-10 underline-effect-unique relative font-inter my-3"
              href="#faq"
            >
              <span>FAQ</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
