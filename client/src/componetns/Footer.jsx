import React from "react";

function Footer() {
  return (
    <footer className="font-['Plus_Jakarta_Sans',sans-serif] bg-[#090e17] text-slate-500 relative border-t border-white/5 w-full block box-border overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px] bg-top">
      {/* Top Glowing Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#10b981] to-transparent opacity-80 z-10" />

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-25 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-312.5 mx-auto pt-11.25 px-5 sm:px-6.25 pb-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-7.5 sm:gap-8.75 mb-6.25 sm:mb-8.75">
          {/* Brand Column */}
          <div className="lg:pr-3.75">
            <h2 className="text-[1.3rem] font-extrabold text-white m-0 mb-3 tracking-[-0.5px]">
              TEK <span className="text-[#10b981]">Inspirations</span>
            </h2>
            <p className="text-[0.85rem] leading-[1.7] text-slate-500 m-0 mb-4.5 max-w-full sm:max-w-75">
              Partnering with organizations in the USA to provide integrated
              talent deployment and enterprise technology execution.
            </p>
            <div className="flex gap-2.5">
              {[
                "fa-facebook-f",
                "fa-linkedin-in",
                "fa-instagram",
                "fa-x-twitter",
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social Link"
                  className="w-8 h-8 rounded-lg bg-white/5 text-slate-500 flex items-center justify-center text-[0.85rem] transition-all duration-300 border border-white/5 hover:bg-[#10b981] hover:text-[#000000] hover:-translate-y-0.75 hover:border-[#10b981] hover:shadow-[0_5px_15px_rgba(16,185,129,0.2)]"
                >
                  <i className={`fa-brands ${icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-slate-200 text-[0.9rem] font-bold uppercase tracking-[1px] m-0 mb-3.75">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0">
              {[
                "Home",
                "Who We Are",
                "Our Solutions",
                "Gallery",
                "Insights",
                "Contact Us",
              ].map((link, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    className="text-slate-500 text-[0.85rem] font-medium transition-all duration-300 inline-flex items-center gap-1.5 group hover:text-slate-200"
                  >
                    <span className="w-0 h-px bg-[#10b981] transition-all duration-300 group-hover:w-2.5" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center Column */}
          <div>
            <h4 className="text-slate-200 text-[0.9rem] font-bold uppercase tracking-[1px] m-0 mb-3.75">
              Help Center
            </h4>
            <ul className="list-none m-0 p-0">
              {[
                "FAQ",
                "Unsubscribe",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    className="text-slate-500 text-[0.85rem] font-medium transition-all duration-300 inline-flex items-center gap-1.5 group hover:text-slate-200"
                  >
                    <span className="w-0 h-px bg-[#10b981] transition-all duration-300 group-hover:w-2.5" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-slate-200 text-[0.9rem] font-bold uppercase tracking-[1px] m-0 mb-3.75">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-2.5">
                <div className="text-[#10b981] text-[0.85rem] mt-0.75">
                  <i className="fas fa-location-dot" />
                </div>
                <div className="text-slate-200 text-[0.85rem] font-semibold leading-[1.4]">
                  Head Office
                  <span className="block text-slate-500 text-[0.8rem] font-normal mt-0.5">
                    13573 Tabasco Cat Trail,
                    <br />
                    Frisco, TX 75035
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-[#10b981] text-[0.85rem] mt-0.75">
                  <i className="fas fa-envelope" />
                </div>
                <div className="text-slate-200 text-[0.85rem] font-semibold leading-[1.4]">
                  Email Us
                  <span className="block text-slate-500 text-[0.8rem] font-normal mt-0.5">
                    info@tekinspirations.com
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-[#10b981] text-[0.85rem] mt-0.75">
                  <i className="fas fa-phone" />
                </div>
                <div className="text-slate-200 text-[0.85rem] font-semibold leading-[1.4]">
                  Call Us
                  <span className="block text-slate-500 text-[0.8rem] font-normal mt-0.5">
                    +91 99973-22233{" "}
                    <span className="text-[0.9rem] ml-1.25" title="India">
                      🇮🇳
                    </span>
                  </span>
                  <span className="block text-slate-500 text-[0.8rem] font-normal mt-0.5">
                    +1 469-518-9454{" "}
                    <span className="text-[0.9rem] ml-1.25" title="USA">
                      🇺🇸
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/5 pt-4.5 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-0">
          <p className="text-[0.75rem] text-slate-500 m-0">
            &copy; Copyright 2026 | Powered By{" "}
            <strong className="text-slate-200 font-semibold">
              TEK Inspirations LLC
            </strong>
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-slate-500 text-[0.75rem] transition-colors duration-300 hover:text-slate-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 text-[0.75rem] transition-colors duration-300 hover:text-slate-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
