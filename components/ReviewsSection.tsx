'use client';

import { Star } from 'lucide-react';

const reviews = [
  { name: 'Aditya S.', rating: 5, date: '2 days ago', comment: 'The quality is insane for this price. Fits my iPhone 15 Pro perfectly and the silicone feels very premium.' },
  { name: 'Rohan M.', rating: 5, date: '1 week ago', comment: 'Love the MagSafe connection, it is actually stronger than the original Apple cases I have used.' },
  { name: 'Priya K.', rating: 4, date: '2 weeks ago', comment: 'Very clean design. Shipping took 4 days to Bangalore, but worth the wait!' },
];

export default function ReviewsSection() {
  return (
    <div className="py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">Real Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-xl font-black">4.8 / 5.0 <span className="text-gray-400 font-medium text-sm ml-2">from 482+ happy customers</span></p>
            </div>
          </div>
          <button className="px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-colors italic">
            Write A Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-transparent hover:border-gray-200 transition-all hover:shadow-xl group">
              <div className="flex text-yellow-400 mb-4 group-hover:scale-105 transition-transform origin-left">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 italic">"{r.comment}"</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-sm uppercase tracking-tighter">{r.name}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
