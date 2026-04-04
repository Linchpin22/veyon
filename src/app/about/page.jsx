"use client";
import AboutHero from "@/Components/About/AboutHero";
import AboutIntro from "@/Components/About/AboutIntro";
import AboutMissionVision from "@/Components/About/AboutMissionVision";
import Cta from "@/Components/Shared/Cta";
import Stats from "@/Components/Shared/Stats";


export default function Page() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans">
      <main>
        {/* Hero */}
        <AboutHero />

        {/* Intro Section */}
        <AboutIntro />

        {/* Mission Vision */}
     <AboutMissionVision />

        {/* Stats */}
        <Stats/>

        {/* CTA */}
        <Cta/>
      </main>
    </div>
  );
}
