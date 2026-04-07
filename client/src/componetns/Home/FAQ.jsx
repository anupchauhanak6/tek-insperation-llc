import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const faqs = [
  {
    q: "How does TEK Inspirations differ from other agencies?",
    a: "We provide enterprise consulting and execution alongside staffing, whereas most agencies only handle basic placements. We focus on long-term digital maturity and compliance.",
  },
  {
    q: "Do you support nationwide clients?",
    a: "Yes, we support enterprise clients across the entire USA. Our distributed talent model allows us to source, vet, and place highly skilled professionals in any market.",
  },
  {
    q: "What industries do you primarily serve?",
    a: "We specialize in providing top-tier talent for Healthcare & Life Sciences, Financial Services (FinTech), E-commerce, Telecommunications, and Industrial Operations.",
  },
  {
    q: "How is your RPO model structured?",
    a: "Our Recruitment Process Outsourcing (RPO) solutions include defined SLAs, deep reporting metrics, dedicated recruiting teams, and scalable hiring pipelines tailored to your specific workflow.",
  },
  {
    q: "Do you provide custom software development?",
    a: "Absolutely. Beyond staffing, we have a dedicated engineering division that builds secure, scalable, and custom software applications aligned with your enterprise operational goals.",
  },
];

function FAQ() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="font-['Inter',sans-serif] bg-white py-[60px] md:py-[90px] px-4 md:px-5 relative w-full z-10"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_40px] bg-top" />

      <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[60px] relative z-10">
        {/* LEFT SIDE: HEADER */}
        <div
          className={cn(
            "flex-1 lg:sticky lg:top-[100px] max-w-full lg:max-w-[400px] text-center lg:text-left transition-all duration-[600ms] ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
        >
          <div className="inline-flex items-center gap-1.5 text-[#10b981] bg-[#EBF7F1] py-1 px-3 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1.2px] mb-[15px] border border-[#10b981]/20">
            <i className="fas fa-circle-question" aria-hidden="true" />{" "}
            Knowledge Base
          </div>

          <h2 className="text-[1.8rem] md:text-[clamp(1.8rem,3vw,2.2rem)] text-slate-900 font-black leading-[1.2] m-0 mb-[12px] md:mb-[15px] tracking-[-1px]">
            Frequently Asked <br className="hidden lg:block" />
            <span className="text-[#10b981]">Questions</span>
          </h2>

          <p className="text-[0.9rem] md:text-[0.85rem] text-slate-600 leading-[1.6] m-0 mb-[25px] md:mb-[30px] lg:max-w-none max-w-xl mx-auto lg:mx-0">
            Quick answers to our most common enterprise staffing and consulting
            inquiries.
          </p>

          <div className="bg-slate-900 rounded-xl p-[22px] flex items-start gap-[15px] text-left shadow-[0_15px_30px_rgba(15,23,42,0.1)] border-l-4 border-[#10b981] lg:max-w-none max-w-xl mx-auto lg:mx-0">
            <div className="w-10 h-10 min-w-[40px] bg-white/5 text-[#10b981] text-[1rem] flex items-center justify-center rounded-lg">
              <i className="fas fa-headset" aria-hidden="true" />
            </div>
            <div>
              <h4 className="m-0 mb-1 text-[0.95rem] text-white font-bold">
                Still have questions?
              </h4>
              <p className="m-0 text-[0.8rem] text-slate-300 leading-[1.5]">
                Can't find the answer you're looking for? Reach out to our
                leadership team.
              </p>
              <a
                href="#contact"
                className="inline-flex mt-3 bg-[#10b981] text-white py-2 px-4 rounded-md font-bold no-underline text-[0.75rem] uppercase tracking-[0.5px] transition-colors duration-300 hover:bg-white hover:text-slate-900"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: ACCORDION */}
        <div className="flex-[1.2] flex flex-col gap-[12px] w-full lg:max-w-none max-w-2xl mx-auto lg:mx-0">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "bg-white border rounded-[10px] transition-all overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.02)] ease-out",
                  isActive
                    ? "border-[#10b981] shadow-[0_10px_25px_rgba(16,185,129,0.1)] delay-0 duration-300"
                    : "border-slate-200 duration-300",
                  /* Entry animation with stagger fade-up */
                  !isVisible && "opacity-0 translate-y-5",
                )}
                style={{
                  transitionDelay: isVisible ? "0ms" : `${index * 100}ms`,
                  // Once visible, we remove delay for regular hover/click interactions
                  ...(isVisible && {
                    transitionDuration: "300ms",
                    opacity: 1,
                    transform: "translateY(0)",
                  }),
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={cn(
                    "w-full text-left bg-transparent border-none p-[15px_18px] md:p-[18px_22px] text-[0.9rem] md:text-[0.95rem] font-bold cursor-pointer flex justify-between items-center gap-[15px] transition-colors duration-300",
                    isActive
                      ? "text-[#10b981] bg-white"
                      : "text-slate-900 hover:bg-slate-50",
                  )}
                >
                  {faq.q}
                  <span
                    className={cn(
                      "w-7 h-7 min-w-[28px] rounded-md flex items-center justify-center text-[0.75rem] transition-all duration-400",
                      isActive
                        ? "bg-[#10b981] text-white rotate-180"
                        : "bg-[#EBF7F1] text-[#10b981]",
                    )}
                  >
                    <i
                      className={cn("fas", isActive ? "fa-minus" : "fa-plus")}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="p-[0_18px_18px_18px] md:p-[0_22px_20px_22px] text-[0.85rem] text-slate-600 leading-[1.6] m-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
