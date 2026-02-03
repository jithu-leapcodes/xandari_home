"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/images/carousel_1.png",
  "/images/carousel_2.png",
  "/images/carousel_3.png",
  "/images/carousel_4.png",
];

const Carousel = ({ reveal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgStyle, setBgStyle] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-[560px] flex flex-col gap-8 ">
      <div
        className={`
    w-full overflow-hidden
    transition-all duration-700
    ease-[cubic-bezier(0.4,0,0.2,1)]
    ${reveal ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
  `}
      >
        <div
          className="flex transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${activeIndex * 560}px)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[560px] aspect-[16/9] relative overflow-hidden"
            >
              <Image
                src={src}
                alt={`main-${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative w-full flex justify-between pb-[0.5rem]"
        onMouseLeave={() => setIsHovering(false)}
      >
        {mounted && (
          <div
            className="
            absolute
            pointer-events-none
            bg-black/70
            backdrop-blur-md
            rounded-sm
            shadow-[0_12px_35px_rgba(0,0,0,0.55)]
            transition-[opacity,top,left,width,height]
            duration-500
            ease-[cubic-bezier(0.4,0,0.2,1)]
          "
            style={{
              opacity: isHovering ? 1 : 0,
              ...bgStyle,
            }}
          />
        )}

        {images.map((img, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              setIsHovering(true);
              setActiveIndex(index);
              const rect = e.currentTarget.getBoundingClientRect();
              const parentRect =
                e.currentTarget.parentElement.getBoundingClientRect();

              setBgStyle({
                width: rect.width + 12,
                height: rect.height + 12,
                top: rect.top - parentRect.top - 6,
                left: rect.left - parentRect.left - 6,
              });
            }}
            className={`
    relative w-30 aspect-[107/70] cursor-pointer z-10
    transition-all duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${reveal ? "opacity-100 translate-y-0" : "opacity-0"}
    ${!reveal && (index % 2 === 0 ? "translate-y-6" : "-translate-y-6")}
  `}
            style={{
              transitionDelay: reveal ? `${400 + index * 220}ms` : "0ms",
            }}
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image
                src={img}
                alt={`thumb-${index}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
