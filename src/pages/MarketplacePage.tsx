import React from 'react';
import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { MarketplaceDemo } from '../components/marketplace/MarketplaceDemo';

export function MarketplacePage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investment
              <span className="text-primary"> Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover and invest in premium assets through secure, regulated fractional ownership. 
              Browse our selection of carefully curated investment opportunities.
            </p>
          </div>
        </div>
      </BackgroundPattern>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <MarketplaceDemo />
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketplacePage;