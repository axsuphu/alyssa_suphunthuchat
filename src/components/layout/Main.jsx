import React from "react";

const Main = ({ id, children }) => {
  return (
    <main id={id} className={`w-11/12 md:w-3/4 w-max-1920`}>
      {children}
    </main>
  );
};

export default Main;
