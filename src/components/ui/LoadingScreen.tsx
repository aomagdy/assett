import React from 'react';
import { APP_CONFIG } from '@/utils/constants';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E7D3215_1px,transparent_1px),linear-gradient(to_bottom,#2E7D3215_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-medium/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="relative mb-8 transform scale-150">
          <img 
            src="/brix-icon.svg" 
            alt={APP_CONFIG.APP_NAME}
            className="h-16 w-16 animate-pulse"
            width="64"
            height="64"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Welcome to {APP_CONFIG.APP_NAME}
        </h2>
        
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}