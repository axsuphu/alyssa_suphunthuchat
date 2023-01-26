import React from "react";

function SocialItem({ website, imgUrl, username, link }) {
  return (
    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center md:justify-center lg:justify-center gap-4 mb-4 ml-7"
    >
      <img
        src={imgUrl}
        alt="social"
        className="w-1/5 cursor-pointer dark:bg-white rounded-md p-1"
      />
      <div>
        <h3 className="text-lg md:text-xl dark:text-white mt-2 md:mt-3 font-semibold">
          {website}
        </h3>
        <h4 className="text-xs md:text-sm dark:text-white">{username}</h4>
      </div>
    </a>
  );
}

export default SocialItem;
