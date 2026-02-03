import React from "react";

const LandingDescription = () => {
  return (
    <div
      className="
        w-full
        flex flex-col
        items-center
        justify-center
        gap-6
        text-center
      "
    >
      <p className="fontcronos text-[1.25rem] text-[#A77841]">
        Edible Landscape
      </p>

      <p
        className=" fontcronos
          text-[1.75rem]
          text-[#273880]
          max-w-[900px]
          leading-relaxed
        "
      >
        An exquisite collection of eco-luxury resorts across Kerala, Xandari
        Resorts offers thoughtfully designed stays set amidst pristine
        landscapes. Experience refined hospitality, immersive local experiences,
        world-class amenities
      </p>
    </div>
  );
};

export default LandingDescription;
