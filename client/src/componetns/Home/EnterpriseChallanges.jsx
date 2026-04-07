function ServingExperiences() {
  return (
    <>
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      <section
        className="font-['Inter',sans-serif] bg-white py-20 px-5 relative w-full overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] before:bg-size-[40px_40px] before:bg-top before:z-0 before:pointer-events-none"
        aria-labelledby="enterprise-challenges"
      >
        <div className="max-w-287.5 mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-12.5 relative z-20">
          {/* Left Side: Micro Content */}
          <div className="flex-[1.1] flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-1.5 text-emerald-500 bg-[#E6F3ED] py-1 px-3 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[1.2px] mb-3.75 w-fit border border-emerald-500/20 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
              <i className="fas fa-layer-group" aria-hidden="true" /> Enterprise
              Challenges
            </div>

            <h2
              id="enterprise-challenges"
              className="text-[clamp(1.5rem,2.5vw,1.8rem)] text-slate-900 font-extrabold leading-[1.2] m-0 mb-6.25 tracking-[-0.8px]"
            >
              Bridging the Gap Between <br className="hidden lg:block" />
              <span className="text-emerald-500">Talent & Technology</span>
            </h2>

            <ul className="flex flex-col gap-3 m-0 mb-6.25 p-0 list-none w-full">
              {[
                {
                  icon: "fas fa-laptop-code",
                  text: "Specialised technology skills are becoming rare.",
                },
                {
                  icon: "fas fa-clock-rotate-left",
                  text: "Delays in hiring impact product timelines.",
                },
                {
                  icon: "fas fa-file-shield",
                  text: "Workforce compliance creates regulatory risks.",
                },
                {
                  icon: "fas fa-chart-line",
                  text: "Technology investments must ensure structured ROI.",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-3 p-3 px-4 bg-white border border-slate-200 rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-emerald-500 hover:translate-x-1.25 hover:shadow-[0_10px_25px_rgba(16,185,129,0.08)] group/feature w-full"
                >
                  <div className="w-8 h-8 min-w-8 bg-[#E6F3ED] text-emerald-500 text-[0.85rem] flex items-center justify-center rounded-md transition-all duration-300 border border-emerald-500/10 group-hover/feature:bg-emerald-500 group-hover/feature:text-white group-hover/feature:-rotate-12 group-hover/feature:scale-105">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <p className="m-0 text-[0.78rem] text-slate-900 font-semibold">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <article className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl p-5 border-l-4 border-emerald-500 shadow-[0_15px_30px_rgba(15,23,42,0.1)] text-left w-full lg:w-auto">
              <p className="m-0 mb-3.75 text-[0.78rem] text-slate-300 leading-[1.6]">
                As a leading staffing agency in USA,{" "}
                <strong className="text-white">TEK Inspirations</strong> creates
                enterprise-grade hiring solutions that align workforce
                strategies.
              </p>
              <a
                href="https://rosybrown-cassowary-388344.hostingersite.com/about/"
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-500 text-white text-[0.65rem] font-extrabold uppercase tracking-[0.5px] no-underline py-2 px-4 rounded-full transition-all duration-300 border border-emerald-500 shadow-[0_4px_10px_rgba(16,185,129,0.2)] hover:bg-transparent hover:text-emerald-500 hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(16,185,129,0.3)] group/btn"
                aria-label="Learn more about TEK Inspirations"
              >
                Learn More{" "}
                <i
                  className="fas fa-arrow-right text-[0.6rem] transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </article>
          </div>

          {/* Right Side: Image */}
          <figure className="flex-1 relative w-full lg:min-w-87.5 max-w-125 lg:max-w-none h-87.5 lg:h-auto mx-auto lg:m-0 group/img">
            <div
              className="absolute top-5 -right-5 w-4/5 h-4/5 bg-[#E6F3ED] rounded-[20px] z-0"
              aria-hidden="true"
            />
            <img
              src="https://rosybrown-cassowary-388344.hostingersite.com/wp-content/uploads/2026/04/10783951_19198934-scaled.jpg"
              alt="Enterprise IT professionals discussing technology solutions"
              className="w-full h-full object-cover rounded-[20px] shadow-[0_25px_50px_rgba(15,23,42,0.1)] relative z-10 border-[6px] border-white transition-transform duration-500 ease-out group-hover/img:-translate-y-1.25"
            />

            <div
              className="absolute bottom-6 left-2.5 lg:-left-6 bg-white/95 backdrop-blur-[10px] py-3 px-4.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] z-20 flex items-center gap-3 border border-black/5 animate-[floatBadge_4s_ease-in-out_infinite]"
              aria-label="100% ROI Driven"
            >
              <i
                className="fas fa-bolt text-emerald-500 text-[1.2rem]"
                aria-hidden="true"
              />
              <div>
                <b className="text-[1.1rem] text-slate-900 block leading-none mb-0.5">
                  100%
                </b>
                <span className="text-[0.65rem] uppercase text-slate-600 font-semibold tracking-[0.5px]">
                  ROI Driven
                </span>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}

export default ServingExperiences;
