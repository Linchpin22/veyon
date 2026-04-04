import Link from "next/link";

export default function Cta() {
  return (
 <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-[#e3f700] rounded-[2rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8">
              Let's Build Something Great Together
            </h2>

            <p className="text-black/70 text-lg md:text-xl max-w-xl mx-auto mb-12">
              Ready to elevate your digital presence? Join the ranks of industry
              leaders who chose the Luminous Monolith.
            </p>

            <Link href="/pricing" className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
              Start Your Project
            </Link>
          </div>
        </section>
      )}