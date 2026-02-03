import Image from "next/image";
import React from "react";
import Header from "./Header";

const HomeLanding = ({ animateHeader }) => {
  const items = [
    "Village Walks",
    "Mud Roads",
    "Fishing Boats",
    "Organic Farm",
    "Ayurvedic Wellness",
    "Edible Landscape",
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/landing.png"
        fill
        priority
        alt="landing"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col w-full h-full">
        <Header animate={animateHeader} />
        <div className="flex flex-1 items-center justify-center text-center">
          <div>
            <p className="fontcronos text-[3.5rem] text-white">
              Inspired Travels in India
            </p>
            <p className="fontcronos text-[3.5rem] text-white">& Costa Rica</p>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex items-center justify-center gap-[0.85rem] flex-wrap">
            {items.map((item, i) => (
              <React.Fragment key={item}>
                <p className="fontcronos text-white text-[1.25rem]">{item}</p>
                {i !== items.length - 1 && (
                  <span className="w-10 h-[0.15rem] bg-white rounded-md"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
