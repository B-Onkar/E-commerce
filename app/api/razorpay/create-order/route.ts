import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request: Request) {
  const { amount, customerDetails, items } = await request.json(); // amount in paise
  
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  try {
    // 1. Create order in Razorpay
    const razorpayOrder = await instance.orders.create({
      amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: true,
    });

    // 2. Save order in MongoDB
    await connectDB();
    const newOrder = await Order.create({
      razorpay_order_id: razorpayOrder.id,
      amount: amount / 100, // store in rupees
      currency: 'INR',
      status: 'created',
      customer_name: customerDetails.name,
      email: customerDetails.email,
      phone: customerDetails.phone,
      items: items,
      payment_method: 'prepaid', // Default for Razorpay
    });

    return NextResponse.json({
      id: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    });
  } catch (err) {
    console.error('Razorpay order error', err);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
