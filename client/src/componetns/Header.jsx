import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const logoUrl =
  "https://rosybrown-cassowary-388344.hostingersite.com/wp-content/uploads/2026/04/images.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 5);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";

    document.head.appendChild(faLink);
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(faLink);
      document.head.removeChild(fontLink);
    };
  }, []);

  const toggleAccordion = (name) => {
    setActiveAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <div className="font-['Inter',sans-serif]">
      {/* 1. HEADER CONTAINER */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white/95 backdrop-blur-[10px] border-b border-black/5 z-1000 h-18.75 transition-all duration-300",
          isScrolled && "shadow-[0_4px_25px_rgba(0,0,0,0.04)] bg-white/98",
        )}
      >
        <div className="max-w-300 mx-auto px-5 flex items-center justify-between h-full">
          {/* 2. IMAGE LOGO */}
          <a
            href="https://rosybrown-cassowary-388344.hostingersite.com/"
            className="flex items-center no-underline h-full w-auto"
          >
            <img
              src={logoUrl}
              alt="Company Logo"
              className="max-h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>

          {/* 3. CENTER NAVIGATION (DESKTOP) */}
          <nav className="hidden lg:flex items-center h-full flex-1 justify-center">
            <ul className="list-none p-0 m-0 flex items-center gap-8.75 h-full">
              <li className="h-full flex items-center relative group">
                <a
                  href="https://rosybrown-cassowary-388344.hostingersite.com/"
                  className="text-slate-600 no-underline text-[0.9rem] font-semibold flex items-center gap-1.5 h-full transition-colors duration-200 group-hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li className="h-full flex items-center relative group">
                <a
                  href="#"
                  className="text-slate-600 no-underline text-[0.9rem] font-semibold flex items-center gap-1.5 h-full transition-colors duration-200 group-hover:text-slate-900"
                >
                  Company
                  <i className="fas fa-chevron-down text-[0.65rem] opacity-60 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100 group-hover:text-emerald-500" />
                </a>
                {/* 4. MEGA MENU (DESKTOP) */}
                <div className="absolute top-18.75 left-1/2 -translate-x-1/2 translate-y-3.75 scale-95 bg-white rounded-2xl shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-3 grid gap-1 cursor-default before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 w-70 grid-cols-1">
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/our-leaders/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-users" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        Our Leaders
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        Meet the executive team
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/about/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-building" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        About TEK
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        Discover our journey
                      </span>
                    </div>
                  </a>
                </div>
              </li>

              <li className="h-full flex items-center relative group">
                <a
                  href="https://rosybrown-cassowary-388344.hostingersite.com/services/"
                  className="text-slate-600 no-underline text-[0.9rem] font-semibold flex items-center gap-1.5 h-full transition-colors duration-200 group-hover:text-slate-900"
                >
                  Solutions
                  <i className="fas fa-chevron-down text-[0.65rem] opacity-60 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100 group-hover:text-emerald-500" />
                </a>
                <div className="absolute top-18.75 left-1/2 -translate-x-1/2 translate-y-3.75 scale-95 bg-white rounded-2xl shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid gap-1 cursor-default before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 w-150 grid-cols-2 p-4">
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/it-consulting-services-usa/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-laptop-code" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        IT Consulting
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        Strategic tech & advisory
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/managed-it-services-usa/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-server" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        Managed Services
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        End-to-end IT support
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/rpo-solutions/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-user-tie" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        RPO Solutions
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        Scalable recruitment
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/software-development-2/"
                    className="flex items-start gap-3.5 p-3 no-underline rounded-[10px] transition-colors duration-200 hover:bg-slate-50 group/item"
                  >
                    <div className="w-9.5 h-9.5 min-w-9.5 bg-slate-100 text-slate-600 rounded-[10px] flex items-center justify-center text-[1.1rem] transition-colors duration-300 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500">
                      <i className="fas fa-code" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-slate-900 text-[0.9rem] font-bold">
                        Software Dev
                      </strong>
                      <span className="text-slate-500 text-[0.8rem] font-normal leading-[1.4]">
                        Custom engineering apps
                      </span>
                    </div>
                  </a>
                </div>
              </li>

              <li className="h-full flex items-center relative group">
                <a
                  href="#"
                  className="text-slate-600 no-underline text-[0.9rem] font-semibold flex items-center gap-1.5 h-full transition-colors duration-200 group-hover:text-slate-900"
                >
                  Industries
                </a>
              </li>
            </ul>
          </nav>

          {/* 5. RIGHT ACTIONS & BUTTON */}
          <div className="w-auto flex items-center justify-end gap-4">
            <a
              href="#consult"
              className="hidden lg:inline-flex items-center gap-2 bg-slate-900 text-white no-underline py-2.5 px-6 rounded-lg text-[0.85rem] font-bold transition-all duration-300 shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:bg-emerald-500 hover:shadow-[0_6px_15px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
            >
              Consult Now <i className="fas fa-arrow-right text-[0.75rem]" />
            </a>
            <button
              className="flex lg:hidden bg-transparent border-none text-slate-900 text-[1.4rem] cursor-pointer p-1 transition-colors duration-300 hover:text-emerald-500"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
              type="button"
            >
              <i className="fas fa-bars-staggered" />
            </button>
          </div>
        </div>
      </header>

      {/* 6. MOBILE DRAWER (APP-LIKE UI) */}
      <div
        className={cn(
          "fixed inset-0 w-full h-screen bg-slate-900/40 backdrop-blur-xs z-1500 transition-all duration-400",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 w-full max-w-85 h-screen bg-white z-2000 shadow-[-10px_0_30px_rgba(0,0,0,0.08)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center py-5 px-6.25 border-b border-slate-100">
          <a
            href="https://rosybrown-cassowary-388344.hostingersite.com/"
            className="flex items-center no-underline h-full w-auto"
          >
            <img
              src={logoUrl}
              alt="Company Logo"
              className="max-h-8.75 w-auto object-contain"
            />
          </a>
          <button
            className="bg-slate-100 border-none text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-base cursor-pointer transition-all duration-300 hover:bg-red-100 hover:text-red-500 hover:rotate-90"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            type="button"
          >
            <i className="fas fa-xmark" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6.25">
          <ul className="list-none p-0 m-0">
            <li className="border-b border-slate-100 py-2.25">
              <a
                href="https://rosybrown-cassowary-388344.hostingersite.com/"
                className="flex justify-between items-center w-full py-2.25 text-slate-900 no-underline text-[1.05rem] font-bold transition-colors duration-200 border-none bg-transparent hover:text-emerald-500"
              >
                Home
              </a>
            </li>

            <li className="border-b border-slate-100 py-2.25">
              <button
                type="button"
                className={cn(
                  "flex justify-between items-center w-full py-2.25 text-slate-900 no-underline text-[1.05rem] font-bold transition-colors duration-200 border-none bg-transparent cursor-pointer font-inherit hover:text-emerald-500",
                  activeAccordion === "company" && "text-emerald-500",
                )}
                onClick={() => toggleAccordion("company")}
              >
                Company
                <i
                  className={cn(
                    "fas fa-chevron-down text-[0.8rem] text-slate-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    activeAccordion === "company" &&
                      "rotate-180 text-emerald-500",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  activeAccordion === "company"
                    ? "max-h-112.5 opacity-100 mt-2"
                    : "max-h-0 opacity-0",
                )}
              >
                <div className="bg-slate-50 rounded-xl mb-3.75 p-2.5 flex flex-col gap-1 border border-slate-100">
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/our-leaders/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-users text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    Our Leaders
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/about/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-building text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    About TEK
                  </a>
                </div>
              </div>
            </li>

            <li className="border-b border-slate-100 py-2.25">
              <button
                type="button"
                className={cn(
                  "flex justify-between items-center w-full py-2.25 text-slate-900 no-underline text-[1.05rem] font-bold transition-colors duration-200 border-none bg-transparent cursor-pointer font-inherit hover:text-emerald-500",
                  activeAccordion === "solutions" && "text-emerald-500",
                )}
                onClick={() => toggleAccordion("solutions")}
              >
                Solutions
                <i
                  className={cn(
                    "fas fa-chevron-down text-[0.8rem] text-slate-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    activeAccordion === "solutions" &&
                      "rotate-180 text-emerald-500",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  activeAccordion === "solutions"
                    ? "max-h-112.5 opacity-100 mt-2"
                    : "max-h-0 opacity-0",
                )}
              >
                <div className="bg-slate-50 rounded-xl mb-3.75 p-2.5 flex flex-col gap-1 border border-slate-100">
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/it-consulting-services-usa/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-laptop-code text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    IT Consulting
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/managed-it-services-usa/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-server text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    Managed Services
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/rpo-solutions/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-user-tie text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    RPO Solutions
                  </a>
                  <a
                    href="https://rosybrown-cassowary-388344.hostingersite.com/software-development-2/"
                    className="flex items-center gap-3 p-3 rounded-lg text-slate-600 no-underline text-[0.9rem] font-semibold transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-[0_2px_5px_rgba(0,0,0,0.02)] group/mobitem"
                  >
                    <i className="fas fa-code text-emerald-500 text-base opacity-70 transition-all duration-300 group-hover/mobitem:opacity-100 group-hover/mobitem:scale-110" />{" "}
                    Software Dev
                  </a>
                </div>
              </div>
            </li>

            <li className="border-b border-slate-100 py-2.25 last:border-none">
              <a
                href="#"
                className="flex justify-between items-center w-full py-2.25 text-slate-900 no-underline text-[1.05rem] font-bold transition-colors duration-200 border-none bg-transparent hover:text-emerald-500"
              >
                Industries
              </a>
            </li>
            <li className="border-b border-slate-100 py-2.25 last:border-none">
              <a
                href="#"
                className="flex justify-between items-center w-full py-2.25 text-slate-900 no-underline text-[1.05rem] font-bold transition-colors duration-200 border-none bg-transparent hover:text-emerald-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="p-6.25 border-t border-slate-100 bg-slate-50">
          <a
            href="#consult"
            className="flex justify-center items-center gap-2.5 bg-emerald-500 text-white p-4 rounded-xl text-base font-bold no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:bg-slate-900 hover:shadow-[0_4px_15px_rgba(15,23,42,0.3)]"
          >
            Consult Now <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
