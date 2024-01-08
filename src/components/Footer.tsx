// Import the necessary libraries
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

// Define the Footer component
const Footer: FC = () => {
  return (
    <div className="w-full h-[50vh] bg-[#043873] flex items-center justify-between">
      <div className="flex-wrap items-center my-auto w-full">
        <div className="text-white items-start justify-between px-4 grid grid-cols-5 mx-28">
          <div className="col-span-2 flex-col mr-28">
            <div className="flex flex-row items-center">
              <Image
                src="/assets/icons/logo.png"
                height={70}
                width={28}
                alt="logo"
              ></Image>
              <h1 className="text-4xl ml-2">ORAND</h1>
            </div>
            <p className="flex">
              ORAND was created for making your works easy by creating your
              website, creating.
            </p>
          </div>
          <div className="col-span-1 flex-col">
            <h1 className="text-2xl font-bold">Overview</h1>
            <div className="mt-4">
              <Link href="/">Services</Link>
            </div>
            <div className="mt-4">
              <Link href="/">About Us</Link>
            </div>
            <div className="mt-4">
              <Link href="/">Contact Us</Link>
            </div>
            <div className="mt-4">
              <Link href="/">FAQ</Link>
            </div>
          </div>
          <div className="col-span-1 flex-col">
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="mt-4">
              <Link href="/">Web Development</Link>
            </div>
            <div className="mt-4">
              <Link href="/">Graphic Design</Link>
            </div>
            <div className="mt-4">
              <Link href="/">Social Media Marketing</Link>
            </div>
          </div>
          <div className="col-span-1 flex-col">
            <h1 className="text-2xl font-bold">About Us</h1>
            <div className="mt-4">
              <Link href="/">Who are we?</Link>
            </div>
            <div className="mt-4">
              <Link href="/">Vision</Link>
            </div>
            <div className="mt-4">
              <Link href="/">Mision</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
