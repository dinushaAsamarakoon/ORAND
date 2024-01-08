import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full mt-36">
      <div className="flex justify-center my-36">
        <h1 className="text-black font-inter font-bold text-5xl">Talk To Us</h1>
      </div>
      <div>
        <div className="flex mx-52 h-[15vh] shadow-2xl rounded-lg flex-col px-10 justify-center my-3">
          <h1 className="text-2xl text-black">Contact No.</h1>
          <p className="text-black text-xl">48463113135131351</p>
        </div>
        <div className="flex mx-52 h-[15vh] bg-[#4F9CF9] shadow-2xl rounded-lg flex-col px-10 justify-center  my-3">
          <h1 className="text-2xl text-[#043873] ">Address</h1>
          <p className="text-xl">Head of Talent Acquisition, North America</p>
        </div>
        <div className="flex mx-52 h-[15vh] bg-[#4F9CF9] shadow-2xl rounded-lg flex-col px-10 justify-center  my-3">
          <h1 className="text-2xl text-[#043873] ">Email Address</h1>
          <p className="text-xl">Head of Talent Acquisition, North America</p>
        </div>
      </div>
      <div className="flex h-full flex-col items-center bg-[#043873] shadow-2xl">
        <div className="flex justify-between py-32 flex-col items-center h-[70vh]">
          <h1 className="font-inter font-bold text-5xl">Try ORAND today</h1>
          <p>Get started for free.</p>
          <p>Add your whole team as your needs grow. </p>
          <div className="flex flex-wrap justify-start my-3">
            <button className="flex flex-row bg-[#4F9CF9] px-8 py-2 rounded-lg">
              <span className="mr-2">Contact Us</span>
              <img src="/assets/icons/right_arrow_white.svg" />
            </button>
          </div>
          <p>On a big team? Contact Sales</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
