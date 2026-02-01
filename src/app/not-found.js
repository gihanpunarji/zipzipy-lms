"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center">
                <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-in fade-in zoom-in duration-500">
                    404
                </h1>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                    Page not found
                </h2>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                    Oops! The page you are looking for seems to have vanished into thin air.
                    It might have been moved, deleted, or possibly never existed.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
