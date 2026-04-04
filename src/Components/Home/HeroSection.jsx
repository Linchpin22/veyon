"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["Buzz", "Popular", "Scale"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Slow typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500); // pause before delete
        }
      }, 180);
    } else {
      // Slow deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Futuristic digital marketing"
          fill
          priority
          className="object-cover scale-110 opacity-40 mix-blend-lighten"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center pt-28 pb-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
          <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em]">
            The Digital Hive is Open
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-black leading-none tracking-tighter text-white mb-8 text-[clamp(3rem,8vw,8rem)]">
          We Make Brands <br />
          
          <span className="text-yellow-400">
            {displayText}
            <span className="ml-1 animate-pulse">_</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
          Social Media, Reels, and Websites that help your business grow like a busy bee.
          Kinetic strategies for the modern digital ecosystem.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-4 bg-yellow-400 text-black font-black rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20">
            Get Started
          </button>

          <button className="px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
            View Portfolio
          </button>
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-16 left-[8%] hidden xl:block">
          <div className="bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center gap-4 -rotate-3 shadow-2xl">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-700"></div>
              <div className="w-8 h-8 rounded-full border-2 border-black bg-yellow-400/40"></div>
              <div className="w-8 h-8 rounded-full border-2 border-black bg-yellow-400 flex items-center justify-center text-[10px] font-black text-black">
                BB
              </div>
            </div>
            <div className="text-xs font-bold text-white uppercase tracking-tighter">
              Active Hive
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}