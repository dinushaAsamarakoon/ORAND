// Import the necessary libraries
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

// Define the Footer component
const Footer: FC = () => {
  return (
    <div className="w-full sm:h-[50vh] bg-[#043873] flex items-center justify-between flex-col ">
      <div className="flex mx-auto w-full h-full items-center justify-center">
        <div className="text-white flex-wrap items-start justify-between px-4 grid sm:grid-cols-5 lg:mx-28">
          <div className="col-span-2 flex-col mx-auto sm:mr-28 justify-center py-24 sm:py-0">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/assets/icons/logo.png"
                height={30}
                width={28}
                alt="logo"
              ></Image>
              <h1 className="text-4xl ml-2">ORAND</h1>
            </div>
            <p className="flex pt-10 text-center">
              ORAND was created for making your works easy by creating your
              website, creating.
            </p>
          </div>
          <div className="col-span-1 flex-col mb-5 sm:mb-0">
            <h1 className="text-2xl font-bold">Overview</h1>
            <div className="mt-4">
              <Link href="#home">Home</Link>
            </div>
            <div className="mt-4">
              <Link href="#services">Services</Link>
            </div>
            <div className="mt-4">
              <Link href="#about">About Us</Link>
            </div>
            <div className="mt-4">
              <Link href="#contact">Contact Us</Link>
            </div>
            <div className="mt-4">
              <Link href="/">FAQ</Link>
            </div>
          </div>
          <div className="col-span-1 flex-col mb-5 sm:mb-0">
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="mt-4">
              <Link href="#web_development">Web Development</Link>
            </div>
            <div className="mt-4">
              <Link href="#graphic_design">Graphic Design</Link>
            </div>
            <div className="mt-4">
              <Link href="#social_media_marketing">Social Media Marketing</Link>
            </div>
          </div>
          <div className="col-span-1 flex-col mb-5 sm:mb-0">
            <h1 className="text-2xl font-bold">About Us</h1>
            <div className="mt-4">
              <Link href="#who_are_we">Who are we?</Link>
            </div>
            <div className="mt-4">
              <Link href="#vision">Vision</Link>
            </div>
            <div className="mt-4">
              <Link href="#mission">Mision</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end my-5 text-center">
        <h1 className="text-white">©2024 ORAND All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
