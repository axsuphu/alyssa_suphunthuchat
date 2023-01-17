import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Alyssa
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am skilled in front-end development, with a focus on building modern
        and responsive web applications using HTML, CSS, JavaScript, Bootstrap
        and Tailwind. In addition to front-end knowledge, I have experience in
        back-end development, which includes Node.JS, Express.JS, PostgreSQL,
        and RESTful APIs. I am always eager to learn and stay up to date with
        the latest development trends and techniques.
      </p>
    </div>
  );
}

export default Intro;
