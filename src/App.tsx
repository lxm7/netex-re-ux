import { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ClientLogos from "@/components/common/ClientLogos";
import CtaSection from "@/components/common/CtaSection";
import Footer from "@/components/common/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import Testimonial from "@/components/Testimonial";
import VoiceSearch from "@/components/VoiceSearch";
import WelcomeBanner from "@/components/WelcomeBanner";
// import SolutionsSection from "@/components/common/SolutionsSection";
import ProductShowcase from "./components/common/ProductShowcase";

import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [, setSearchQuery] = useState("");
  const [windowHeight, setWindowHeight] = useState(0);
  const [, setWindowWidth] = useState(0);
  const heroHeight = 100;

  useEffect(() => {
    // Set initial window dimensions
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Update dimensions on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle voice search results
  const handleVoiceSearchResult = (result: string) => {
    setSearchQuery(result);
    // You can implement actual search functionality here
    console.log("Voice search query:", result);
  };

  // Calculate opacity based on scroll position
  const heroOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));
  const welcomeBannerOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.3));

  // Calculate when to start showing the next section
  const nextSectionProgress = Math.min(
    1,
    Math.max(
      0,
      (scrollY - window.innerHeight * 0.5) / (window.innerHeight * 0.5)
    )
  );

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Fixed header that always stays on top */}
      <Header>
        <VoiceSearch onSearchResult={handleVoiceSearchResult} />
      </Header>

      <main className="flex-1 overflow-x-hidden w-full">
        {/* Welcome Banner - Positioned above hero with higher z-index */}
        <div
          className="fixed top-16 left-0 w-full z-20 px-4 sm:px-6 lg:px-8"
          style={{
            opacity: welcomeBannerOpacity,
            transform: `translateY(${Math.max(0, 10 - scrollY * 0.1)}px)`,
          }}
        >
          <WelcomeBanner userName="Alex" userInitial="A" />
        </div>

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

        {/* Social Proof Section - Added right after hero */}
        <div className="relative z-30 w-full overflow-hidden">
          <div
            className="w-full"
            style={{
              opacity: Math.min(1, scrollY / (window.innerHeight * 0.5)),
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
            }}
          >
            <AnimatedSection
              direction="bottom"
              className="py-16 border-b bg-white w-full"
            >
              <Testimonial />
            </AnimatedSection>
          </div>
        </div>

        {/* First section - Solutions */}
        <div className="relative z-30 w-full overflow-hidden">
          <div
            className="w-full"
            style={{
              opacity: Math.min(1, scrollY / (window.innerHeight * 0.5)),
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
            }}
          >
            <AnimatedSection
              direction="bottom"
              className="py-16 border-b bg-white w-full"
            >
              <ProductShowcase />
            </AnimatedSection>
          </div>
        </div>

        {/* Remaining sections */}
        <div
          className="relative z-40 bg-white w-full overflow-hidden"
          style={{
            opacity: nextSectionProgress,
          }}
        >
          <AnimatedSection direction="bottom" className="py-24 bg-white w-full">
            <ClientLogos />
          </AnimatedSection>

          <AnimatedSection
            direction="bottom"
            className="py-24 bg-gray-50 w-full"
          >
            <CtaSection />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
