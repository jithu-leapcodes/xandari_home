"use client";

import Card from "./Card";
import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const CardGroup = () => {
  return (
    <div className="w-full flex items-start justify-start px-10">
      {/* LEFT COLUMN */}
      <div className="w-1/2 flex flex-col items-center gap-10 pr-10">
        <Card
          title="Thoughtfully Crafted Luxury Rooted in Nature"
          des1="Xandari Resorts is a collection of thoughtfully designed retreats set amidst some of the most breathtaking landscapes."
          des2="Each Xandari destination is shaped by its surroundings—architecturally, culturally, and experientially."
        />

        <motion.div
          className="w-full aspect-[544/777]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Image
            src="/images/card_image2.png"
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
            alt="img 2"
          />
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-1/2 flex flex-col items-center gap-10">
        <motion.div
          className="w-full aspect-[682/863]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Image
            src="/images/card_image1.png"
            alt="img 1"
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <Card
          title="Thoughtfully Crafted Luxury Rooted in Nature"
          des1="Xandari Resorts is a collection of thoughtfully designed retreats set amidst some of the most breathtaking landscapes."
          des2="Each Xandari destination is shaped by its surroundings—architecturally, culturally, and experientially."
        />
      </div>
    </div>
  );
};

export default CardGroup;
