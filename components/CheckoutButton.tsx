'use client';

import { useCartStore } from '@/store/cartStore';
import { useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutButton() {
  const { pricing, quantity, addOrder, reset } = useCartStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayment = async () => {
    if (!pricing) return;
    
    setLoading(true);

    try {
      // 1. Create Order on Server
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: Math.round(pricing.finalTotal * 100),
          customerDetails: {
            name: 'YANG2K Fan',
            email: 'fan@yang2k.com',
            phone: '9999999999',
          },
          items: [{
            name: 'YANG2K Signature Case',
            quantity: quantity,
            price: pricing.unitPrice
          }]
        }),
      });
      
      const orderData = await res.json();

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'YANG2K',
        description: `Signature Case Bundle x ${quantity}`,
        image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=200',
        order_id: orderData.id,
        handler: async (response: any) => {
          // 3. Verify Signature
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });
          const result = await verifyRes.json();
          if (result.success) {
            // Save Order to Store
            addOrder({
              id: orderData.id,
              items: [{
                name: 'YANG2K Signature Case',
                quantity: quantity,
                price: pricing.unitPrice
              }],
              total: pricing.finalTotal,
              date: new Date().toISOString(),
              status: 'Processing'
            });
            
            // Redirect to Orders Page
            router.push('/orders');
            reset();
          } else {
            alert('Payment Verification Failed!');
          }
        },
        prefill: {
          name: 'YANG2K Fan',
          email: 'fan@yang2k.com',
          contact: '9999999999',
        },
        theme: {
          color: '#000000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
      });
      rzp.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        disabled={loading}
        onClick={handlePayment}
        className="group relative w-full h-16 bg-black text-white rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:scale-100"
      >
        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <div className="relative flex items-center justify-center gap-3 font-black text-lg tracking-widest uppercase italic">
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <span>Confirm Order</span>
              <ArrowRight className="w-6 h-6" />
            </>
          )}
        </div>
      </button>

      <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span>Secure Checkout Powered by Razorpay</span>
      </div>
    </div>
  );
}
