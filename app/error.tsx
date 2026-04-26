'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">
        Something went <span className="text-red-600">wrong!</span>
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        We encountered an unexpected error. Please try again or head back to the home page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-colors italic"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 border-2 border-black text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-black hover:text-white transition-all italic"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
