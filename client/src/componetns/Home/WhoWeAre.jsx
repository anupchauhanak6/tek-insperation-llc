import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function WhoWeAre() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-['Inter',sans-serif] bg-white py-12.5 md:py-20 px-4 md:px-5 relative w-full overflow-hidden z-10"
    >
      <style>
        {`
          @keyframes floatGlassCard {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-size-[40px_40px] bg-top" />

      <div className="max-w-287.5 mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12.5 text-center lg:text-left">
        {/* Left Content */}
        <div className="flex-[1.1] flex flex-col justify-center items-center lg:items-start w-full">
          <div
            className={cn(
              "inline-flex items-center gap-1.5 text-[#10b981] bg-white py-1 px-3 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1px] mb-3.75 border border-[#10b981]/20 shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-600 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            <i className="fas fa-building-user" aria-hidden="true" /> Who We Are
          </div>

          <h2
            className={cn(
              "text-[1.6rem] lg:text-[clamp(1.5rem,2.5vw,1.8rem)] text-slate-900 font-extrabold leading-[1.2] m-0 mb-3.75 tracking-[-0.5px] transition-all duration-600 ease-out delay-100",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            Aligning Staffing Strategies with <br className="hidden lg:block" />
            <span className="text-[#10b981]">Digital Transformation</span>
          </h2>

          <p
            className={cn(
              "text-[0.85rem] text-slate-600 leading-[1.6] m-0 mb-5 font-medium transition-all duration-600 ease-out delay-200 lg:max-w-none max-w-xl",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            TEK Inspirations is a US staffing company and employment agency that
            provides enterprise-based technical staffing services that combine
            workforce intelligence, advisory, and execution.
          </p>

          <div
            className={cn(
              "bg-white border-l-[3px] border-[#10b981] py-3 px-4.5 mb-5 rounded-r-lg shadow-[0_8px_25px_rgba(15,23,42,0.03)] text-left transition-all duration-600 ease-out delay-300 lg:max-w-none max-w-xl",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            <p className="m-0 text-[0.85rem] text-slate-900 leading-[1.6] font-semibold">
              <strong className="text-[#10b981] font-bold">
                Unlike traditional agencies,
              </strong>{" "}
              we are not merely a provider of labor. We work to align your
              staffing strategies with your digital transformation goals.
            </p>
          </div>

          <p
            className={cn(
              "text-[0.8rem] text-slate-600 leading-[1.6] m-0 mb-6.25 font-medium transition-all duration-600 ease-out delay-400 lg:max-w-none max-w-xl",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            Our leading governance models create a strong foundation for
            achieving and supporting your organization's mission.
          </p>

          <div
            className={cn(
              "transition-all duration-600 ease-out delay-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3.75",
            )}
          >
            <a
              href="/about-us"
              className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-[0.75rem] font-bold uppercase tracking-[0.5px] py-2.5 px-6 rounded-lg no-underline transition-all duration-300 border border-slate-900 hover:bg-[#10b981] hover:border-[#10b981] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,185,129,0.2)] group/btn"
            >
              Discover Our Journey
              <i
                className="fas fa-arrow-right text-[0.65rem] transition-transform duration-300 group-hover/btn:translate-x-0.75"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right Visuals */}
        <div
          className={cn(
            "flex-1 relative flex justify-center lg:justify-end w-full transition-all duration-600 ease-out delay-600 group/visuals",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3.75",
          )}
        >
          <div className="relative w-full max-w-full md:max-w-105 h-75 lg:h-95 rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.08)] z-10 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Corporate Enterprise Tech"
              className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover/visuals:scale-105"
            />
          </div>

          {/* Floating Glass Card */}
          <div
            className="absolute left-2.5 lg:-left-7.5 bottom-4 lg:bottom-7.5 bg-white/95 backdrop-blur-[10px] p-[10px_12px] lg:p-[12px_16px] rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] z-20 flex items-center gap-2.5 border border-black/5"
            style={{ animation: "floatGlassCard 4s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 lg:w-8 lg:h-8 bg-[#EBF7F1] text-[#10b981] flex items-center justify-center rounded-md text-[0.9rem]">
              <i className="fas fa-chart-line" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-left">
              <strong className="text-[0.85rem] font-extrabold text-slate-900 block leading-none mb-0.75">
                Enterprise
              </strong>
              <span className="text-[0.65rem] text-slate-600 font-semibold uppercase tracking-[0.5px]">
                Ready Staffing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
