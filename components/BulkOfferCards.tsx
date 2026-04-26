'use client';

import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';

const offers = [
  { id: 1, label: 'STANDARD', qty: 1, discount: 0, title: 'Buy 1', sub: 'Single Unit', color: 'bg-gray-50 border-gray-200' },
  { id: 2, label: 'MOST POPULAR', qty: 2, discount: 6, title: 'Buy 2+', sub: '6% OFF', color: 'bg-emerald-50 border-emerald-200' },
  { id: 5, label: 'BEST VALUE', qty: 5, discount: 8, title: 'Buy 5+', sub: '8% OFF', color: 'bg-indigo-50 border-indigo-200' },
  { id: 10, label: 'MOST SAVINGS', qty: 10, discount: 10, title: 'Buy 10+', sub: '10% OFF', color: 'bg-purple-50 border-purple-200' },
];

export default function BulkOfferCards() {
  const { quantity, setQuantity, pricing } = useCartStore();

  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-[10px] font-black tracking-widest uppercase text-gray-400">Active Offers</h3>
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3">
        {offers.map((offer) => {
          const isActive = quantity === offer.qty;
          const basePrice = 399;
          const discountedPrice = Math.round(basePrice * (1 - offer.discount / 100));

          return (
            <motion.button
              key={offer.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setQuantity(offer.qty)}
              className={`relative p-3 border-2 rounded-2xl text-center transition-all duration-300 min-h-[120px] flex flex-col justify-between ${
                isActive 
                ? `border-black ring-1 ring-black shadow-xl z-10 ${offer.color} scale-[1.02]` 
                : 'border-gray-100 bg-white hover:border-gray-300'
              }`}
            >
              <div>
                <div className={`text-[7px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded-full inline-block mb-1.5 ${
                  isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {offer.label}
                </div>
                <p className="font-black text-[11px] sm:text-xs text-gray-900 mb-0.5">{offer.title}</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">{offer.sub}</p>
              </div>
              
              <div className="pt-2 border-t border-gray-100 mt-auto">
                <p className="text-[11px] sm:text-xs font-black text-black">₹{discountedPrice}/item</p>
              </div>

              {isActive && (
                <motion.div 
                  layoutId="active-offer-dot"
                  className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-black rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                >
                  <div className="w-1 h-1 bg-white rounded-full" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
