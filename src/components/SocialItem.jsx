import React from "react";

function PortfolioItem({ website, imgUrl, username, link }) {
  return (
    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center justify-center gap-4"
    >
      <img src={imgUrl} alt="social" className="w-1/4 cursor-pointer" />
      <div>
        <h3 className="text-lg md:text-xl dark:text-white mt-2 md:mt-3 font-semibold">
          {website}
        </h3>
        <h4 className="text-xs md:text-sm dark:text-white">{username}</h4>
      </div>
    </a>
  );
}

export default PortfolioItem;
