"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "BLUE PEARL VILLA",
    image: "/images/product.png",
  },
  {
    title: "G PEARL VILLA",
    image: "/images/product_image_1.png",
  },
  {
    title: "SUNSET VILLA",
    image: "/images/product_image_4.png",
  },
  {
    title: "SUNSET VILLA",
    image: "/images/product_image_3.png",
  },
];

const ProductDetail = () => {
  const sectionRef = useRef(null);
  const screenRef_1 = useRef(null);
  const screenRef_2 = useRef(null);
  const screenRef_3 = useRef(null);
  const screenRef_4 = useRef(null);
  const numberRefs = useRef([]);
  const isAnimatingRef = useRef(false);
  const scrollWrapperRef = useRef(null);

  numberRefs.current = [];
  const ANIMATION_RESET_DELAY = 500;

  const [isInView, setIsInView] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [numbersAnimated, setNumbersAnimated] = useState(false);

  const setNumberRef = (el) => {
    if (el && !numberRefs.current.includes(el)) {
      numberRefs.current.push(el);
    }
  };

  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          setIsInView(true);
          setAnimate(true);
          setNumbersAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    setAnimate(false);

    const t = setTimeout(() => {
      setAnimate(true);
      isAnimatingRef.current = false;
    }, ANIMATION_RESET_DELAY);

    return () => clearTimeout(t);
  }, [activeIndex]);

  useEffect(() => {
    const totalSteps = steps.length;
    const progressBars = numberRefs.current.map((el) =>
      el.querySelector(".progress"),
    );

    gsap.set(progressBars, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    ScrollTrigger.create({
      trigger: scrollWrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => {
        const totalProgress = self.progress * totalSteps;
        const active = Math.min(Math.floor(totalProgress), totalSteps - 1);

        setActiveIndex(active);

        progressBars.forEach((bar, index) => {
          if (index < active) {
            gsap.set(bar, { scaleX: 1 });
          } else if (index === active) {
            gsap.set(bar, { scaleX: totalProgress - active });
          } else {
            gsap.set(bar, { scaleX: 0 });
          }
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative h-[500vh] w-full " ref={scrollWrapperRef}>
      <div className="h-screen w-full sticky top-0" ref={sectionRef}>
        <Image
          src={steps[activeIndex].image}
          fill
          priority
          alt={steps[activeIndex].title}
          className="object-cover transition-opacity duration-500"
        />

        <div className="absolute inset-0 z-10 p-4 flex items-center justify-center">
          <div className="flex flex-col items-start justify-start w-[90%] gap-4">
            <div
              className={clsx(
                "overflow-hidden transition-all duration-700 ease-out delay-[600ms]",
                isInView && animate
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none delay-0",
              )}
            >
              <div
                className={clsx(
                  "transition-all duration-700 ease-out",
                  isInView && animate
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95",
                )}
              >
                <div className="group flex items-center justify-center w-[180px] h-[45px] rounded-[10px] border-2 border-white gap-3">
                  <p className="fontcronos text-white">
                    {" "}
                    {steps[activeIndex].title}
                  </p>
                  <IoIosArrowDown className="text-white" />
                </div>
              </div>

              <div className="flex items-end justify-between w-full gap-10">
                <div className="flex flex-col items-start justify-start w-1/2 gap-4">
                  <p
                    className={clsx(
                      "fontcronos text-[1.5rem] text-white transition-all duration-700 ease-out delay-[120ms]",
                      isInView && animate
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6",
                    )}
                  >
                    {steps[activeIndex].title}
                  </p>

                  <p
                    className={clsx(
                      "fontcronos text-[1rem] text-white transition-all duration-700 ease-out delay-[240ms]",
                      isInView && animate
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6",
                    )}
                  >
                    This is the perfect private pool villa where there is no
                    last call for a swim! The airy shower and ensuite are open
                    to the sky, a unique experience like none other. The large
                    folding doors open to the pool, garden and fresh air, you
                    can even hear the sound of the waves.
                  </p>
                  <div
                    className={clsx(
                      "transition-all duration-700 ease-out delay-[360ms] pb-[0.5rem]",
                      isInView && animate
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6",
                    )}
                  >
                    <div className="group w-[160px] h-[40px] rounded-full border border-white flex items-center justify-center hover:bg-white transition">
                      <p className="fontcronos text-white group-hover:text-[#273880]">
                        Explore More
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-center w-1/2">
                  <Carousel reveal={isInView && animate} />
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full mt-8">
              {["01", "02", "03", "04"].map((num, index) => (
                <div
                  key={num}
                  ref={setNumberRef}
                  className={clsx(
                    "flex flex-col items-start justify-start transition-all duration-700 ease-out",
                    numbersAnimated
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6",
                  )}
                  style={{
                    transitionDelay: numbersAnimated
                      ? `${index * 120}ms`
                      : "0ms",
                  }}
                >
                  <p
                    className={clsx(
                      "fontcronos text-[1.15rem]",
                      index === activeIndex ? "text-white" : "text-white/50",
                    )}
                  >
                    {num}
                  </p>

                  <div className="relative w-70 h-[2px] my-2">
                    <div className="absolute inset-0 bg-white/30" />

                    <div
                      className="absolute left-0 top-0 h-full w-full bg-white progress"
                      style={{
                        transformOrigin: "left center",
                        transform: "scaleX(0)",
                      }}
                    />
                  </div>

                  <p
                    className={clsx(
                      "fontcronos text-[1.35rem] mt-3",
                      index === activeIndex ? "text-white" : "text-white/50",
                    )}
                  >
                    {steps[index].title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen" ref={screenRef_1}></div>
      <div className="w-full h-screen" ref={screenRef_2}></div>
      <div className="w-full h-screen" ref={screenRef_3}></div>
      <div className="w-full h-screen" ref={screenRef_4}></div>
    </section>
  );
};

export default ProductDetail;
