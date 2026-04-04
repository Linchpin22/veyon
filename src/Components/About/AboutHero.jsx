export default function AboutHero() {
  return (
     <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#e3f700]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#daee00]/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <span className="text-[#e3f700] uppercase tracking-[0.3em] text-xs mb-6 block">
              The Digital Architect
            </span>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8">
              We Build <span className="text-[#e3f700]">Modern</span> Digital Experiences
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Pixora is a boutique studio specializing in crafting high-end digital products
              that live at the intersection of architectural precision and creative soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#e3f700] text-black rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(227,247,0,0.3)] transition-all">
                Our Manifesto
              </button>

              <button className="px-8 py-4 bg-[#1a1919] text-white rounded-xl border border-white/10 hover:bg-[#262626] transition-all">
                View Projects
              </button>
            </div>
          </div>
        </section>
  )}