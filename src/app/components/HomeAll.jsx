"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Loading from "./Loading";
import HomeLanding from "./HomeLanding";
import CardSection from "./CardSection";
import ProductDetail from "./ProductDetail";
import WeddingSection from "./WeddingSection";
import HotelDetail from "./HotelDetail";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import HotelMenu from "./HotelMenu";

const HomeAll = () => {
  const loaderRef = useRef(null);
  const landingRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = "hidden";

    gsap.set(landingRef.current, {
      autoAlpha: 0,
      scale: 0.98,
      filter: "blur(8px)",
    });

    const tl = gsap.timeline({
      delay: 2,
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        setShowLoader(false);
        setAnimateHeader(true);
        document.body.style.overflow = "auto";
      },
    });

    tl.to(
      loaderRef.current,
      {
        autoAlpha: 0,
        scale: 1.05,
        filter: "blur(12px)",
        duration: 2.2,
      },
      0,
    ).to(
      landingRef.current,
      {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
      },
      0.4,
    );

    return () => tl.kill();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {showLoader && (
        <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-[#022436]">
          <Loading />
        </div>
      )}

      <main className="relative w-full bg-[#022436]">
        <div ref={landingRef}>
          <HomeLanding animateHeader={animateHeader} />
        </div>
        <CardSection />
        <ProductDetail />
        <HotelMenu />
        {/* <WeddingSection /> */}
        <HotelDetail />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
};

export default HomeAll;
