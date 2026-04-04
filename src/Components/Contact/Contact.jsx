import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Initiate <span className="text-[#e3f700]">Contact</span>.
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl">
            Ready to architect your digital product? Our team is ready to help
            turn your vision into reality.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <section className="lg:col-span-7 bg-[#131313] p-8 md:p-12 rounded-xl">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  placeholder="Full Name"
                  className="w-full bg-black border-b border-white/10 p-4"
                />
                <input
                  placeholder="Email Address"
                  className="w-full bg-black border-b border-white/10 p-4"
                />
              </div>

              <input
                placeholder="Phone Number"
                className="w-full bg-black border-b border-white/10 p-4"
              />

              <textarea
                placeholder="Your Project Brief"
                rows="4"
                className="w-full bg-black border-b border-white/10 p-4"
              />

              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                  Send Message <FiArrowRight />
                </button>

                <button className="bg-[#e3f700] text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                  WhatsApp <FiMessageCircle />
                </button>
              </div>
            </form>
          </section>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <section className="bg-[#262626] p-8 rounded-xl">
              <h3 className="text-[#e3f700] text-sm uppercase mb-8">
                Contact Info
              </h3>

              <div className="space-y-6 text-gray-400">
                <div>
                  <p className="text-white font-bold">Office</p>
                  <p>22 Bishopsgate, London</p>
                </div>

                <div>
                  <p className="text-white font-bold">Email</p>
                  <p>hello@BlackGiraffe.digital</p>
                </div>

                <div>
                  <p className="text-white font-bold">Phone</p>
                  <p>+44 20 7946 0123</p>
                </div>
              </div>
            </section>

            <section className="bg-[#131313] p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Company Stats</h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-gray-400">Retention</div>
                </div>

                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>

                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-gray-400">Awards</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
