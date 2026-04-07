import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    icon: "fas fa-users-gear",
    title: "Strategic IT Staffing",
    desc: "We provide contract, contract-to-hire, and permanent placements in high-demand tech fields. We design our solutions for speed, quality, and workforce optimisation.",
    link: "https://rosybrown-cassowary-388344.hostingersite.com/it-consulting-services-usa/",
  },
  {
    icon: "fas fa-magnifying-glass-chart",
    title: "Recruitment Outsourcing (RPO)",
    desc: "Our RPO model goes well beyond traditional agencies; we work directly with enterprises to offer scalable hiring solutions supported by measurable KPIs.",
    link: "https://rosybrown-cassowary-388344.hostingersite.com/rpo-solutions/",
  },
  {
    icon: "fas fa-network-wired",
    title: "Managed Workforce Solutions",
    desc: "As a structured agency in the US, we provide complete oversight of the contractor lifecycle, compliance governance, and performance reporting.",
    link: "https://rosybrown-cassowary-388344.hostingersite.com/managed-it-services-usa/",
  },
  {
    icon: "fas fa-lightbulb",
    title: "IT Consulting & Advisory",
    desc: "We provide expert services for digital transformation, cloud modernisation strategies, infrastructure optimisation, and enterprise IT planning.",
    link: "https://rosybrown-cassowary-388344.hostingersite.com/software-development-2/",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Custom Software Development",
    desc: "We do not stop at staffing. We also provide secure, scalable custom software development solutions aligned with your operational growth strategy.",
    link: "YOUR_LINK_HERE_5",
  },
];

function WhatWeOffer() {
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
      className="font-['Inter',sans-serif] bg-[#050505] py-15 md:py-22.5 px-4 md:px-5 relative w-full overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] before:bg-size-[40px_40px] before:z-10 before:pointer-events-none before:animate-[tek-move-grid_15s_linear_infinite]"
      aria-labelledby="what-we-offer-heading"
    >
      <style>{`
        @keyframes tek-move-grid {
          0% { background-position: 0px 0px; }
          100% { background-position: 80px 80px; }
        }
        @keyframes tek-float-anim {
          0% { transform: translate(0, 0) scale(0.9); }
          50% { transform: translate(150px, -100px) scale(1.1); }
          100% { transform: translate(-100px, 150px) scale(1); }
        }
      `}</style>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute blur-[100px] rounded-full w-150 h-150 bg-[#0A824B]/40 -top-[10%] -left-[5%] animate-[tek-float-anim_12s_infinite_alternate_ease-in-out]" />
        <div className="absolute blur-[100px] rounded-full w-125 h-125 bg-[#10B981]/25 -bottom-[15%] -right-[5%] animate-[tek-float-anim_15s_infinite_alternate_ease-in-out] [animation-delay:-3s]" />
        <div className="absolute blur-[100px] rounded-full w-100 h-100 bg-white/10 top-[30%] left-[30%] animate-[tek-float-anim_18s_infinite_alternate_ease-in-out] [animation-delay:-7s]" />
      </div>

      <div className="max-w-287.5 mx-auto relative z-20">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-11 max-w-200 mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
        >
          <div className="inline-flex items-center gap-1.5 bg-[#0f0f0f]/80 text-[#10B981] py-1.5 px-4 rounded-full text-[0.7rem] font-extrabold uppercase tracking-[1.5px] mb-3.75 border border-white/80 backdrop-blur-[10px]">
            What We Offer
          </div>
          <h2
            id="what-we-offer-heading"
            className="text-[clamp(1.8rem,3vw,2.4rem)] text-white font-black leading-[1.2] m-0 tracking-[-0.8px]"
          >
            Enterprise Solutions for{" "}
            <span className="text-[#10B981]">Talent & Technology</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((srv, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#0f0f0f]/60 backdrop-blur-lg border border-white/60 rounded-xl p-6 lg:p-[25px_25px] flex flex-col items-start transition-all duration-500 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-full group/card hover:-translate-y-1.25 hover:bg-[#141414]/80 hover:border-white hover:shadow-[0_15px_35px_rgba(10,130,75,0.4)] ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top line accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#10B981] scale-x-0 origin-left transition-transform duration-500 group-hover/card:scale-x-100" />

              <div className="w-11 h-11 bg-[#0A824B]/25 text-[#10B981] text-[1.1rem] flex items-center justify-center rounded-[10px] mb-5 border border-[#10B981]/30 transition-all duration-300 group-hover/card:bg-[#10B981] group-hover/card:text-white group-hover/card:-rotate-6 group-hover/card:scale-105">
                <i className={srv.icon} aria-hidden="true" />
              </div>

              <h3 className="text-white text-[1rem] font-extrabold m-0 mb-3 leading-[1.4]">
                {srv.title}
              </h3>
              <p className="text-slate-300 text-[0.85rem] leading-[1.6] m-0 mb-5">
                {srv.desc}
              </p>

              <a
                href={srv.link}
                className="mt-auto inline-flex items-center gap-1.5 text-[#10B981] text-[0.8rem] font-extrabold uppercase no-underline transition-colors duration-300 group-hover/card:text-white group/link"
              >
                Learn More
                <i
                  className="fas fa-arrow-right text-[0.7rem] transition-transform duration-300 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}

          {/* 6th CTA Card */}
          <div
            className={cn(
              "bg-[#0A824B]/10 backdrop-blur-lg border border-white/80 rounded-xl p-7 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-full transition-all duration-500 ease-out hover:-translate-y-1.25 hover:bg-[#0A824B]/20 hover:border-white",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5",
            )}
            style={{ transitionDelay: `${services.length * 100}ms` }}
          >
            <div className="absolute -top-[50%] -right-[50%] w-50 h-50 lg:w-50 lg:h-50 bg-[radial-gradient(circle,#10B981_0%,transparent_70%)] opacity-30 rounded-full z-0" />

            <h3 className="text-white text-[1.2rem] font-extrabold m-0 mb-2.5 relative z-10">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-300 text-[0.85rem] leading-[1.6] m-0 mb-5 relative z-10">
              Let's discuss how we can align your workforce strategy with your
              technology execution to achieve measurable results.
            </p>
            <a
              href="/contact-us"
              className="bg-[#0A824B] text-white py-2.5 px-6 rounded-full no-underline font-bold text-[0.85rem] inline-flex items-center gap-2 transition-all duration-300 relative z-10 border-2 border-[#0A824B] hover:bg-transparent hover:border-white group/btn"
            >
              Contact Our Experts
              <i
                className="fas fa-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
