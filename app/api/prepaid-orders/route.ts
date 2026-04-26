import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter') || 'prepaid';

  try {
    await connectDB();
    
    let query = {};
    if (filter === 'prepaid') {
      query = { status: 'paid', is_prepaid: true };
    } else if (filter === 'failed') {
      query = { status: 'failed' };
    } else if (filter === 'all') {
      query = {};
    }

    const orders = await Order.find(query).sort({ created_at: -1 });
    return NextResponse.json(orders);
  } catch (err) {
    console.error('Fetch orders error', err);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}
