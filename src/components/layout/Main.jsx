import React from "react";

const Main = ({ id, children }) => {
  return (
    <main
      id={id}
      className={`relative flex justify-center bg-transparent md:w-2/3 lg:w-4/5 md:items-center`}
    >
      {children}
    </main>
  );
};

export default Main;
