import React from "react";

const Card = ({ title, des1, des2 }) => {
  return (
    <div
      className="
        flex flex-col
        items-start
        gap-3
      "
    >
      <p className="fontcronos text-[1.25rem] text-[#A77841]">
        About Xandari Resorts
      </p>

      <p
        className="
          fontcronos
          text-[1.5rem]
          text-[#273880]
          max-w-[900px]
          leading-relaxed
        "
      >
        {title}
      </p>

      <div className="flex flex-col gap-[0.25rem]">
        <p className="fontcronos text-[1rem] text-[#000000]">{des1}</p>

        <p className="fontcronos text-[1rem] text-[#000000]">{des2}</p>
      </div>

      <div
        className="
          group
          relative
          flex items-center justify-center
          w-[160px] h-[40px]
          rounded-[30px]
          border border-[#273880]
          bg-transparent
          cursor-pointer
          transition-all duration-300 ease-out
          hover:bg-[#273880]
          hover:-translate-y-[2px]
          hover:shadow-lg
          active:scale-[0.96]
        "
      >
        <p
          className="
            fontcronos
            text-[1rem]
            font-normal
            text-[#273880]
            transition-colors duration-300
            group-hover:text-white
          "
        >
          Explore More
        </p>
      </div>
    </div>
  );
};

export default Card;
