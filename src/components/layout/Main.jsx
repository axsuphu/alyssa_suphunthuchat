import React from "react";

const Main = ({ id, children }) => {
  return (
    <main
      id={id}
      className={`w-screen relative flex justify-center bg-transparent md:w-2/3 h-screen items-center`}
    >
      {children}
    </main>
  );
};

export default Main;
