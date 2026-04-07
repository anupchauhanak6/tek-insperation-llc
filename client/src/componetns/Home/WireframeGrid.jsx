import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const gridItems = [
  {
    num: "01",
    title: "Rare Technology Skills",
    desc: "Specialised technology skills are becoming increasingly difficult to source in today's saturated market.",
  },
  {
    num: "02",
    title: "Delayed Project Timelines",
    desc: "Prolonged and inefficient hiring cycles have a direct, negative impact on your product launches.",
  },
  {
    num: "03",
    title: "Regulatory & Compliance Risks",
    desc: "Managing workforce compliance and local labor laws creates significant enterprise risks.",
  },
  {
    num: "04",
    title: "Low Execution ROI",
    desc: "Massive technology investments must be backed by the right human capital to ensure high returns.",
  },
];

function WireframeGrid() {
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
      className="font-['Inter',sans-serif] bg-white py-15 md:py-25 px-4 md:px-5 relative w-full overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] before:bg-size-[40px_40px] before:bg-top before:-z-10 before:pointer-events-none"
      aria-labelledby="wireframe-challenges-heading"
    >
      <div className="max-w-287.5 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-15 relative z-20">
        {/* Left Side: Header Element */}
        <header className="flex-[0_0_35%] flex flex-col items-center lg:items-start text-center lg:text-left bg-transparent p-0 w-full rounded-2xl">
          <div
            className={cn(
              "inline-flex items-center gap-1.5 text-emerald-500 bg-transparent text-[0.65rem] font-extrabold uppercase tracking-[1.5px] mb-3.75 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5",
            )}
          >
            <span className="bg-[#E6F3ED] w-6 h-6 flex items-center justify-center rounded-full">
              <i
                className="fas fa-layer-group text-[0.6rem]"
                aria-hidden="true"
              />
            </span>
            Enterprise Challenges
          </div>

          <h2
            id="wireframe-challenges-heading"
            className={cn(
              "text-[clamp(1.6rem,3vw,2.2rem)] text-slate-900 font-black leading-[1.15] m-0 mb-6.25 tracking-[-0.5px] transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5",
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Bridging the Gap Between <br className="hidden lg:block" />
            <span className="text-emerald-500">Talent & Technology</span>
          </h2>

          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-500 text-white text-[0.65rem] font-extrabold uppercase tracking-[0.8px] no-underline py-2.5 px-6 rounded-full transition-all duration-300 border border-emerald-500 shadow-[0_4px_10px_rgba(16,185,129,0.2)] hover:bg-transparent hover:text-emerald-500 hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(16,185,129,0.15)] group/btn"
              aria-label="Explore TEK Inspirations Solutions"
            >
              Explore Solutions
              <i
                className="fas fa-arrow-right text-[0.6rem] transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </header>

        {/* Right Side: Wireframe Grid */}
        <div
          className={cn(
            "flex-1 grid grid-cols-1 md:grid-cols-2 lg:border-t lg:border-l border-slate-200 bg-transparent lg:bg-white rounded-none lg:rounded-xl shadow-none lg:shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden w-full gap-4 md:gap-0 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {gridItems.map((item, index) => (
            <article
              key={index}
              className="p-6 lg:p-[35px_30px] bg-white lg:bg-transparent border border-slate-200 md:border-t-0 md:border-l-0 md:border-r md:border-b md:nth-last-[-n+2]:border-b-0 md:even:border-r-0 rounded-xl md:rounded-none flex flex-col transition-all duration-400 relative overflow-hidden group/item"
            >
              {/* Hover Gradient Tint */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-400 group-hover/item:opacity-100 z-0 pointer-events-none" />

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 transition-transform duration-300 origin-left group-hover/item:scale-x-100 z-10 pointer-events-none" />

              <div
                className="text-[0.65rem] font-extrabold text-emerald-500 mb-3.75 bg-[#E6F3ED] py-1 px-2 rounded w-fit transition-colors duration-300 group-hover/item:bg-emerald-500 group-hover/item:text-white relative z-20"
                aria-hidden="true"
              >
                {item.num}
              </div>

              <h3 className="m-0 mb-2.5 text-[0.85rem] text-slate-900 font-bold leading-[1.4] relative z-20">
                {item.title}
              </h3>

              <p className="m-0 text-[0.75rem] text-slate-500 leading-[1.6] font-medium relative z-20">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WireframeGrid;
