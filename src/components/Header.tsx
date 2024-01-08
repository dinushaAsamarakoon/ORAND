import React from "react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#043873] p-6">
      <div className="ml-60 flex flex-row items-center flex-shrink-0 text-white mr-6">
        <Image
          src="/assets/icons/logo.png"
          height={70}
          width={28}
          alt="logo"
        ></Image>
        <span className="font-semibold text-xl tracking-tight ml-2">ORAND</span>
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
  );
};

export default Header;
