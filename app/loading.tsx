'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-xs font-black uppercase tracking-[0.2em] italic text-black animate-pulse">
        YANG<span className="text-red-600">2K</span> Loading...
      </p>
    </div>
  );
}
