import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  id: string;
  razorpay_order_id: string;
  razorpay_payment_id?: string;
  amount: number;
  currency: string;
  status: 'created' | 'paid' | 'failed';
  payment_method: string;
  is_prepaid: boolean;
  customer_name: string;
  email: string;
  phone: string;
  items: any[];
  created_at: Date;
}

const OrderSchema: Schema = new Schema({
  razorpay_order_id: { type: String, required: true, unique: true },
  razorpay_payment_id: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'INR' },
  status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
  payment_method: { type: String, default: 'prepaid' },
  is_prepaid: { type: Boolean, default: false },
  customer_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  items: { type: Array, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
