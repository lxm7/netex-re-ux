import type React from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction: "left" | "right" | "bottom";
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Keep observing for sections that might go out of view and come back
          // For a one-time animation, you could uncomment the next line
          // observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Set initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      case "bottom":
        return "translateY(100px)";
      default:
        return "translateY(100px)";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getInitialTransform(),
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default AnimatedSection;
