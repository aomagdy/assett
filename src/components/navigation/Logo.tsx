import React from 'react';
import { APP_CONFIG } from '@/utils/constants';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img 
        src="/brix-logo.svg" 
        alt={APP_CONFIG.APP_NAME} 
        className="h-8"
        width="160"
        height="40"
      />
    </a>
  );
}