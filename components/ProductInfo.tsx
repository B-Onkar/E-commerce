'use client';

import { Star, ShieldCheck, Truck, RotateCcw, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductInfo() {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-sm font-semibold text-gray-500">(482 Reviews)</span>
        </div>
        
        {/* GRAB100 Pill */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
        >
          <Zap className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-[10px] font-black uppercase tracking-widest">Get at ₹1199 by using GRAB100</span>
        </motion.div>
      </div>
      
      <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-tight">
        YANG2K Signature <br /> <span className="text-red-600 italic">Liquid Silicone</span> Case
      </h1>
      
      <p className="text-gray-500 text-sm leading-relaxed max-w-md">
        Ultra-slim design with military-grade drop protection. Soft-touch finish and raised edges for maximum lens protection. Compatible with all wireless chargers.
      </p>

      <div className="flex items-center gap-4 py-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-black">₹399</span>
            <span className="text-xl text-gray-400 line-through">₹999</span>
            <span className="text-red-600 text-sm font-black tracking-tighter">60% OFF</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">MRP (Inclusive of all taxes)</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 py-2 border-y border-gray-100">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <Truck className="w-4 h-4 text-gray-900" /> Free Delivery
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <ShieldCheck className="w-4 h-4 text-gray-900" /> 1 Year Warranty
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <RotateCcw className="w-4 h-4 text-gray-900" /> 7 Day Easy Return
        </div>
      </div>
    </div>
  );
}
