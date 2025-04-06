import type React from "react";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Video from "@/assets/video-bg.mov";

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // --- Parallax calculations removed or disabled based on reduceMotion ---
  const [reduceMotion, setReduceMotion] = useState(false);

  // Check for prefers-reduced-motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => {
      setReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Calculate parallax effect
  const translateY = reduceMotion ? 0 : scrollY * 0.3;

  // Preload video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section
      aria-label="Hero introduction"
      className="relative overflow-hidden"
      style={{
        height: "100vh",
      }}
    >
      {/* Video background - fixed position, no parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Black overlay with subtle parallax effect */}
      <div
        className="absolute inset-0 bg-black z-10"
        aria-hidden="true"
        style={{
          opacity: 0.75,
          transform: `translateY(${translateY * -0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* SVG Background with parallax effect */}
      <div
        className="absolute inset-0 z-5"
        aria-hidden="true"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: "transform 0.1s ease-out",
          opacity: 0.3,
        }}
      >
        {/* <WaveSvg className="w-full h-full" /> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full z-20 flex flex-col justify-center mt-[45px]">
        <div className="max-w-2xl space-y-6">
          <h1
            className="font-raleway text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-white"
            style={{
              transform: `translateY(${-translateY * 2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Transform Corporate Learning with Integrated E-Learning Solutions
          </h1>
          <p
            className="font-roboto text-xl text-white md:text-xl"
            style={{
              transform: `translateY(${-translateY * 1.75}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Netex provides scalable cloud platforms, bespoke content creation,
            and on-demand course catalogues to empower organizations and drive
            learner success.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            style={{
              transform: `translateY(${-translateY * 1.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-md bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white focus-visible:ring-white"
            >
              Explore Platforms
            </Button>
            <Button size="lg" className="text-md font-medium">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
