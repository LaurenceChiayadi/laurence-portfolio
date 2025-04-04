import { useCallback, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useScrollLocation = () => {
  const { scrollY } = useScroll();
  const [percentageScrolled, setPercentageScrolled] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const percentage = (latest / window.innerHeight) * 100;
    setPercentageScrolled(percentage);
  });

  const scrollToPercentage = useCallback((percentageProps: number) => {
    const percentage = percentageProps > 0 ? percentageProps + 10 : 0;
    const targetY = (percentage / 100) * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  return {
    percentageScrolled,
    scrollToPercentage,
  };
};

export default useScrollLocation;
