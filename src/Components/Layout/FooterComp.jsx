import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Constant } from "@/Data/Constant";
import Link from "next/link";
export default function FooterComp() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0e0e0e] mt-32">
      {/* Honeycomb Background */}
      <div className="absolute inset-0 honeycomb-pattern pointer-events-none"></div>

      {/* Gradient Line */}
      <div className="gradient-line"></div>

      <div className="relative z-10 w-full pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-8 max-w-7xl mx-auto items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="text-4xl font-black text-[#ffd700] tracking-tighter">
                BrandBuzz
              </div>

              <p className="font-bold text-yellow-400 tracking-tight text-xl">
                We work like bees for your brand.
              </p>

              <p className="text-white/60 leading-relaxed max-w-sm">
                Harnessing collective intelligence and precision design to
                create buzzing digital ecosystems that drive unparalleled
                growth.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href={Constant.Company.instagram}
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href={Constant.Company.linkedin}
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${Constant.Company.whatsapp}`}
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

              {/* Email */}
              <a
                href={`mailto:${Constant.Company.email}`}
                className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaEnvelope />
              </a>

              {/* Phone */}
              <a
                href={`tel:${Constant.Company.phone}`}
                className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="space-y-8">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm uppercase tracking-widest">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Pricing", href: "/pricing" },
                { name: "What We Offer", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-yellow-300 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">
              Get In Touch
            </h4>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-sm bg-[#262626] flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <HiOutlineMail />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Email us
                  </span>
                  <a
                    href={`mailto:${Constant.Company.email}`}
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    {Constant.Company.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-sm bg-[#262626] flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <HiOutlinePhone />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Call us
                  </span>
                  <a
                    href={`tel:${Constant.Company.phone}`}
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    {Constant.Company.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-sm bg-[#262626] flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <HiOutlineLocationMarker />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Visit us
                  </span>
                  <span className="text-white">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
            <p className="text-sm uppercase tracking-widest text-white/60">
              © 2026 BrandBuzz. All rights reserved.
            </p>

            <div className="flex gap-12 text-sm uppercase tracking-widest">
              <Link href="/privacy-policy" className="text-white/60 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-white/60 hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
               <Link href="/refund-policy" className="text-white/60 hover:text-yellow-400 transition-colors">
                Refund Policy
              </Link>
               <Link href="/cookie-policy" className="text-white/60 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
               <Link href="/disclaimer" className="text-white/60 hover:text-yellow-400 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
