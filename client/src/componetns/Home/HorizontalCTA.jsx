import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function HorizontalCTA() {
  return (
    <section
      className="font-['Inter',sans-serif] bg-[#075E2E] py-[40px] px-5 w-full box-border"
      aria-label="Call to Action"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-0 text-center lg:text-left">
        {/* Left Side: Heading */}
        <div className="flex-1 lg:pr-10 w-full">
          <h2 className="text-white text-[1.6rem] lg:text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.2] m-0 tracking-[-0.5px]">
            Ready to Transform
            <br />
            Your Workforce?
          </h2>
        </div>

        {/* Right Side: Text & Button */}
        <div className="flex-1 lg:pl-10 w-full flex flex-col items-center lg:items-start border-t lg:border-t-0 lg:border-l border-white/20 pt-[25px] lg:pt-0">
          <p className="text-white/90 text-[0.8rem] lg:text-[0.85rem] font-semibold uppercase leading-[1.6] m-0 mb-[20px] lg:mb-[15px] tracking-[0.5px]">
            Book your free strategic IT consultation today.
            <br />
            No obligation, just expert advice.
          </p>
          <a
            href="#contact"
            className="bg-white text-[#075E2E] py-3 px-7 rounded-md text-[0.85rem] font-extrabold uppercase no-underline inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.1)] w-full max-w-[250px] lg:w-auto hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            aria-label="Get Started Now"
          >
            Get Started Now{" "}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HorizontalCTA;
