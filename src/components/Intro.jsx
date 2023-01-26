import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-28 pb-16">
      <h1 className="text-3xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
        Alyssa Suphunthuchat
      </h1>
      <p className="text-base md:text-xl mb-5 font-medium">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am skilled in front-end development, with a focus on building modern
        and responsive web applications using HTML, CSS, JavaScript, Bootstrap
        and Tailwind. In addition to front-end knowledge, I have experience in
        back-end development, which includes Node.JS, Express.JS, PostgreSQL,
        and RESTful APIs. I am always eager to learn and stay up to date with
        the latest development trends and techniques.
      </p>
      <h2 className="bg-black dark:bg-white text-white dark:text-black font-medium rounded p-2 mb-5">
        Currently learning: Python, NoSQL, MongoDB
      </h2>
    </div>
  );
}

export default Intro;
