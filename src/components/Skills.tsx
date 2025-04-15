import { useTranslation } from "react-i18next";

import Wrapper from "./global/Wrapper";
import { H2, H5 } from "./global/Typography/Typographies";
import { SkillsData } from "../constants/SkillsData";
import { ThemeEnum, useTheme } from "../contexts/ThemeContext";
import AnimateOnSeen from "./global/Animation/AnimateOnSeen";
import { useEffect, useRef } from "react";
import { animate, hover, useMotionValue } from "framer-motion";

const Skills = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const checkColor = (color: string) => {
    if (color === "#000000" && theme === ThemeEnum.Dark) {
      return "#ffffff";
    } else {
      return color;
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements =
      containerRef.current.querySelectorAll<HTMLElement>(".scatter");
    const originalTransforms = new Map<HTMLElement, { x: number; y: number }>();

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    // Save original position
    elements.forEach((el) => {
      originalTransforms.set(el, { x: 0, y: 0 });
    });

    // Handle hover/move interaction
    hover(elements, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    // IntersectionObserver to return to original position when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting) {
            animate(el, { x: 0, y: 0 }, { type: "spring", stiffness: 50 });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const containerRect = containerRef.current.getBoundingClientRect();
  //   const elements =
  //     containerRef.current.querySelectorAll<HTMLElement>(".scatter");

  //   const handlePointerMove = (event: PointerEvent) => {
  //     const now = performance.now();
  //     const timeSinceLastEvent = (now - prevEvent.current) / 1000;
  //     prevEvent.current = now;
  //     velocityX.set(event.movementX / timeSinceLastEvent);
  //     velocityY.set(event.movementY / timeSinceLastEvent);
  //   };

  //   document.addEventListener("pointermove", handlePointerMove);

  //   elements.forEach((element) => {
  //     element.addEventListener("pointerenter", () => {
  //       const speed = Math.sqrt(velocityX.get() ** 2 + velocityY.get() ** 2);
  //       const angle = Math.atan2(velocityY.get(), velocityX.get());
  //       const distance = speed * 0.1;

  //       const proposedX = Math.cos(angle) * distance;
  //       const proposedY = Math.sin(angle) * distance;

  //       const elRect = element.getBoundingClientRect();

  //       const newX = elRect.left + proposedX;
  //       const newY = elRect.top + proposedY;

  //       // Bounce logic: if new position is outside container bounds
  //       const bounceX =
  //         newX < containerRect.left || newX + elRect.width > containerRect.right
  //           ? -proposedX
  //           : proposedX;

  //       const bounceY =
  //         newY < containerRect.top ||
  //         newY + elRect.height > containerRect.bottom
  //           ? -proposedY
  //           : proposedY;

  //       animate(
  //         element,
  //         { x: bounceX, y: bounceY },
  //         { type: "spring", stiffness: 120, damping: 20 }
  //       );
  //     });

  //     // Optional: return to original position
  //     element.addEventListener("pointerleave", () => {
  //       animate(element, { x: 0, y: 0 }, { type: "spring", stiffness: 120 });
  //     });
  //   });

  //   return () => {
  //     document.removeEventListener("pointermove", handlePointerMove);
  //   };
  // }, []);

  return (
    <Wrapper className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
        <div className="h-full flex flex-col justify-start gap-10 max-w-120 text-center md:text-start">
          <AnimateOnSeen>
            <H2>{t("skills.title")}</H2>
          </AnimateOnSeen>
          <div className="flex flex-col gap-4">
            <AnimateOnSeen>
              <H5>{t("skills.workExperience")}</H5>
            </AnimateOnSeen>
            <AnimateOnSeen>
              <H5>{t("skills.proficiency")}</H5>
            </AnimateOnSeen>
          </div>
        </div>
        <div ref={containerRef} className="flex flex-col gap-4">
          {SkillsData.map((skills, index) => (
            <AnimateOnSeen key={index}>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <H5 className="min-w-30 text-center md:text-start">
                  {skills.category}
                </H5>
                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2 max-w-90 md:max-w-100">
                  {skills.items.map((item, index1) => (
                    <div
                      key={index1}
                      className={`scatter flex flex-row items-center gap-2 border-2 rounded-2xl px-3 py-0.5 font-semibold will-change-transform`}
                      style={{
                        borderColor: checkColor(item.color),
                        color: checkColor(item.color),
                      }}
                    >
                      <item.Icon />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnSeen>
          ))}
        </div>
        {/* <div className="h-100 border"/> */}
      </div>
    </Wrapper>
  );
};

export default Skills;
