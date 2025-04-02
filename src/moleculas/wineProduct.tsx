import { Wine } from '@/atomos/wine';
import { wineProducts } from '@/data/wineProducts';
import React from 'react';

const WineProductList: React.FC = () => {
  return (
    <div className="mt-30 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
      {wineProducts.map((product) => (
        <div key={product.id} className="text-center">
          <Wine name={product.name} image={product.image} />
        </div>
      ))}
    </div>
  );
};

export default WineProductList;
