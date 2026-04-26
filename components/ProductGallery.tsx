'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1586953101527-440673079c65?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
];

export default function ProductGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:sticky lg:top-24">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all shrink-0 ${
              index === idx ? 'border-red-600 scale-95 shadow-lg' : 'border-transparent hover:border-gray-200'
            }`}
            onClick={() => setIndex(idx)}
          >
            <Image src={img} alt="Product" width={80} height={80} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Main Image Carousel */}
      <div className="relative flex-1 rounded-3xl overflow-hidden bg-gray-50 aspect-square border border-gray-100 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image 
              src={images[index]} 
              alt="Main Product" 
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>

        {/* Index Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all ${index === i ? 'w-6 bg-red-600' : 'w-1.5 bg-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
