import React from 'react';
import { APP_CONFIG } from '@/utils/constants';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/brix-icon.svg" 
            alt={APP_CONFIG.APP_NAME}
            className="h-12 w-12 mb-4"
            width="48"
            height="48"
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            {APP_CONFIG.APP_NAME}
          </h1>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}