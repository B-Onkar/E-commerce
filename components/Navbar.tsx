'use client';

import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, Package } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { quantity, orders } = useCartStore();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 lg:hidden cursor-pointer" />
          <Link href="/" className="text-2xl font-black tracking-tighter text-black flex items-center gap-1">
            YANG<span className="text-red-600">2K</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black tracking-widest text-gray-500">
          <Link href="/" className="hover:text-black transition-colors uppercase">Categories</Link>
          <Link href="/" className="hover:text-black transition-colors uppercase">New Arrivals</Link>
          <Link href="/" className="hover:text-black transition-colors uppercase">Corporate</Link>
          <Link href="/" className="hover:text-black transition-colors uppercase">Gifting</Link>
        </div>

        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer hidden sm:block hover:scale-110 transition-transform" />
          
          {/* Profile / Orders Button */}
          <Link href="/orders" className="relative group">
            <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-700 group-hover:text-black" />
            </div>
            {orders.length > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border border-white" />
            )}
            
            {/* Dropdown / Tooltip */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
              <Link href="/orders" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Package className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-bold">My Orders</span>
              </Link>
              <div className="h-px bg-gray-100 my-1" />
              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-bold text-red-600">Logout</span>
              </button>
            </div>
          </Link>

          <div className="relative cursor-pointer group">
            <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingBag className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
            </div>
            {quantity > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 bg-red-600 text-[10px] font-black text-white w-4 h-4 flex items-center justify-center rounded-full border border-white shadow-sm"
              >
                {quantity}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
