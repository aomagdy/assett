import React from 'react';
import { APP_CONFIG, COMPANY_INFO } from '@/utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/insights" className="hover:text-white transition-colors">Insights</a></li>
            <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="/faqs" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
            <li><a href="/licenses" className="hover:text-white transition-colors">Licenses</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="/advisory" className="hover:text-white transition-colors">Advisory</a></li>
            <li><a href="/partnerships" className="hover:text-white transition-colors">Partnerships</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p>© {currentYear} {APP_CONFIG.APP_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}