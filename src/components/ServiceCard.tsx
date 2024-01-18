import React from "react";
import { FC } from "react";

type cardData = {
  title: string;
  content: string;
  image: string;
  row: string;
  id: string;
};

const ServiceCard: FC<cardData> = ({ title, content, image, row, id }) => {
  return (
    <div id={id} className="pt-[70px]">
      <div className="mx-2 sm:w-[70vw] sm:mx-auto bg-[#FFE492] shadow-md overflow-hidden rounded-3.5xl md:rounded-8xl lg:rounded-6xl ">
        <div className={`lg:flex ${row}`}>
          <div className="w-full lg:w-1/2">
            <img className="h-full w-full" src={image} alt="An image" />
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 px-2 flex-col justify-between mb-10 mt-2 sm:my-10">
            <div className="tracking-wide text-2xl sm:text-5xl text-[#212529] font-bold font-inter ">
              {title}
            </div>
            <p className="mb-2 text-[#212529] text-indent[50%]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {content}
            </p>
            <div className="flex flex-wrap">
              <button className="bg-[#4F9CF9] px-12 py-3 rounded-2xl flex flex-row items-center mb-2">
                <span className="mr-2">Request</span>
                <img src="/assets/icons/right_arrow_white.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
