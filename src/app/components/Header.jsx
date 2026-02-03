"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa";
import Image from "next/image";

const Header = ({ animate }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.set(headerRef.current, {
      autoAlpha: 0,
      y: 40,
    });
  }, []);

  useEffect(() => {
    if (!animate) return;

    gsap.to(headerRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, [animate]);

  return (
    <div ref={headerRef} className="w-full p-4 grid grid-cols-3 items-center">
      <div className="flex justify-start">
        <FaGripLines className="text-[1.25rem] text-white cursor-pointer" />
      </div>

      <div className="flex justify-center">
        <div className="w-40">
          <Image
            src="/images/logo_1.png"
            alt="Logo"
            className="w-full object-contain  h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="group flex items-center justify-center w-[175px] h-[45px] rounded-[10px] bg-white cursor-pointer gap-[0.85rem]">
          <p className="text-[#273880]">Book Now</p>
          <RiArrowRightUpLine className="text-[#273880]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
