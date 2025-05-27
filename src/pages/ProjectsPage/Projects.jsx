import React from "react";
import Main from "../../components/layout/Main";

const Projects = () => {
  return (
    <Main id="projects">
      <section className="section-cover w-full h-fit text-white">
        <div className="p-10">
          <div className="w-fit lg:p-4 bg-[#0E9577]">
            {/* text */}
            <h1 className="bottom-10 tracking-widest text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[3px_2px_0px_black] lg:drop-shadow-[4px_3px_0px_black]">
              PROJECTS
            </h1>
          </div>
          <div>React</div>
          <div>JavaScript</div>
          <div>TailwindCSS</div>
          <img src=".\assets\projects\artemis-spire-ss.png" />
          <p>
            * This is a personal project and unofficial redesign inspired by my
            work at Aries Technology. All assets have been recreated or replaced
            with open-source alternatives.
          </p>
          <a
            href="https://artemis-spire.vercel.app/"
            className="text-xl md:text-2xl lg:text-2xl mt-2 font-bold"
          >
            ARTEMIS SPIRE
          </a>
        </div>
      </section>
    </Main>
  );
};

export default Projects;
