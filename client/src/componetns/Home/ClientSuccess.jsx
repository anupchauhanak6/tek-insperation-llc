import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const testimonials = [
  {
    quote:
      '"TEK Inspirations transformed our hiring process. Their enterprise-grade RPO solution reduced our time-to-hire by 40% and brought in top-tier tech talent that perfectly aligned with our operational goals."',
    name: "Michael T.",
    title: "VP of Engineering, FinTech Inc.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      '"Unlike traditional staffing agencies, TEK acts as a strategic partner. They understood our complex cloud modernization needs and provided an entire engineering squad that executed flawlessly."',
    name: "Sarah Jenkins",
    title: "Director of IT, HealthCorp",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      '"Compliance and scale were our biggest hurdles. TEK Inspirations delivered a managed workforce solution that mitigated risk while allowing us to scale our operations nationwide without a hitch."',
    name: "David R.",
    title: "COO, Global Logistics",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
  },
];

function ClientSuccess() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-['Inter',sans-serif] bg-white py-15 md:py-22.5 px-4 md:px-5 relative w-full overflow-hidden z-10"
    >
      {/* Green Line Grid Background with radial mask fade */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-size-[40px_40px] bg-top"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 100%)",
        }}
      />

      <div className="max-w-287.5 mx-auto relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-9 md:mb-12.5 max-w-[600px] mx-auto transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <div className="inline-flex items-center gap-1.5 bg-white text-[#10b981] py-1 px-3.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1.2px] mb-3.75 border border-[#10b981]/20 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
            <i className="fas fa-star" aria-hidden="true" /> Client Success
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-slate-900 font-black leading-[1.2] m-0 mb-3.75 tracking-[-0.8px]">
            Trusted by Industry <span className="text-[#10b981]">Leaders</span>
          </h2>
        </div>

        {/* Grid & Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className={cn(
                "bg-white border border-slate-200 rounded-2xl p-[25px_20px] md:p-[30px_25px] flex flex-col relative transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_5px_20px_rgba(15,23,42,0.02)] group/card",
                "hover:-translate-y-2 hover:border-[#10b981]/20 hover:shadow-[0_15px_35px_rgba(16,185,129,0.08)]",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Green Border Accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#10b981] scale-x-0 transition-transform duration-400 group-hover/card:scale-x-100 rounded-t-2xl" />

              {/* Quote Icon */}
              <div className="w-9 h-9 bg-[#EBF7F1] text-[#10b981] flex items-center justify-center rounded-lg text-[0.9rem] mb-5 transition-all duration-300 group-hover/card:bg-[#10b981] group-hover/card:text-white group-hover/card:-rotate-12 group-hover/card:scale-105">
                <i className="fas fa-quote-left" aria-hidden="true" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-[3px] text-amber-400 text-[0.75rem] mb-3.75">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" aria-hidden="true" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[0.85rem] text-slate-600 leading-[1.7] m-0 mb-6 font-medium italic grow">
                {testi.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-5 mt-auto">
                <img
                  src={testi.img}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#EBF7F1]"
                />
                <div className="flex flex-col">
                  <strong className="text-slate-900 text-[0.85rem] font-extrabold leading-[1.2] mb-[3px]">
                    {testi.name}
                  </strong>
                  <span className="text-slate-500 text-[0.65rem] font-bold uppercase tracking-[0.5px]">
                    {testi.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSuccess;
