import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex items-center justify-center px-4">
            <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl max-w-md w-full">
                
                {/* Error Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-red-500/20 p-4 rounded-full">
                        <AlertTriangle size={60} className="text-red-400" />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-7xl font-bold text-white mb-2">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-2xl font-semibold text-gray-200 mb-3">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-400 mb-8">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition duration-300"
                >
                    <Home size={18} />
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;