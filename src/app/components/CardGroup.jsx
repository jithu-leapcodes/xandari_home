"use client";

import Card from "./Card";
import Image from "next/image";
import { useSectionReveal } from "./useReveal";

const CardGroup = () => {
  const { sectionRef, active } = useSectionReveal();

  return (
    <div
      ref={sectionRef}
      className="w-full flex items-start justify-start px-10"
    >
      {/* LEFT COLUMN */}
      <div className="w-1/2 flex flex-col items-center gap-10 pr-10">
        <Card
          title="Thoughtfully Crafted Luxury Rooted in Nature"
          des1="Xandari Resorts is a collection of thoughtfully designed retreats set amidst some of the most breathtaking landscapes."
          des2="Each Xandari destination is shaped by its surroundings—architecturally, culturally, and experientially."
        />

        <div
          className={`reveal w-full aspect-[544/777] ${
            active ? "is-visible" : ""
          }`}
        >
          <Image
            src="/images/card_image2.png"
            alt="img 2"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-1/2 flex flex-col items-center gap-10">
        <div
          className={`reveal w-full aspect-[682/863] ${
            active ? "is-visible" : ""
          }`}
        >
          <Image
            src="/images/card_image1.png"
            alt="img 1"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

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
