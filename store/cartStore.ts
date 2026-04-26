import { create } from 'zustand';
import { calculatePrice, PricingInput, PricingResult } from '@/lib/pricingEngine';
import { persist } from 'zustand/middleware';

type PaymentMethod = 'prepaid' | 'cod';

interface Order {
  id: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  date: string;
  status: string;
}

interface CartState {
  quantity: number;
  paymentMethod: PaymentMethod;
  pricing: PricingResult | null;
  orders: Order[];
  setQuantity: (qty: number) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  addOrder: (order: Order) => void;
  reset: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      quantity: 1,
      paymentMethod: 'prepaid',
      pricing: calculatePrice({ basePrice: 399, quantity: 1, paymentMethod: 'prepaid' }),
      orders: [],
      setQuantity: (qty) => {
        const basePrice = 399;
        const input: PricingInput = {
          basePrice,
          quantity: qty,
          paymentMethod: get().paymentMethod,
        };
        set({ quantity: qty, pricing: calculatePrice(input) });
      },
      setPaymentMethod: (method) => {
        const basePrice = 399;
        const input: PricingInput = {
          basePrice,
          quantity: get().quantity,
          paymentMethod: method,
        };
        set({ paymentMethod: method, pricing: calculatePrice(input) });
      },
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
      reset: () => set({ quantity: 1, paymentMethod: 'prepaid', pricing: calculatePrice({ basePrice: 399, quantity: 1, paymentMethod: 'prepaid' }) }),
    }),
    {
      name: 'yang2k-storage',
    }
  )
);
