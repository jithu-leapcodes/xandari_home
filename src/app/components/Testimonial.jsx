"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TbArrowLeftDashed, TbArrowRightDashed } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const testData = [
  {
    img: "/images/testimoni_1.png",
    name: "Aaron Mitchell",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
  {
    img: "/images/testimoni_2.png",
    name: "Sarah Johnson",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    img: "/images/testimoni_3.png",
    name: "Emily Davis",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  },
  {
    img: "/images/testimoni_4.png",
    name: "Michael Brown",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    img: "/images/testimoni_5.png",
    name: "Olivia Wilson",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [turning, setTurning] = useState(false);

  const next = () => {
    if (turning) return;
    setDirection(1);
    setTurning(true);
    setIndex((prev) => (prev + 1) % testData.length);
  };

  const prev = () => {
    if (turning) return;
    setDirection(-1);
    setTurning(true);
    setIndex((prev) => (prev - 1 + testData.length) % testData.length);
  };

  const current = testData[index];
  const nextIndex = (index + direction + testData.length) % testData.length;
  const nextItem = testData[nextIndex];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-16 px-12 bg-white">
      <div className="bg-[#F4EFEB] w-full h-full flex items-center">
        <div className="px-10 flex items-start w-full">
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-[80%] flex flex-col gap-4">
              <p className="text-[#273880] text-[2.25rem] fontcronos">
                Trusted by Those We Serve
              </p>
              <p className="text-[#273880] text-[1.15rem] fontcronos">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
              </p>
            </div>
          </div>

          <div className="relative w-[322px] h-[446px] perspective-[1400px]">
            <div className="absolute inset-0 translate-x-[-12%] translate-y-[9%] scale-[0.96] opacity-30">
              <Image
                src={nextItem.img}
                alt="next"
                fill
                className="object-cover "
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0 z-10  overflow-hidden shadow-2xl"
                initial={{
                  x: direction === 1 ? 60 : -60,
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  x: direction === 1 ? -80 : 80,
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                  setTurning(false);
                }}
              >
                <Image
                  src={current.img}
                  alt="current"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 self-center flex flex-col gap-6">
            <div className="h-[338px] bg-white w-full p-6 flex flex-col gap-6">
              <p className="text-[#273880] text-[2rem] fontcronos">
                {current.name}
              </p>
              <p className="text-[#273880] text-[1.15rem]">{current.text}</p>
            </div>

            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={prev}
                className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-white transition
                  ${index === 0 ? "text-[#273880]" : "text-[#273880B2]"}`}
              >
                <TbArrowLeftDashed className="text-[1.15rem]" />
              </button>

              <button
                onClick={next}
                className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-white transition
                  ${index !== 0 ? "text-[#273880]" : "text-[#273880B2]"}`}
              >
                <TbArrowRightDashed className="text-[1.15rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
