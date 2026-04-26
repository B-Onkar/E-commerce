'use client';

import { Github, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-black tracking-tighter">
            YANG<span className="text-red-600">2K</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium smartphone covers designed for the bold. Style meets protection in every detail.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Github className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wider uppercase text-sm">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">All Covers</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Bestsellers</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Clearance Sale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wider uppercase text-sm">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Track Order</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wider uppercase text-sm">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Email: support@yang2k.com</li>
            <li>Phone: +91 99999 00000</li>
            <li>Hours: Mon - Sat | 10AM - 7PM</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 YANG2K. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span>MADE WITH ❤️ IN INDIA</span>
        </div>
      </div>
    </footer>
  );
}
