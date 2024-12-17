import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { ROUTES } from '@/utils/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : ''
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href={ROUTES.MARKETPLACE}>Marketplace</NavLink>
            <NavLink href={ROUTES.HOW_IT_WORKS}>How it Works</NavLink>
            <NavLink href={ROUTES.ABOUT}>About</NavLink>
            <NavLink href={ROUTES.FAQS}>FAQs</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => navigate(ROUTES.LOGIN)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate(ROUTES.REGISTER)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              Get Started
            </button>
          </div>

          <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-4 bg-white border-t border-gray-100">
            <div className="space-y-3">
              <NavLink href={ROUTES.MARKETPLACE}>Marketplace</NavLink>
              <NavLink href={ROUTES.HOW_IT_WORKS}>How it Works</NavLink>
              <NavLink href={ROUTES.ABOUT}>About</NavLink>
              <NavLink href={ROUTES.FAQS}>FAQs</NavLink>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate(ROUTES.REGISTER)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}