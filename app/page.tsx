'use client';

import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import BulkOfferCards from '@/components/BulkOfferCards';
import PriceBreakdown from '@/components/PriceBreakdown';
import CheckoutButton from '@/components/CheckoutButton';
import FeatureGrid from '@/components/FeatureGrid';
import SpecsTable from '@/components/SpecsTable';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-600">
      <AnnouncementBar />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <span className="hover:text-black cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">iPhone Covers</span>
          <span>/</span>
          <span className="text-black">Signature Liquid Silicone</span>
        </nav>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start relative">
          {/* Left: Sticky Gallery */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-24 h-fit">
            <ProductGallery />
          </div>
          
          {/* Right: Scrolling Info */}
          <div className="w-full lg:w-[45%] space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductInfo />
              
              {/* Bulk Offers Section - Grouped with Buy Now */}
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm">
                <BulkOfferCards />
                <PriceBreakdown />
                <CheckoutButton />
              </div>

              {/* Delivery Info */}
              <div className="mt-8 p-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/50">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Check Delivery Availability</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter Pincode" 
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:border-black transition-colors shadow-sm"
                  />
                  <button className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-all shadow-lg active:scale-95 italic">Check</button>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Express Delivery Available in most cities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Secondary Sections */}
        <div className="space-y-20 mt-20">
          <FeatureGrid />
          <SpecsTable />
          <TrustBadges />
          <ReviewsSection />
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
