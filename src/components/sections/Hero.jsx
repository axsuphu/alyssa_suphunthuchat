import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col font-sunflower font-bold">
      {/* Name */}
      <div className="text-4xl text-white gap-1 flex flex-col pb-3">
        <div className="relative w-fit">
          {/* text */}
          <div className="relative z-20 drop-shadow-[2px_2px_0px_black] px-1 tracking-widest">
            ALYSSA
          </div>
          {/* black box */}
          <div className="absolute inset-x-0 bottom-1 z-10 bg-black w-full h-2/5" />
        </div>
        <div className="relative w-fit">
          {/* text */}
          <div className="relative z-20 drop-shadow-[2px_2px_0px_black] px-1 tracking-wider">
            SUPHUNTHUCHAT
          </div>
          {/* black box */}
          <div className=" absolute inset-x-0 bottom-1 z-10 bg-black w-full h-2/5" />
        </div>
      </div>
      {/* Title */}
      <div className="text-xl px-1">Frontend Engineer</div>
      {/* Socials */}
      <div className="text-md px-1">Github | LinkedIn</div>
    </section>
  );
};

export default Hero;
