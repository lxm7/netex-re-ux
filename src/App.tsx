import { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ClientLogos from "@/components/common/ClientLogos";
import SolutionsSection from "@/components/common/SolutionsSection";
import CtaSection from "@/components/common/CtaSection";
import Footer from "@/components/common/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";

import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  // Define hero section height - adjust as needed
  const heroHeight = 100; // 100vh

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const heroOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  // Calculate when to start showing the next section
  const nextSectionProgress = Math.min(
    1,
    Math.max(
      0,
      (scrollY - window.innerHeight * 0.5) / (window.innerHeight * 0.5)
    )
  );

  return (
    <div className="flex min-h-screen flex-col">
      {/* Fixed header that always stays on top */}
      <Header // className="fixed top-0 left-0 right-0 z-50"
      />
      <main className="flex-1">
        {/* Hero section with video background - fixed position */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-10"
          style={{
            opacity: heroOpacity,
          }}
        >
          <Hero scrollY={scrollY} />
        </div>

        {/* Spacer div to create scrollable content height */}
        <div style={{ height: `${heroHeight}vh` }}></div>

        <div
          className="relative z-30"
          style={{
            transform: `translateY(${-30 + scrollY * 0.1}px)`,
          }}
        >
          <AnimatedSection
            direction="right"
            className="py-16 border-b bg-white"
            style={{
              opacity: Math.min(1, scrollY / (window.innerHeight * 0.5)),
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
            }}
          >
            <SolutionsSection />
          </AnimatedSection>
        </div>

        {/* Remaining sections */}
        <div
          className="relative z-40 bg-white"
          style={{
            transform: `translateY(${(1 - nextSectionProgress) * -50}px)`,
            opacity: nextSectionProgress,
          }}
        >
          <AnimatedSection direction="left" className="py-24 bg-white">
            <ClientLogos />
          </AnimatedSection>

          <AnimatedSection direction="right" className="py-24 bg-gray-50">
            <CtaSection />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
