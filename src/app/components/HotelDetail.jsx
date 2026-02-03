"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/hotel_1.png", title: "Mountain Escape in the Highlands" },
  { src: "/images/hotel_2.png", title: "Tropical Paradise in Central America" },
  { src: "/images/hotel_3.png", title: "Serene Forest Retreat" },
  { src: "/images/hotel_4.png", title: "Luxury Stay by the Lake" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction === "right" ? "100%" : "-100%",
  }),
  center: {
    x: "0%",
  },
  exit: (direction) => ({
    x: direction === "right" ? "-100%" : "100%",
  }),
};

const ImageSlot = ({ image, direction, isMain }) => {
  return (
    <AnimatePresence custom={direction} mode="sync">
      <motion.div
        key={image.src}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
        style={{ zIndex: isMain ? 2 : 1 }}
        whileHover={isMain ? { scale: 1.05 } : {}}
      >
        <Image src={image.src} alt="hotel" fill className="object-cover" />
      </motion.div>
    </AnimatePresence>
  );
};

const HotelDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const total = images.length;

  const leftIndex = (activeIndex - 1 + total) % total;
  const rightIndex = (activeIndex + 1) % total;

  const next = () => {
    setDirection("right");
    setActiveIndex((i) => (i + 1) % total);
  };

  const prev = () => {
    setDirection("left");
    setActiveIndex((i) => (i - 1 + total) % total);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 py-16 bg-white">
      <div className="w-1/2 text-center space-y-4">
        <p className="text-[#273880] text-[2.5rem] fontcronos">
          Authentic Experiences by Xandari Resorts
        </p>
        <p className="text-[1.25rem] fontcronos">
          Xandari Resorts is a collection of thoughtfully designed retreats set
          amidst some of the most breathtaking landscapes. Rooted in
          sustainability and guided by a deep respect for nature, we create
          spaces where contemporary comfort blends seamlessly with the
          environment.
        </p>
      </div>

      <div className="flex flex-col items-center justify-start gap-3">
        <div className="flex items-start gap-6">
          <div className="relative w-[412px] h-[281px] overflow-hidden">
            <ImageSlot image={images[leftIndex]} direction={direction} />
          </div>
          <div className="relative w-[602px] h-[400px] overflow-hidden">
            <ImageSlot
              image={images[activeIndex]}
              direction={direction}
              isMain
            />
          </div>
          <div className="relative w-[412px] h-[281px] overflow-hidden">
            <ImageSlot image={images[rightIndex]} direction={direction} />
          </div>
        </div>

        <p className="text-[#273880] text-[1.5rem] fontcronos">
          {images[activeIndex].title}
        </p>
        <div className="flex items-center gap-3">
          <MdKeyboardArrowLeft
            className="text-4xl cursor-pointer"
            onClick={prev}
          />
          <p className="text-[#273880] text-[1.5rem] fontcronos">
            {activeIndex + 1}/{total}
          </p>
          <MdKeyboardArrowRight
            className="text-4xl cursor-pointer"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
