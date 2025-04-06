import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechGlobal",
    role: "CTO",
    image: "/testimonials/sarah.jpg",
    quote:
      "Netex transformed our digital presence. The intuitive interface and powerful features have significantly improved our customer engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    company: "Innovate Inc",
    role: "Marketing Director",
    image: "/testimonials/david.jpg",
    quote:
      "We've seen a 40% increase in lead generation since implementing Netex solutions. Their support team is responsive and always helpful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Spark Systems",
    role: "Product Manager",
    image: "/testimonials/emily.jpg",
    quote:
      "Netex provided exactly what we needed to streamline our processes. The customization options allowed us to tailor the solution perfectly.",
    rating: 4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Handle autoplay functionality
  useEffect(() => {
    if (!autoplayPaused) {
      timerRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, autoplayPaused]);

  const handlePrevious = () => {
    setAutoplayPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplayPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      handlePrevious();
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }
        />
      ));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses are transforming their digital experiences with
            our solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto mb-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setAutoplayPaused(true)}
          onMouseLeave={() => setAutoplayPaused(false)}
        >
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                          {/* Fallback for missing images */}
                          <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 text-2xl font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <blockquote className="text-gray-700 text-lg italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-medium text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplayPaused(true);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
