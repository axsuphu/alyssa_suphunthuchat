import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Wrapper */}
        <div className="absolute inset-0 z-0">
          {/* Colored Background Image */}
          <img
            src="public\assets\background\background_start.png"
            alt="Colored Background Image"
            className="absolute w-full h-full object-cover"
          />
          {/* White Noise Image (Overlapping) */}
          <img
            src="public\assets\background\white_noise.png"
            alt="White Noise Image"
            className="absolute top-0 left-0 w-full h-full object-cover mix-blend-soft-light"
          />
        </div>
      </div>
    </>
  );
};

export default Background;
