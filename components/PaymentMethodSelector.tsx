'use client';

import { useCartStore } from '@/store/cartStore';
import { CreditCard, Truck } from 'lucide-react';

export default function PaymentMethodSelector() {
  const { paymentMethod, setPaymentMethod } = useCartStore();

  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-sm font-black tracking-widest uppercase text-gray-400">Payment Mode</h3>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setPaymentMethod('prepaid')}
          className={`flex items-center justify-between p-4 border-2 rounded-2xl transition-all ${
            paymentMethod === 'prepaid' ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${paymentMethod === 'prepaid' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm text-black">Online Payment (UPI / Card)</p>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Extra 5% Discount Applied</p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'prepaid' ? 'border-black' : 'border-gray-200'}`}>
            {paymentMethod === 'prepaid' && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
          </div>
        </button>

        <button
          onClick={() => setPaymentMethod('cod')}
          className={`flex items-center justify-between p-4 border-2 rounded-2xl transition-all ${
            paymentMethod === 'cod' ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${paymentMethod === 'cod' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm text-black">Cash on Delivery</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Standard Delivery</p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-black' : 'border-gray-200'}`}>
            {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
          </div>
        </button>
      </div>
    </div>
  );
}
