'use client';

import { ShieldCheck, Truck, Zap, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { icon: ShieldCheck, title: "100% SECURE", desc: "Razorpay Protected" },
  { icon: Truck, title: "FREE SHIPPING", desc: "On all prepaid orders" },
  { icon: Zap, title: "FAST DELIVERY", desc: "Next day dispatch" },
  { icon: Headphones, title: "24/7 SUPPORT", desc: "Expert assistance" },
];

export default function TrustBadges() {
  return (
    <div className="py-12 px-8 flex flex-wrap justify-around gap-8 mb-20 bg-black rounded-[3rem] text-white shadow-2xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {badges.map((b, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 relative z-10"
        >
          <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-red-600 transition-colors duration-500">
            <b.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-1">{b.title}</h4>
            <p className="text-xs font-bold text-white uppercase tracking-tighter italic">{b.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
