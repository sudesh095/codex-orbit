import { useEffect, useRef } from "react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

const SkillsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic (smooth infinite loop)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrame: number;

    const scroll = () => {
      scroller.scrollLeft += 0.5;

      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-[#DE3484] mb-2 text-xl font-semibold">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 mb-8">
          Comprehensive expertise across the mobile development ecosystem
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide py-4"
        style={{ scrollBehavior: "auto" }}
      >
        {[...skills, ...skills].map(({ name, icon }, index) => (
          <SkillCard
            key={`${name}-${index}`}
            name={name}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
