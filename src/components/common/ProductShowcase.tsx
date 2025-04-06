import { ArrowRight } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: "netex-cloud",
      title: "Netex Cloud",
      description:
        "A comprehensive learning ecosystem that scales with your organization's needs.",
      icon: "/icons/cloud-platform.svg",
      image: "/images/netex-cloud-dashboard.jpg",
      color: "from-blue-500 to-indigo-600",
      link: "/solutions/netex-cloud",
    },
    {
      id: "netex-studio",
      title: "Netex Studio",
      description:
        "Create bespoke, engaging content tailored to your specific learning objectives.",
      icon: "/icons/creative-tools.svg",
      image: "/images/netex-studio-creator.jpg",
      color: "from-purple-500 to-pink-600",
      link: "/solutions/netex-studio",
    },
    {
      id: "virtual-college",
      title: "Virtual College",
      description:
        "Access our extensive on-demand course catalogue covering essential workplace skills.",
      icon: "/icons/education-cap.svg",
      image: "/images/virtual-college-courses.jpg",
      color: "from-emerald-500 to-teal-600",
      link: "/solutions/virtual-college",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Solutions
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
          Discover the perfect digital learning solution for your organization's
          unique needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative h-full flex flex-col rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl"
            >
              {/* Product Image with Gradient Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-90 z-10`}
                ></div>
                {/* Fallback color in case image fails to load */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color}`}
                ></div>
                <img
                  src={product.image}
                  alt={`${product.title} interface preview`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                  <img
                    src={product.icon}
                    alt=""
                    className="w-16 h-16"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col bg-white">
                <h3
                  id={`heading-${product.id}`}
                  className="text-2xl font-bold mb-3"
                >
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">
                  {product.description}
                </p>

                {/* CTA Button */}
                <a
                  href={product.link}
                  className="inline-flex items-center justify-between mt-auto"
                >
                  <span className="relative inline-flex items-center gap-2 font-medium text-lg text-slate-900 group-hover:text-slate-700 transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
                    Learn more
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Interactive overlay for entire card */}
              <a
                href={product.link}
                className="absolute inset-0 z-30 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-2xl focus:outline-none"
                aria-labelledby={`heading-${product.id}`}
                tabIndex={0}
              >
                <span className="sr-only">
                  Learn more about {product.title}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
