"use client";
import { FiCheck, FiMessageCircle } from "react-icons/fi";

export default function PricingPage() {
  return (
    <div className="bg-[#0e0e0e] text-white">
 

      <main className="pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Transparent Pricing,
            <br />
            No Hidden Costs.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Flexible solutions for every stage of your digital journey.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#131313] rounded-xl p-8 flex flex-col border border-white/10">
              <h3 className="text-gray-400 text-sm uppercase mb-2">
                Starter
              </h3>

              <div className="text-4xl font-extrabold mb-6">
                ₹1,25,000
              </div>

              <ul className="space-y-4 mb-12 flex-grow text-gray-400">
                {[
                  "Single Landing Page",
                  "Responsive Design",
                  "SEO Optimization",
                  "48h Email Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-[#e3f700]" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-[#262626] hover:bg-[#333]">
                Choose Starter
              </button>
            </div>

            {/* Pro */}
            <div className="relative bg-[#262626] rounded-xl p-10 flex flex-col border-2 border-[#e3f700]/30 scale-105">
              <div className="absolute top-0 right-0 bg-[#e3f700] text-black px-4 py-1 text-xs font-black rounded-bl-xl">
                POPULAR
              </div>

              <h3 className="text-[#e3f700] text-sm uppercase mb-2">
                Pro
              </h3>

              <div className="text-5xl font-extrabold mb-6">
                ₹4,15,000
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Full Web Application",
                  "Custom CMS Integration",
                  "API Development",
                  "24/7 Priority Support",
                  "Advanced Analytics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-[#e3f700]" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-[#e3f700] text-black font-black hover:scale-105 transition">
                Get Started Now
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-[#131313] rounded-xl p-8 flex flex-col border border-white/10">
              <h3 className="text-gray-400 text-sm uppercase mb-2">
                Enterprise
              </h3>

              <div className="text-4xl font-extrabold mb-6">
                Custom
              </div>

              <ul className="space-y-4 mb-12 flex-grow text-gray-400">
                {[
                  "Dedicated Architect Team",
                  "Cloud Infrastructure Setup",
                  "Legacy Migration",
                  "SLA Agreements",
                  "Custom Security Audits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-[#e3f700]" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-[#262626] hover:bg-[#333]">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Contact + WhatsApp */}
        <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnTWAW-77YLCY_fj_taZxkNaB4_T3btFQ17WlgGtteMk8XirzSWdYqepeSk083rzAnvuQZvenln0pOhOxnmem5mONZX-EjXhipquO8UFWGWLhNd3B3ad8R9lD7PSFo5FwMvl5yitWScY8O1pKgXiR9WvNfXHdiH42zZc8MPrl2Yt8kig5SQD_7bdzyVwO2F2e9P3UgkPNkPDXXgeke-amo70KRE9eTFW7X_gQXrPmIF9DpEsITWgMA_oP2IyW5z1bABVj-wx2jIDub"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 bg-[#1a1919] rounded-2xl border border-white/10">
              <h4 className="text-2xl font-bold mb-4">
                Need a tailored solution?
              </h4>

              <p className="text-gray-400 mb-8">
                Connect with us instantly on WhatsApp.
              </p>

              <a
                href="https://wa.me/yournumber"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                <FiMessageCircle />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#131313] p-10 rounded-2xl border border-white/10">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  className="w-full bg-black rounded-xl p-4"
                  placeholder="Your Name"
                />
                <input
                  className="w-full bg-black rounded-xl p-4"
                  placeholder="Email"
                />
              </div>

              <select className="w-full bg-black rounded-xl p-4">
                <option>Starter Plan Inquiry</option>
                <option>Pro Plan Inquiry</option>
                <option>Enterprise</option>
              </select>

              <textarea
                className="w-full bg-black rounded-xl p-4"
                placeholder="Project Brief"
                rows="4"
              />

              <button className="w-full py-4 rounded-xl bg-[#e3f700] text-black font-black text-lg">
                Request Consultation
              </button>
            </form>
          </div>
        </section>
      </main>

    </div>
  );
}