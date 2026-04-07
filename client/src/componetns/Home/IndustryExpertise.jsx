import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const industries = [
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-cloud",
    title: "Technology and SaaS",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-staff-snake",
    title: "Healthcare & Life Sciences",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-coins",
    title: "Financial Services & FinTech",
  },
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-satellite-dish",
    title: "Telecommunications",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-cart-shopping",
    title: "Retail and E-Commerce",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-industry",
    title: "Manufacturing & Industrial",
  },
];

function IndustryExpertise() {
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
      className="font-['Inter',sans-serif] bg-white py-17.5 md:py-22.5 px-4 md:px-5 relative w-full overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] before:bg-size-[40px_40px] before:bg-top before:z-[-1] before:pointer-events-none"
    >
      <div className="max-w-287.5 mx-auto relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-9 md:mb-12.5 max-w-175 mx-auto transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5",
          )}
        >
          <div className="inline-flex items-center gap-2 bg-white text-[#10b981] py-1.5 px-4 md:px-4.5 rounded-full text-[0.7rem] font-extrabold uppercase tracking-[1.5px] mb-3.75 border border-[#10b981]/20 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
            <i className="fas fa-building" aria-hidden="true" /> Industry
            Expertise
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-slate-900 font-black leading-[1.2] m-0 mb-3 tracking-[-0.8px]">
            Supporting Complex, High-Growth Industries
          </h2>
          <p className="text-[0.9rem] md:text-[0.95rem] text-slate-600 font-normal leading-[1.6] m-0">
            We provide tailored IT solutions across key enterprise sectors.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-9 md:mb-12.5">
          {industries.map((ind, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-xl md:rounded-2xl overflow-hidden aspect-video md:aspect-4/3 bg-slate-900 border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] cursor-default transition-all duration-500 ease-in-out group/card",
                "hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)]",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-7.5",
                // Mobile layout gets immediate translate-y 0 without hover jump so default fade up handles it
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={ind.img}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-800 ease-out z-0 group-hover/card:scale-110 group-hover/card:opacity-40"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 z-10 transition-colors duration-500 bg-linear-to-t from-slate-900/95 via-slate-900/30 to-transparent group-hover/card:from-[#10b981]/95 group-hover/card:via-slate-900/50 group-hover/card:to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 lg:p-[20px_25px] z-20 flex flex-col gap-3 transition-transform duration-500 translate-y-2.5 group-hover/card:translate-y-0">
                <div className="w-10 h-10 bg-white/15 backdrop-blur-[10px] text-white text-[1.1rem] flex items-center justify-center rounded-[10px] border border-white/20 transition-all duration-400 group-hover/card:bg-white group-hover/card:text-[#10b981] group-hover/card:scale-110">
                  <i className={ind.icon} aria-hidden="true" />
                </div>
                <h3 className="m-0 text-[1.05rem] text-white font-bold leading-[1.3]">
                  {ind.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Banner */}
        <div
          className={cn(
            "bg-linear-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-6 md:p-7.5 lg:p-[35px_40px] flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-[0_15px_40px_rgba(15,23,42,0.15)] border-t-4 md:border-t-0 md:border-l-4 border-[#10b981] relative overflow-hidden text-center md:text-left transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5",
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Radial Blob Decoration */}
          <div className="absolute -top-12.5 -right-12.5 w-50 h-50 bg-[radial-gradient(circle,rgba(16,185,129,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" />

          <div className="w-12.5 h-12.5 min-w-12.5 md:w-15 md:h-15 md:min-w-15 bg-[#10b981]/10 text-[#10b981] text-[1.3rem] md:text-[1.6rem] flex items-center justify-center rounded-xl border border-[#10b981]/20 z-10 mx-auto md:mx-0">
            <i className="fas fa-globe-americas" aria-hidden="true" />
          </div>

          <p className="relative z-10 text-[0.85rem] md:text-[0.9rem] text-slate-200 leading-[1.7] m-0 font-normal">
            As a performance-driven IT staffing company and a leading recruiting
            agency in the USA,{" "}
            <strong className="text-white font-bold">
              we possess specialised industry knowledge around compliance,
              workforce models, and operational pressures facing your
              organisation.
            </strong>{" "}
            We use our position as a leader in the staffing agency in the USA to
            support the development of localised and national expansion of
            labour forces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertise;
