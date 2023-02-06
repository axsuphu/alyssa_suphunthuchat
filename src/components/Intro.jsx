import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-28 pb-16">
      <h1 className="text-3xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
        Alyssa Suphunthuchat
      </h1>
      <p className="text-base md:text-xl mb-5 font-medium">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am skilled in front-end development and I love building modern and
        responsive web applications, making sure to keep the user's ease of
        experience in mind. I am always eager to learn and stay up to date with
        the latest development trends and techniques.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I build web applications with HTML, CSS, JavaScript, Bootstrap and
        Tailwind. In addition to front-end knowledge, I have experience in
        back-end development, which includes Node.JS, Express.JS, PostgreSQL,
        and RESTful APIs.
      </p>
      <h2 className="bg-black dark:bg-white text-white dark:text-black font-medium rounded p-2 mb-5 mt-5">
        Currently learning: Python, NoSQL, MongoDB
      </h2>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I really wanted to learn an OOP language so I chose Python due to it's
        popularity for writing reusable code and how easy it is to work with
        larger programs. Within the next few weeks, I would love to show what
        I've learned by making a web application that uses Python to fetch data
        from a non-relational database and build the frontend using Django.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        The next event I am hoping to participate in is the Emerging Talent
        Software Engineers Hackathon hosted by JPMorgan Chase
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Outside of coding, I love swing dancing, hiphop dancing, arranging
        flowers and making bouquets!
      </p>
    </div>
  );
}

export default Intro;
