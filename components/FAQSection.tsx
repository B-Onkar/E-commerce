'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Is the case compatible with wireless charging?", a: "Absolutely! All our cases are designed to be fully compatible with wireless chargers and MagSafe accessories." },
  { q: "Does the case protect the screen and camera?", a: "Yes, our cases feature 1.5mm raised bezels for the screen and 2.0mm raised edges for the camera lenses." },
  { q: "How long does shipping take?", a: "Orders are processed within 24 hours. Delivery usually takes 3-5 business days across India." },
  { q: "What is your return policy?", a: "We offer a 7-day hassle-free return policy. If you aren't satisfied, we'll pick it up and refund your amount." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-20 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-12 text-center">Frequently Asked</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-2xl border-2 transition-all overflow-hidden ${openIndex === i ? 'border-black bg-gray-50' : 'border-gray-100'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-black text-sm uppercase tracking-tight">{f.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
