import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request: Request) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = await request.json();

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (generatedSignature === razorpay_signature) {
    // 1. Update order status in MongoDB
    await connectDB();
    await Order.findOneAndUpdate(
      { razorpay_order_id: razorpay_order_id },
      { 
        status: 'paid', 
        razorpay_payment_id: razorpay_payment_id,
        is_prepaid: true 
      }
    );

    return NextResponse.json({ success: true });
  } else {
    // Optionally mark as failed
    await connectDB();
    await Order.findOneAndUpdate(
      { razorpay_order_id: razorpay_order_id },
      { status: 'failed' }
    );
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
