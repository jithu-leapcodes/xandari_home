// hooks/useSectionReveal.js
import { useEffect, useRef, useState } from "react";

export function useSectionReveal() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when section ENTERS viewport
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      {
        threshold: 0.3, // section level threshold
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return { sectionRef, active };
}
