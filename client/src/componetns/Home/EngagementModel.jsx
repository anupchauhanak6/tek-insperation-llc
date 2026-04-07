import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const steps = [
  {
    num: "01",
    icon: "fas fa-magnifying-glass-chart",
    title: "Assess",
    desc: "Evaluate the requirements of your staff and your risk exposure as a result of those needs, as well as how well you align your technology with your business goals.",
  },
  {
    num: "02",
    icon: "fas fa-compass-drafting",
    title: "Architect",
    desc: "Create customised staffing solutions and enterprise technology roadmaps based on the comprehensive evaluation.",
  },
  {
    num: "03",
    icon: "fas fa-rocket",
    title: "Deploy",
    desc: "Systematic delivery via vetted staffing solutions and highly structured project execution methodologies.",
  },
  {
    num: "04",
    icon: "fas fa-sliders",
    title: "Optimize",
    desc: "Track performance against measurable metrics continuously to ensure ongoing Return on Investment (ROI).",
  },
];

function EngagementModel() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-['Inter',sans-serif] bg-[#050505] py-15 md:py-20 px-4 md:px-5 relative w-full overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] before:bg-size-[40px_40px] before:z-10 before:pointer-events-none before:animate-[tek-move-grid-model_15s_linear_infinite]"
    >
      <style>{`
        @keyframes tek-move-grid-model {
          0% { background-position: 0px 0px; }
          100% { background-position: 80px 80px; } 
        }
        @keyframes tek-float-anim-model {
          0% { transform: translate(0, 0) scale(0.9); }
          50% { transform: translate(150px, -100px) scale(1.1); }
          100% { transform: translate(-100px, 150px) scale(1); }
        }
      `}</style>

      {/* Background Blobs (Using radial gradients to avoid huge blur bugs) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(10,130,75,0.35)_0%,transparent_60%)] -top-[20%] -left-[10%] animate-[tek-float-anim-model_12s_infinite_alternate_ease-in-out]" />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.25)_0%,transparent_60%)] -bottom-[20%] -right-[10%] animate-[tek-float-anim-model_15s_infinite_alternate_ease-in-out] [animation-delay:-3s]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_60%)] top-[20%] left-[20%] animate-[tek-float-anim-model_18s_infinite_alternate_ease-in-out] [animation-delay:-7s]" />
      </div>

      <div className="max-w-287.5 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12.5 relative z-20">
        {/* Left Side: Sticky Header */}
        <div
          className={cn(
            "flex-1 lg:sticky lg:top-[130px] lg:self-start lg:pb-5 w-full max-w-full lg:max-w-112.5 text-center lg:text-left transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
        >
          <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 text-[#10B981] bg-[#0f0f0f]/80 backdrop-blur-[10px] py-1.5 px-4 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1.2px] mb-3.75 border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <i className="fas fa-layer-group" aria-hidden="true" /> Engagement
            Model
          </div>

          <h2 className="text-[clamp(1.5rem,2.5vw,1.8rem)] text-white font-black leading-[1.2] m-0 mb-6 tracking-[-0.5px]">
            A Systematic Method for <br className="hidden lg:block" />
            <span className="text-[#10B981]">Sustainable Impact</span>
          </h2>

          {/* Compact Conclusion Box */}
          <div className="bg-[#0f0f0f]/60 backdrop-blur-[16px] border border-white/60 border-l-4 border-l-[#10B981] rounded-xl p-5 lg:p-[22px_25px] relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-left">
            <i
              className="fas fa-shield-halved absolute -bottom-3.5 -right-2.5 text-[5rem] text-white/5 z-0 pointer-events-none"
              aria-hidden="true"
            />

            <p className="relative z-10 text-[0.8rem] text-slate-200 leading-[1.6] m-0 font-normal">
              As a staffing company in USA that focuses on the maturity of the
              enterprise,{" "}
              <strong className="text-white font-bold">
                our philosophy allows for both the growth of the workforce and
                the modernisation of technology.
              </strong>
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[#10B981] text-[0.68rem] font-extrabold uppercase tracking-[1px] no-underline mt-3 relative z-10 transition-colors duration-300 pb-0.5 group/link"
            >
              Learn More
              <i
                className="fas fa-arrow-right text-[0.6rem] transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              />
              <span className="absolute bottom-0 left-0 w-[30%] h-[1.5px] bg-[#10B981] transition-all duration-300 group-hover/link:w-full group-hover/link:bg-white" />
            </a>
          </div>
        </div>

        {/* Right Side: Step Cards */}
        <div className="flex-[1.2] flex flex-col gap-4 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#0f0f0f]/60 backdrop-blur-[16px] border border-white/60 rounded-xl p-[18px_20px] lg:p-[22px_25px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-400 relative overflow-hidden flex flex-col group/step ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5",
                "hover:-translate-x-1 lg:hover:-translate-x-1.25 hover:bg-[#141414]/80 hover:shadow-[0_15px_35px_rgba(10,130,75,0.4)] hover:border-white",
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Left animated border */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#10B981] scale-y-0 origin-bottom transition-transform duration-400 group-hover/step:scale-y-100" />

              <div className="flex justify-between items-center lg:items-start mb-2.5 lg:mb-3">
                <div className="text-[1.8rem] lg:text-[2.2rem] font-black leading-[0.8] text-transparent [-webkit-text-stroke:1.2px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover/step:[-webkit-text-stroke:1.2px_#10B981] group-hover/step:text-[#0A824B]/10">
                  {step.num}
                </div>
                <div className="w-[35px] h-[35px] lg:w-[38px] lg:h-[38px] bg-[#0A824B]/25 text-[#10B981] text-[0.9rem] lg:text-[1rem] flex items-center justify-center rounded-lg transition-all duration-300 border border-[#10B981]/30 group-hover/step:bg-[#10B981] group-hover/step:text-white group-hover/step:-rotate-12 group-hover/step:scale-105">
                  <i className={step.icon} aria-hidden="true" />
                </div>
              </div>

              <h3 className="text-[0.95rem] lg:text-[1rem] text-white font-extrabold m-0 mb-2">
                {step.title}
              </h3>
              <p className="text-[0.85rem] lg:text-[0.82rem] text-slate-300 leading-[1.6] m-0 font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementModel;
