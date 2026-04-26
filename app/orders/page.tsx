'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Package, ChevronRight, CheckCircle2, AlertCircle, Filter } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('prepaid');
  const [loading, setLoading] = useState(true);

  const fetchOrders = async (currentFilter: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/prepaid-orders?filter=${currentFilter}`);
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">My Orders</h1>
            <p className="text-gray-500 font-medium italic">Track and manage your premium gear.</p>
          </div>

          {/* Filter Dropdown */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
            <Filter className="w-4 h-4 text-gray-400" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-xs font-black uppercase tracking-widest bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="all">All Orders</option>
              <option value="prepaid">Prepaid Only</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-black mb-4 uppercase italic">No {filter} orders</h2>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-colors italic"
            >
              Start Shopping <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {orders.map((order: any, i: number) => (
                <motion.div 
                  key={order._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
                >
                  {order.is_prepaid && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-bl-xl shadow-lg">
                      Prepaid Order
                    </div>
                  )}

                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
                      <p className="font-bold text-sm text-black">#{order.razorpay_order_id.slice(-8).toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                      <p className="font-bold text-sm text-black">{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    
                    <div className={`px-4 py-1.5 rounded-full border flex items-center gap-2 ${
                      order.status === 'paid' ? 'bg-green-50 border-green-100 text-green-700' : 
                      order.status === 'failed' ? 'bg-red-50 border-red-100 text-red-700' :
                      'bg-gray-50 border-gray-100 text-gray-700'
                    }`}>
                      {order.status === 'paid' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      <span className="text-[10px] font-black uppercase tracking-widest">{order.status}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {order.items.map((item: any, j: number) => (
                      <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <div>
                          <p className="font-black text-sm uppercase italic">{item.name}</p>
                          <p className="text-xs font-bold text-gray-400 italic">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-black text-sm italic">₹{item.price}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount Paid via {order.payment_method?.toUpperCase() || 'UPI/CARD'}</p>
                      <p className="text-2xl font-black text-black italic">₹{order.amount}</p>
                    </div>
                    <button className="px-6 py-2 border-2 border-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all italic">
                      View Receipt
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
