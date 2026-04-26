'use client';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee items-center justify-center gap-8 text-xs font-medium tracking-widest uppercase">
        <span>Extra 5% off on prepaid orders</span>
        <span className="opacity-30">•</span>
        <span>Free shipping on all orders above ₹499</span>
        <span className="opacity-30">•</span>
        <span>Premium smartphone covers for Yang2K</span>
        <span className="opacity-30">•</span>
        <span>Extra 5% off on prepaid orders</span>
        <span className="opacity-30">•</span>
        <span>Free shipping on all orders above ₹499</span>
      </div>
    </div>
  );
}
