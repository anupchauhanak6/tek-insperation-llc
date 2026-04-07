import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const slides = [
  {
    badgeIcon: "fas fa-shield-halved",
    badgeText: "USA IT Recruiting",
    titleLine1: "Strategic IT Talent.",
    titleSpan: "Enterprise Execution.",
    desc: "Bridging the technology skills gap and driving high-level productivity for enterprises across the USA with precision and compliance.",
    buttons: [
      {
        type: "solid",
        text: "Consult Now",
        icon: "fas fa-arrow-right",
        link: "#consult",
        label: "Consult Now",
      },
      {
        type: "outline",
        text: "Our Capabilities",
        link: "#capabilities",
        label: "View Our Capabilities",
      },
    ],
  },
  {
    badgeIcon: "fas fa-bolt",
    badgeText: "Digital Transformation",
    titleLine1: "Future-Proof Your",
    titleSpan: "Workforce.",
    desc: "Accelerate growth with specialised tech professionals and scalable hiring models tailored for modern digital demands.",
    buttons: [
      {
        type: "solid",
        text: "Explore Solutions",
        icon: "fas fa-arrow-right",
        link: "#solutions",
        label: "Explore Solutions",
      },
      {
        type: "outline",
        text: "About Us",
        link: "#about",
        label: "Learn About Us",
      },
    ],
  },
  {
    badgeIcon: "fas fa-chart-line",
    badgeText: "Managed Solutions",
    titleLine1: "Seamless Compliance &",
    titleSpan: "Guaranteed ROI.",
    desc: "From comprehensive RPO to end-to-end managed services, we handle the operational complexity so you can focus on innovation.",
    buttons: [
      {
        type: "solid",
        text: "Learn About RPO",
        icon: "fas fa-arrow-right",
        link: "#rpo",
        label: "Learn About RPO",
      },
    ],
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section
      className="relative w-full h-[90vh] min-h-125 md:h-screen md:min-h-150 bg-black overflow-hidden m-0 p-0 font-['Inter',sans-serif]"
      aria-label="Main Capabilities Slider"
    >
      {/* Video Background Setup */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        <video
          className="w-full h-full object-cover blur-[2px] brightness-45 scale-[1.02] pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Subtle Overlay Texture */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      {/* Slide Content */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <article
            key={index}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-1200 ease-in-out",
              isActive
                ? "opacity-100 visible z-30"
                : "opacity-0 invisible z-20",
            )}
            aria-hidden={isActive ? "false" : "true"}
          >
            <div
              className={cn(
                "relative z-50 w-full max-w-200 px-5 text-center flex flex-col items-center transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200",
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7.5 opacity-0",
              )}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-500 py-1.5 px-3.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1.5px] mb-5 backdrop-blur-sm">
                <i className={slide.badgeIcon} aria-hidden="true" />{" "}
                {slide.badgeText}
              </div>

              {/* SEO Friendly Heading */}
              <h2 className="text-[1.8rem] md:text-[clamp(1.8rem,4vw,3rem)] text-white font-black leading-[1.15] m-0 mb-4 tracking-[-0.5px]">
                {slide.titleLine1} <br />
                <span className="text-emerald-500">{slide.titleSpan}</span>
              </h2>

              {/* Clean Paragraph */}
              <p className="text-[0.85rem] md:text-[0.95rem] text-slate-200 leading-[1.6] max-w-150 mx-auto mb-6.25 md:mb-7.5 font-normal">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto gap-3 md:gap-3.75">
                {slide.buttons.map((btn, btnIdx) => (
                  <a
                    key={btnIdx}
                    href={btn.link}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 text-[0.8rem] font-bold uppercase tracking-[1px] py-3 px-7 rounded-full no-underline transition-all duration-300 w-full max-w-70 md:w-auto md:max-w-none group/btn",
                      btn.type === "solid"
                        ? "bg-emerald-500 text-white border-2 border-emerald-500 shadow-[0_4px_15px_rgba(16,185,129,0.2)] hover:bg-transparent hover:text-emerald-500 hover:-translate-y-0.5"
                        : "bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 hover:border-white hover:-translate-y-0.5",
                    )}
                    aria-label={btn.label}
                  >
                    {btn.text}
                    {btn.icon && (
                      <i
                        className={cn(
                          btn.icon,
                          "text-[0.7rem] transition-transform duration-300 group-hover/btn:translate-x-1.25",
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      })}

      {/* Slider Navigation Dots */}
      <div
        className="absolute bottom-5 md:bottom-7.5 left-1/2 -translate-x-1/2 flex gap-2.5 z-40"
        role="tablist"
      >
        {slides.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              className={cn(
                "h-2 bg-white/30 rounded-full cursor-pointer transition-all duration-400 border-none p-0",
                isActive
                  ? "w-7.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                  : "w-2 hover:bg-white/50",
              )}
              role="tab"
              aria-selected={isActive ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              title={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
