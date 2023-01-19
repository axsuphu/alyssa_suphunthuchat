import React from "react";
import socials from "../data/socials";
import SocialItem from "./SocialItem";

function Socials() {
  return (
    <div className="flex flex-row items-center justify-center mb-20 ">
      <div className="flex flex-row items-center justify-center">
        {socials.map((account) => (
          <SocialItem
            website={account.website}
            imgUrl={account.imgUrl}
            username={account.username}
            link={account.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Socials;
