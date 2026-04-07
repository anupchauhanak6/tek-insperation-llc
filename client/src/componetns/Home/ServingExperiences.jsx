import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const marqueeItems = [
  { icon: "fas fa-cloud", text: "Technology & SaaS" },
  { icon: "fas fa-staff-snake", text: "Healthcare & Life Sciences" },
  { icon: "fas fa-coins", text: "Financial Services" },
  { icon: "fas fa-satellite-dish", text: "Telecommunications" },
  { icon: "fas fa-cart-shopping", text: "Retail & E-Commerce" },
  { icon: "fas fa-industry", text: "Manufacturing" },
  { icon: "fas fa-bolt", text: "Energy & Utilities" },
  { icon: "fas fa-shield-halved", text: "Cybersecurity" },
  { icon: "fas fa-microchip", text: "AI & Machine Learning" },
];

function ServingExperiences() {
  return (
    <>
      <style>{`
        @keyframes tekScrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
      `}</style>
      <div className="font-['Inter',sans-serif] bg-white py-4 lg:py-5 border-y border-slate-900/5 overflow-hidden w-full flex items-center relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] before:bg-size-[40px_40px] before:z-0 before:pointer-events-none">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full max-w-337.5 mx-auto gap-3.75 lg:gap-0 relative z-20">
          {/* Static Label (Left Side) */}
          <div className="text-[0.7rem] lg:text-[0.75rem] font-extrabold text-slate-900 uppercase tracking-[1.5px] px-5 lg:px-10 lg:border-r border-slate-900/5 whitespace-nowrap z-30 bg-white flex items-center gap-2">
            <i
              className="fas fa-building-user text-emerald-500 text-[0.85rem]"
              aria-hidden="true"
            />{" "}
            Serving Enterprises In
          </div>

          {/* Scrolling Track */}
          <div
            className="flex-1 overflow-hidden flex w-full"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-[tekScrollMarquee_35s_linear_infinite] hover:[animation-play-state:paused] py-4">
              {/* Content Block 1 */}
              <div className="flex gap-3.75 pr-3.75 items-center">
                {marqueeItems.map((item, index) => (
                  <div
                    key={`block1-${index}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-600 border border-slate-200 py-1.5 lg:py-2 px-4 lg:px-5 rounded-full text-[0.75rem] lg:text-[0.8rem] font-semibold whitespace-nowrap shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-default hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(16,185,129,0.15)] group/pill"
                  >
                    <i
                      className={cn(
                        item.icon,
                        "text-[0.8rem] lg:text-[0.9rem] text-emerald-500 transition-colors duration-300 group-hover/pill:text-white",
                      )}
                      aria-hidden="true"
                    />{" "}
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Content Block 2 (Duplicate for seamless loop) */}
              <div className="flex gap-3.75 pr-3.75 items-center">
                {marqueeItems.map((item, index) => (
                  <div
                    key={`block2-${index}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-600 border border-slate-200 py-1.5 lg:py-2 px-4 lg:px-5 rounded-full text-[0.75rem] lg:text-[0.8rem] font-semibold whitespace-nowrap shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-default hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(16,185,129,0.15)] group/pill"
                  >
                    <i
                      className={cn(
                        item.icon,
                        "text-[0.8rem] lg:text-[0.9rem] text-emerald-500 transition-colors duration-300 group-hover/pill:text-white",
                      )}
                      aria-hidden="true"
                    />{" "}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServingExperiences;
