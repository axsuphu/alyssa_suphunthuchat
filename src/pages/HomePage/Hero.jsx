import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col font-sunflower font-bold">
      {/* Name */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white lg:gap-1 flex flex-col lg:pb-3 drop-shadow-[3px_2px_0px_black] lg:drop-shadow-[4px_3px_0px_black] relative">
        <div className="relative w-fit">
          {/* text */}
          <h1 className="tracking-widest">ALYSSA</h1>
        </div>
        <div className="relative w-fit">
          {/* text */}
          <h1 className="tracking-wider">SUPHUNTHUCHAT</h1>
        </div>
      </div>
      {/* Title */}
      <div className="text-2xl md:text-3xl lg:text-2xl">Frontend Engineer</div>
      {/* Socials */}
      <div className="text-xl md:text-2xl lg:text-lg mt-2 text-white">
        <ul className="flex list-none gap-2">
          <li>
            <a href="https://www.linkedin.com/in/alyssa-suphunthuchat/">
              LinkedIn
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="https://github.com/axsuphu">Github</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
