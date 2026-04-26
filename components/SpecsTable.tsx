'use client';

const specs = [
  { label: 'Compatible With', value: 'iPhone 15 Pro, 15 Pro Max, 16 Pro, 16 Pro Max' },
  { label: 'Material', value: 'High-Grade Liquid Silicone & Microfiber Lining' },
  { label: 'Drop Protection', value: 'Up to 10 Feet (MIL-STD-810G)' },
  { label: 'Weight', value: '28 Grams (Ultra-Lightweight)' },
  { label: 'MagSafe Support', value: 'Yes, with N52 Neodymium Magnets' },
  { label: 'Warranty', value: '1 Year Limited Warranty' },
];

export default function SpecsTable() {
  return (
    <div className="py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-12 text-center">
          Tech Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {specs.map((s, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 group hover:border-black transition-colors">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{s.label}</span>
              <span className="text-sm font-bold text-black text-right">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
