import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col font-sunflower font-bold">
      {/* Name */}
      <div className="text-5xl text-white gap-1 flex flex-col pb-3">
        <div className="relative w-fit">
          {/* text */}
          <div className="relative z-20 drop-shadow-[4px_3px_0px_black] px-1 tracking-widest">
            ALYSSA
          </div>
        </div>
        <div className="relative w-fit">
          {/* text */}
          <div className="relative z-20 drop-shadow-[4px_3px_0px_black] px-1 tracking-wider">
            SUPHUNTHUCHAT
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="text-2xl px-1">Frontend Engineer</div>
      {/* Socials */}
      <div className="text-lg px-1 text-white">
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
