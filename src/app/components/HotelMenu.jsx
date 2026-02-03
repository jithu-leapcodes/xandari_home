"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const menuitems = [
  {
    name: "Breakfast",
    images: [
      { src: "/images/breakfast_1.png", title: "Pancakes with Berries" },
      { src: "/images/breakfast_2.png", title: "Croissant" },
      { src: "/images/breakfast_3.png", title: "Bullseye Eggs" },
      { src: "/images/breakfast_4.png", title: "Hot Coffee" },
    ],
  },
  {
    name: "Lunch",
    images: [
      { src: "/images/lunch_1.png", title: "Beef steak with veggies" },
      { src: "/images/lunch_2.png", title: "Hot Noodles" },
      { src: "/images/lunch_3.png", title: "Chicken Salad" },
      { src: "/images/lunch_4.png", title: "Macaroni and Cheese" },
    ],
  },
  {
    name: "Dinner",
    images: [
      { src: "/images/dinner_1.png", title: "Fresh Salad Bowl" },
      { src: "/images/dinner_2.png", title: "Chicken Platter" },
      { src: "/images/dinner_3.png", title: "Hamburger" },
      { src: "/images/dinner_4.png", title: "Rice Bowl" },
    ],
  },
];

// Background colors per section
const sectionBgColors = [
  "#E3C5B4BF", // Breakfast
  "#FFFFFF", // Lunch
  "#F1DED4", // Dinner
];

const HotelMenu = () => {
  const wrapperRef = useRef(null);
  const imageSectionsRef = useRef([]);
  const titleRef = useRef(null);

  const scrollDirection = useRef(1);
  const hasInteractedRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  /* --------------------------------
     TITLE ANIMATION
  --------------------------------- */
  const animateTitle = () => {
    if (!titleRef.current) return;

    const letters = titleRef.current.querySelectorAll(".title-letter");
    const isScrollingDown = scrollDirection.current === 1;

    gsap.killTweensOf(letters);

    gsap.fromTo(
      letters,
      {
        y: isScrollingDown ? -120 : 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: {
          each: 0.12,
          from: isScrollingDown ? "start" : "end",
        },
      },
    );
  };

  /* --------------------------------
     RESET TITLE WHEN LEAVING SECTION
  --------------------------------- */
  const resetTitle = () => {
    if (!titleRef.current) return;

    const letters = titleRef.current.querySelectorAll(".title-letter");
    gsap.killTweensOf(letters);
    gsap.set(letters, { opacity: 0, y: 0 });

    hasInteractedRef.current = false;
    setActiveIndex(0);
  };

  /* --------------------------------
     MAIN SCROLL TRIGGER
  --------------------------------- */
  useEffect(() => {
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        hasInteractedRef.current = false;
      },

      onLeave: resetTitle,
      onLeaveBack: resetTitle,

      onUpdate: (self) => {
        scrollDirection.current = self.direction;

        if (!hasInteractedRef.current) {
          hasInteractedRef.current = true;
          animateTitle();
        }
      },
    });
  }, []);

  /* --------------------------------
     CHANGE TITLE PER IMAGE SECTION
  --------------------------------- */
  useEffect(() => {
    imageSectionsRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "bottom top",
        onEnter: () => {
          if (index < menuitems.length - 1) {
            setActiveIndex(index + 1);
          }
        },
        onEnterBack: () => {
          setActiveIndex(index);
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  /* --------------------------------
     ANIMATE TITLE ON CHANGE
  --------------------------------- */
  useEffect(() => {
    if (!hasInteractedRef.current) return;
    animateTitle();
  }, [activeIndex]);

  /* --------------------------------
     BACKGROUND COLOR TRANSITION
  --------------------------------- */
  useEffect(() => {
    if (!wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      backgroundColor: sectionBgColors[activeIndex],
      duration: 1.2,
      ease: "power2.out",
    });
  }, [activeIndex]);

  return (
    <section ref={wrapperRef} className="relative w-full pb-5">
      {/* STICKY TITLE */}
      <div
        ref={titleRef}
        className="sticky top-0 h-screen flex items-center justify-center z-10 pointer-events-none"
      >
        <h1 className="text-[9.5rem] fontcronos font-bold text-black flex">
          {menuitems[activeIndex].name.split("").map((char, i) => (
            <span
              key={`${activeIndex}-${i}`}
              className="title-letter inline-block opacity-0"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      {/* IMAGE SECTIONS */}
      {menuitems.map((menu, idx) => (
        <div
          key={menu.name}
          ref={(el) => {
            if (el) imageSectionsRef.current[idx] = el;
          }}
          className="
            min-h-[200vh] w-full
            grid grid-cols-2 grid-rows-[1fr_1fr]
            place-items-center
            gap-x-24 gap-y-32
            px-24 py-32
          "
        >
          {menu.images.map((img, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center w-[428px] h-[498px]
                ${i === 1 || i === 3 ? "translate-y-[20%]" : ""}
              `}
              style={{
                zIndex: i === 0 || i === 3 ? 5 : 15,
              }}
            >
              <Image
                src={img.src}
                width={1000}
                height={1000}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <p className="mt-4 text-[1.5rem] text-black w-full">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default HotelMenu;
