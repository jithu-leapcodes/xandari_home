// import React, { useEffect, useRef, useState } from "react";

// const MIN_WIDTH = 754;
// const MIN_HEIGHT = 350;
// const RESIZE_SCROLL = window.innerHeight * 0.8;

// const weddingData = [
//   {
//     img: "/images/wedding_1.png",
//     title: "Wedding at Xandari",
//     des: "Experience a magical wedding at Xandari.",
//   },
//   {
//     img: "/images/wedding_2.png",
//     title: "Elegant Wedding Venues",
//     des: "Elegant venues for your special day.",
//   },
//   {
//     img: "/images/wedding_3.png",
//     title: "Customized Packages",
//     des: "Tailored wedding packages.",
//   },
//   {
//     img: "/images/wedding_4.png",
//     title: "Exquisite Cuisine",
//     des: "World-class culinary experience.",
//   },
//   {
//     img: "/images/wedding_5.png",
//     title: "Wedding Photography",
//     des: "Capture every moment beautifully.",
//   },
// ];

// const WeddingSection = () => {
//   const sectionRef = useRef(null);
//   const divRefs = useRef([]);
//   const rafRef = useRef(null);

//   const [resizeProgress, setResizeProgress] = useState(0);
//   const [imageSize, setImageSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   // 🔑 forces re-render during scroll
//   const [, setScrollTick] = useState(0);

//   /* ---------- SCROLL LISTENER (RAF DRIVEN) ---------- */
//   useEffect(() => {
//     const onScroll = () => {
//       if (rafRef.current) return;

//       rafRef.current = requestAnimationFrame(() => {
//         setScrollTick((t) => t + 1);
//         rafRef.current = null;
//       });
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ---------- RESIZE PHASE ---------- */
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const rect = sectionRef.current.getBoundingClientRect();
//     const scrolled = Math.min(Math.max(-rect.top, 0), RESIZE_SCROLL);
//     const p = scrolled / RESIZE_SCROLL;

//     setResizeProgress(Math.min(p, 1));
//   });

//   /* ---------- IMAGE RESIZE ---------- */
//   useEffect(() => {
//     const p = resizeProgress;

//     setImageSize({
//       width: window.innerWidth - p * (window.innerWidth - MIN_WIDTH),
//       height: window.innerHeight - p * (window.innerHeight - MIN_HEIGHT),
//     });
//   }, [resizeProgress]);

//   const resizeDone = resizeProgress >= 1;

//   /* ---------- IMAGE OFFSET (DIV DRIVEN) ---------- */
//   const imageOffset = (index) => {
//     if (!resizeDone) return 0;

//     const div = divRefs.current[index];
//     if (!div) return 0;

//     const rect = div.getBoundingClientRect();
//     const vh = window.innerHeight;

//     const t = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
//     return -100 * (1 - Math.pow(1 - t, 3));
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#050817]"
//       style={{ height: "500vh" }}
//     >
//       {/* ---------- STICKY IMAGE ---------- */}
//       <div className="sticky top-0 h-screen flex items-center justify-center z-10">
//         <div
//           className="relative overflow-hidden rounded-xl"
//           style={{ width: imageSize.width, height: imageSize.height }}
//         >
//           {weddingData.map((item, index) => (
//             <img
//               key={index}
//               src={item.img}
//               alt=""
//               className="absolute inset-0 w-full h-full object-cover"
//               style={{
//                 transform: `translateY(${imageOffset(index)}%)`,
//                 zIndex: weddingData.length - index,
//                 willChange: "transform",
//               }}
//             />
//           ))}

//           {/* ---------- FIRST IMAGE TEXT ---------- */}
//           {!resizeDone && (
//             <div className="absolute top-12 left-12 text-white max-w-3xl">
//               <h1 className="text-5xl font-bold">{weddingData[0].title}</h1>
//               <p className="text-2xl mt-4">{weddingData[0].des}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ---------- SCROLLING CONTENT DIVS ---------- */}
//       {weddingData.slice(1).map((item, index) => (
//         <div
//           key={index}
//           ref={(el) => (divRefs.current[index] = el)}
//           className="h-screen flex items-center justify-center pointer-events-none"
//         >
//           <div className="text-white max-w-5xl flex gap-16">
//             <h2 className="text-4xl font-bold">{item.title}</h2>
//             <p className="text-xl opacity-80">{item.des}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default WeddingSection;
