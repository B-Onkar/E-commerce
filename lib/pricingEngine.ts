export interface PricingInput {
  basePrice: number;
  quantity: number;
  paymentMethod: 'prepaid' | 'cod';
}

export interface PricingResult {
  unitPrice: number;
  totalBeforeDiscount: number;
  bulkDiscountPct: number;
  bulkDiscountAmt: number;
  prepaidDiscountPct: number;
  prepaidDiscountAmt: number;
  finalTotal: number;
  savings: number;
}

export function calculatePrice({
  basePrice,
  quantity,
  paymentMethod,
}: PricingInput): PricingResult {
  const bulkDiscountPct =
    quantity >= 10 ? 10 : quantity >= 5 ? 8 : quantity >= 2 ? 6 : 0;

  const unitPrice = +(basePrice * (1 - bulkDiscountPct / 100)).toFixed(2);
  const totalBeforeDiscount = +(unitPrice * quantity).toFixed(2);
  const bulkDiscountAmt = +(basePrice * quantity - totalBeforeDiscount).toFixed(2);

  const prepaidDiscountPct = paymentMethod === 'prepaid' ? 5 : 0;
  const prepaidDiscountAmt = +(
    totalBeforeDiscount *
    (prepaidDiscountPct / 100)
  ).toFixed(2);

  const finalTotal = +(totalBeforeDiscount - prepaidDiscountAmt).toFixed(2);
  const savings = +(bulkDiscountAmt + prepaidDiscountAmt).toFixed(2);

  return {
    unitPrice,
    totalBeforeDiscount,
    bulkDiscountPct,
    bulkDiscountAmt,
    prepaidDiscountPct,
    prepaidDiscountAmt,
    finalTotal,
    savings,
  };
}
