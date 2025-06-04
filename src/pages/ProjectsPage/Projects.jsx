import React from "react";
import Main from "../../components/layout/Main";

const Projects = () => {
  const techStack = ["React", "Javscript", "TailwindCSS"];

  return (
    <Main id="projects">
      <div className="section-cover w-full h-fit text-white 2xl:my-16">
        <div className="p-10">
          {/* Header */}
          <div className="w-fit p-2 lg:p-4 bg-slate-400">
            <h1 className="bottom-10 tracking-widest text-3xl font-black sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[3px_2px_0px_black] lg:drop-shadow-[4px_3px_0px_black]">
              PROJECTS
            </h1>
          </div>
          {/* Content */}
          <section id="artemis-spire" className="flex flex-col my-4">
            {/* Website link */}
            <a
              href="https://artemis-spire.vercel.app/"
              className="text-2xl lg:text-3xl mt-2 font-bold xl:font-black xl:my-10 tracking-wide"
            >
              ARTEMIS SPIRE
            </a>
            <div className="flex flex-col my-4">
              {/* Website preview */}
              <div>
                <img
                  src=".\assets\projects\artemis-spire-ss.png"
                  className="object-contain"
                />
              </div>
              {/* Tech stack */}
              <div className="flex text-sm lg:text-base text-white font-semibold justify-center m-1 lg:m-4 2xl:m-6">
                {techStack.map((item) => (
                  <div className="bg-slate-400 w-fit px-1.5 rounded-lg py-0.5 mx-1 xl:px-2 2xl:py-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Description */}
            <p className="text-base lg:text-lg">
              This is a personal project and unofficial redesign inspired by my
              work at Aries Technology.
              <br />
              <br />
              It’s aimed at a B2B audience—specifically, casino operators
              looking to discover and purchase our gaming software. I led both
              the UX/UI design and frontend development, reimagining the user
              experience to make product exploration and purchasing more
              intuitive.
            </p>
            <p className="text-sm my-6 lg:text-base lg:my-10 2xl:my-16">
              *All assets have been recreated or replaced with open-source
              alternatives.
            </p>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default Projects;
