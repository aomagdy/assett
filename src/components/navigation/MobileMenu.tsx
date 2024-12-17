import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}