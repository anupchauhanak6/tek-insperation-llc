import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const partners = [
  { icon: "fab fa-aws", name: "AWS Partner" },
  { icon: "fab fa-microsoft", name: "Microsoft" },
  { icon: "fab fa-salesforce", name: "Salesforce" },
  { icon: "fab fa-stripe", name: "Stripe" },
  { icon: "fab fa-slack", name: "Slack" },
  { icon: "fab fa-google", name: "Google Cloud" },
  { icon: "fas fa-shield-halved", name: "Cloudflare" },
];

// Duplicate array to create a seamless infinite scrolling effect
const duplicatedPartners = [...partners, ...partners];

function PartnerSlider() {
  return (
    <section className="font-['Inter',sans-serif] bg-white py-10 md:py-[60px] px-4 md:px-5 relative w-full overflow-hidden border-y border-black/5 z-10">
      <style>
        {`
          @keyframes tekScrollLogos {
            0% { transform: translateX(0); }
            /* Translate exactly half the width (since we duplicate the logos). Adjusting for gap (60px/2 = 30px) */
            100% { transform: translateX(calc(-50% - 30px)); }
          }
        `}
      </style>

      {/* Faint Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:40px_40px] bg-top" />

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* Header Header (Micro Typography) */}
        <div className="text-[0.6rem] md:text-[0.68rem] font-bold uppercase tracking-[1px] md:tracking-[2px] text-slate-500 mb-[25px] md:mb-[35px] text-center">
          Trusted by <span className="text-[#10b981] font-extrabold">500+</span>{" "}
          innovative enterprise teams worldwide
        </div>

        {/* Infinite Slider */}
        <div
          className="w-full overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex items-center gap-10 md:gap-[60px] w-max hover:[animation-play-state:paused]"
            style={{ animation: "tekScrollLogos 30s linear infinite" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 text-[1.1rem] md:text-[1.4rem] font-extrabold text-slate-400 opacity-60 transition-all duration-300 cursor-pointer whitespace-nowrap group/logo hover:opacity-100 hover:text-slate-900 hover:scale-105"
              >
                <i
                  className={cn(
                    partner.icon,
                    "text-[1.4rem] md:text-[1.8rem] transition-colors duration-300 group-hover/logo:text-[#10b981]",
                  )}
                  aria-hidden="true"
                />
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSlider;
