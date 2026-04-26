'use client';

import { useCartStore } from '@/store/cartStore';

export default function PriceBreakdown() {
  const { pricing, quantity } = useCartStore();

  if (!pricing) return null;

  return (
    <div className="bg-gray-50 rounded-2xl p-6 space-y-4 mb-8">
      <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
        <span>Cart Subtotal ({quantity} items)</span>
        <span>₹{(399 * quantity).toFixed(2)}</span>
      </div>

      {pricing.bulkDiscountAmt > 0 && (
        <div className="flex justify-between items-center text-sm font-bold text-green-600 italic">
          <span>Bulk Savings ({pricing.bulkDiscountPct}%)</span>
          <span>-₹{pricing.bulkDiscountAmt.toFixed(2)}</span>
        </div>
      )}

      {pricing.prepaidDiscountAmt > 0 && (
        <div className="flex justify-between items-center text-sm font-bold text-indigo-600 italic">
          <span>Prepaid Extra Off (5%)</span>
          <span>-₹{pricing.prepaidDiscountAmt.toFixed(2)}</span>
        </div>
      )}

      <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Payable</p>
          <p className="text-3xl font-black text-black">₹{pricing.finalTotal.toFixed(2)}</p>
        </div>
        {pricing.savings > 0 && (
          <div className="bg-green-100 px-3 py-1.5 rounded-lg">
            <p className="text-[10px] font-black text-green-700 uppercase tracking-widest">Total Savings</p>
            <p className="text-xs font-black text-green-800">₹{pricing.savings.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
