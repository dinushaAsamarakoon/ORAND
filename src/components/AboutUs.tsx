import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="pt-[70px]">
      <div className="w-full bg-[#043873] grid grid-cols-2 py-20 px-32">
        <div className="flex items-center">
          <h1 className="text-5xl font-inter font-bold">About Us</h1>
        </div>
        <div>
          <img src="/assets/images/aboutus_section.png"></img>
        </div>
      </div>
      <div className="flex lg:grid lg:grid-cols-3 flex-wrap my-20 mx-10">
        <div
          id="who_are_we"
          className="flex flex-col items-center justify-start px-10 py-[70px] lg:pb-5 rounded-lg border-solid border-2 border-[#FFE492] lg:mx-6 mb-4 lg:mb-0"
        >
          <h1 className="text-black text-2xl font-bold font-inter my-3">
            Who are we?
          </h1>
          <p className="text-black">
            As a preeminent supplier of web development, graphic design, and
            social media marketing services, we are dedicated to offering
            cutting-edge solutions that support the objectives of our clients.
            Our brilliant team of specialists has a strong understanding of
            technology and a passion for creativity, which enables us to produce
            ideas that are engaging and inspiring. Our staff has the knowledge
            and experience to make your idea a reality, whether you require a
            brand-new website, a gorgeous logo, or a thorough social media
            marketing campaign. We take great delight in collaborating with our
            clients on each project to fully grasp their particular requirements
            and goals. At Vector Solutions, we're committed to providing
            outstanding outcomes and assisting our clients in standing out from
            the crowd.
          </p>
        </div>
        <div
          id="vision"
          className="flex flex-col items-center bg-[#043873] justify-start px-10 py-[70px] rounded-lg mb-4 lg:mb-0"
        >
          <h1 className="text-2xl font-bold font-inter my-3">Vision</h1>
          <p>
            At XYZ Company, we picture a world in which people and organizations
            can take advantage of the internet's power to realize their
            aspirations and realize their full potential. By offering
            cutting-edge site development, graphic design, and social media
            marketing services that help our clients stand out in a congested
            online marketplace, we consider ourselves as a crucial partner in
            this digital journey. Our mission is to be the premier supplier of
            digital solutions that produce quantifiable outcomes and assist our
            clients in thriving in a constantly changing digital environment. To
            stay ahead of the curve and maintain our dedication to great quality
            and client happiness, we consistently develop and evolve our
            services. One client at a time, we at XYZ Company are committed to
            improving the digital world.
          </p>
        </div>
        <div
          id="mission"
          className="flex flex-col items-center justify-start px-10 py-[70px] rounded-lg border-solid border-2 border-[#FFE492] lg:mx-6"
        >
          <h1 className="text-black text-2xl font-bold font-inter my-3">
            Mission
          </h1>
          <p className="text-black">
            Our goal at XYZ Company is to enable people and organizations to
            prosper in the digital age. We assist our clients in efficiently
            communicating their message, engaging their audience, and expanding
            their online presence through our specialized site building, graphic
            design, and social media marketing services. We are dedicated to
            offering cutting-edge solutions that are crafted to satisfy the
            particular requirements of each client, delivered with great
            quality, and supported by our unrelenting commitment to client
            satisfaction. Vector Solutions aspires to be the go-to partner for
            companies looking to accomplish their digital objectives and scale
            new heights of success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
