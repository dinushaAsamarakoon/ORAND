import React from "react";
import { FC } from "react";

type cardData = {
  title: string;
  content: string;
  image: string;
  row: string;
};

const ServiceCard: FC<cardData> = ({ title, content, image, row }) => {
  return (
    <div className="my-20 w-[70vw] mx-auto bg-[#FFE492] shadow-md overflow-hidden rounded-6xl">
      <div className={`flex grid-cols-2 ${row}`}>
        <div className="w-1/2 p-8 flex-col justify-between my-10">
          <div className="uppercase tracking-wide text-5xl text-[#212529] font-bold font-inter">
            {title}
          </div>
          <p className="mt-2 text-[#212529]">{content}</p>
          <div className="flex flex-wrap">
            <button className="bg-[#4F9CF9] px-12 py-3 rounded-2xl flex flex-row">
              <span className="mr-2">Request</span>
              <img src="/assets/icons/right_arrow_white.svg"></img>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="h-full w-full" src={image} alt="An image" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
