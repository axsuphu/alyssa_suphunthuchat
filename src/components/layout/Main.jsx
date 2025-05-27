import React from "react";

const Main = ({ id, children }) => {
  return (
    <main id={id} className={`w-2/3 lg:w-3/4 w-max-1920`}>
      {children}
    </main>
  );
};

export default Main;
