'use client';

import Image from 'next/image';

const features = [
  {
    title: "Air-Guard Corners",
    desc: "Reinforced corners for extreme drop protection.",
    img: "/photos/romance.webp",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Crystal Clear",
    desc: "Anti-yellowing coating keeps it looking new.",
    img: "/photos/PhoneCaseMoulds10.webp",
  },
  {
    title: "MagSafe Ready",
    desc: "Powerful built-in magnets for seamless charging.",
    img: "/photos/cyber_y2k.webp",
  },
  {
    title: "Soft Touch",
    desc: "Premium liquid silicone for the ultimate grip.",
    img: "/photos/cover_1_1.webp",
    className: "md:col-span-2"
  }
];

export default function FeatureGrid() {
  return (
    <div className="py-20 relative z-10 bg-gray-50/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[3rem]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4 underline decoration-red-600 decoration-4 underline-offset-8">
          Quick Highlights
        </h2>
        <p className="text-gray-500 font-medium">Engineered for protection, designed for style.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className={`group relative rounded-[2.5rem] overflow-hidden min-h-[320px] md:min-h-[400px] border border-gray-100 ${f.className || ''}`}>
            <Image src={f.img} alt={f.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-black text-white italic tracking-tight">{f.title}</h3>
              <p className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
