import type React from "react";
import { Button } from "@/components/ui/button";
import Video from "@/assets/video-bg.mov";
import { useRef, useEffect } from "react";

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calculate parallax effect
  const translateY = scrollY * 0.3;

  // Preload video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "calc(100vh - 65px)",
        marginTop: "65px",
      }}
    >
      {/* Video background - fixed position, no parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
        style={{
          opacity: 0.6,
          transform: `translateY(${translateY * -0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* SVG Background with parallax effect */}
      <div
        className="absolute inset-0 z-5"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: "transform 0.1s ease-out",
          opacity: 0.3,
        }}
      >
        {/* <WaveSvg className="w-full h-full" /> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full z-20 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
            style={{
              transform: `translateY(${-translateY * 0.2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Transform Corporate Learning with Integrated E-Learning Solutions
          </h1>
          <p
            className="text-lg text-gray-200 md:text-xl"
            style={{
              transform: `translateY(${-translateY * 0.1}px)`,
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
              transform: `translateY(${-translateY * 0.05}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Button size="lg" className="font-medium">
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              Explore Platforms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
