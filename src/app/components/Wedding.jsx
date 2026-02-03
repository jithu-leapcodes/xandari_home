"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const weddingData = [
  {
    img: "/images/wedding_1.png",
    title: "Wedding at Xandari",
    des: "Experience a magical wedding at Xandari, where every moment is filled with love and enchantment.",
  },
  {
    img: "/images/wedding_2.png",
    title: "Elegant Wedding Venues",
    des: "Our elegant wedding venues are designed to create unforgettable moments for your special day.",
  },
  {
    img: "/images/wedding_3.png",
    title: "Customized Wedding Packages",
    des: "Choose from our customized wedding packages to make your dream wedding a reality.",
  },
  {
    img: "/images/wedding_4.png",
    title: "Exquisite Wedding Cuisine",
    des: "Savor exquisite wedding cuisine crafted by our talented chefs, tailored to your preferences.",
  },
  {
    img: "/images/wedding_5.png",
    title: "Stunning Wedding Photography",
    des: "Capture every beautiful moment with our stunning wedding photography services.",
  },
];

const Wedding = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const firstContentRef = useRef(null);
  const textContentRefs = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const resizeTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + window.innerHeight,
            scrub: true,
          },
        });
        resizeTl.fromTo(
          imageWrapperRef.current,
          { width: "100%", height: "100%" },
          {
            width: "754px",
            height: "350px",
            ease: "none",
          },
        );
        resizeTl.to(
          firstContentRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "none",
          },
          "<",
        );

        textContentRefs.current.forEach((panel, i) => {
          gsap.fromTo(
            imagesRef.current[i],
            { y: "0%" },
            {
              y: "-105%",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom-=10",
                end: "top top",
                scrub: true,
              },
            },
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !textContentRefs.current.includes(el)) {
      textContentRefs.current.push(el);
    }
  };

  const addImgRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="relative bg-[#050817]">
      <div
        ref={stickyRef}
        className="h-screen sticky top-0 overflow-hidden flex items-center justify-center z-0"
      >
        <div
          ref={imageWrapperRef}
          className="relative w-full h-full overflow-hidden"
        >
          {weddingData.map((data, index) => (
            <div
              key={index}
              ref={addImgRefs}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: weddingData.length - index }}
            >
              <Image
                src={data.img}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <div
            ref={firstContentRef}
            className="absolute top-0 left-0 p-10 z-20 text-white w-full h-full flex items-start justify-start pt-32 pl-10 md:pl-20"
          >
            <div className="max-w-md text-left">
              <h2 className="text-5xl font-serif mb-4 fontcronos">
                {weddingData[0].title}
              </h2>
              <p className="text-lg opacity-90 fontcronos">
                {weddingData[0].des}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="h-[100vh] w-full"></div>

        {weddingData.slice(1).map((data, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="h-screen w-full flex items-center justify-start px-10 md:px-20 pointer-events-auto"
          >
            <div className="max-w-xl text-left text-white">
              <h3 className="text-4xl font-serif mb-4 fontcronos">
                {data.title}
              </h3>
              <p className="text-lg opacity-90 fontcronos">{data.des}</p>
            </div>
          </div>
        ))}

        <div className="h-[50vh] w-full"></div>
      </div>
    </div>
  );
};

export default Wedding;
