import Link from "next/link";

export default function PortfolioComp() {
  const projects = [
    {
      title: "School Website",
      category: "Web Development",
      image: "/portfolio/p1.jpg",
    },
    {
      title: "Brand Logo Design",
      category: "Branding",
      image: "/portfolio/p2.jpg",
    },
    {
      title: "Instagram Campaign",
      category: "Social Media",
      image: "/portfolio/p3.jpg",
    },
    {
      title: "Business Website",
      category: "Web Development",
      image: "/portfolio/p4.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/portfolio/p5.jpg",
    },
    {
      title: "Reel Editing",
      category: "Reels",
      image: "/portfolio/p6.jpg",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-24 px-6 md:px-12 relative">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-yellow-300 font-bold tracking-[0.3em] text-sm uppercase block">
            OUR WORK
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">
            Our <span className="text-yellow-300 italic">Portfolio</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Explore our latest digital creations across web development,
            social media, and branding.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#131313] rounded-xl overflow-hidden
              hover:shadow-[0_0_40px_rgba(255,242,168,0.15)]
              hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link href="/portfolio" className="bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg">
                    View Project
                  </Link>
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <span className="text-yellow-300 text-xs font-bold uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* See All Work Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/portfolio"
            className="px-10 py-4 border-2 border-yellow-300 text-yellow-300
            hover:bg-yellow-300 hover:text-black transition-all duration-300
            rounded-full font-semibold tracking-wide"
          >
            See All Work
          </Link>
        </div>

      </div>
    </section>
  );
}