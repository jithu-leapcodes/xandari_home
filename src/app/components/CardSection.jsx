import React from "react";
import LandingDescription from "./LandingDescription";
import CardGroup from "./CardGroup";

const CardSection = () => {
  return (
    <div
      className="   w-full
        flex flex-col
        items-center
        justify-center
        gap-15
        py-15 bg-white"
    >
      <LandingDescription />
      <CardGroup />
    </div>
  );
};

export default CardSection;
