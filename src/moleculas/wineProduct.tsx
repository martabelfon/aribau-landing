'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WineProduct, WineTypes, WineDO } from '@/data/wineProducts';
import { Wine } from '@/atomos/wine';
import Link from 'next/link';

const WineProductList: React.FC = () => {
  const products = WineProduct();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const wineTypes = WineTypes(); // Tipos de vino disponibles globalmente
  const allWineDOs = WineDO();

  const [typeFilter, setTypeFilter] = useState<string>('');
  const [doFilter, setDoFilter] = useState<string>('');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // O puedes mostrar un loader mientras se monta
  }


  const filteredProducts = products.filter((product) =>
    (typeFilter ? product.type === typeFilter : true) &&
    (doFilter ? product.DO === doFilter : true)
  );


  const availableWineDOs = typeFilter
    ? [...new Set(products.filter((product) => product.type === typeFilter).map((product) => product.DO))]
    : allWineDOs;

  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    rows.push(filteredProducts.slice(i, i + 4));
  }

  return (
    <div className='mt-30'>
      <div className="flex px-4 rounded-full relative">
        {wineTypes.map((type) => (
          <div key={type} className="relative">
            <button
              onClick={() => setTypeFilter(typeFilter === type ? '' : type)}
              className={`relative z-10 px-4 py-2 text-xs transition duration-200 ${
                typeFilter === type ? 'text-white bg-gray-700 rounded-full' : 'text-gray-800'
              }`}
            >
              {type}
            </button>
            {typeFilter === type && (
              <motion.div
                layoutId="filter-indicator-type"
                className="absolute left-0 bottom-0 w-full h-full bg-gray-600 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex mb-3 px-4 py-2 rounded-full relative">
        {allWineDOs.map((DO) => {
          const isAvailable = availableWineDOs.includes(DO);

          return (
            <div key={DO} className="relative">
              <button
                onClick={() => isAvailable && setDoFilter(doFilter === DO ? '' : DO)}
                className={`relative z-10 px-4 py-2 text-xs transition duration-200 ${
                  doFilter === DO ? 'text-white bg-gray-700 rounded-full' : 'text-gray-800'
                } ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isAvailable}
              >
                {DO}
              </button>
              {doFilter === DO && (
                <motion.div
                  layoutId="filter-indicator-do"
                  className="absolute left-0 bottom-0 w-full h-full bg-gray-600 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Lista de productos filtrados con efecto acordeón en filas de 4 */}
      <div className="flex flex-col gap-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full h-[400px] overflow-hidden">
            {row.map((product, index) => (
              <motion.div
              key={product.id}
              className="relative flex-1 cursor-pointer overflow-hidden rounded-[30px] m-4 shadow-[5px_5px_20px_rgb(0,0,0,0.1),_-5px_-5px_20px_rgb(255,255,255,0.2)]"
              onMouseEnter={() => setActiveIndex(rowIndex * 4 + index)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{
                flex: activeIndex === rowIndex * 4 + index ? 4 : 1,
                // Mover la imagen a la derecha cuando se expanda
                justifyContent: activeIndex === rowIndex * 4 + index ? 'flex-end' : 'flex-start',
                // También puedes cambiar el orden si lo prefieres, para que la imagen se desplace hacia la derecha
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="relative flex-1 flex items-center justify-end">
                <Wine image={product.image} />
              </div>
              <div className="absolute inset-0 bg-opacity-30 flex flex-col text-black text-lg justify-center opacity-0 hover:opacity-100 transition-opacity ml-5">
                <p className="text-2xl font-semibold">{product.name}</p>
                <p className="text-base text-justify w-[60%]">{product.description || 'Una excelente opción para disfrutar.'}</p>
                <button className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-full text-sm hover:bg-gray-700 transition-colors w-[60%]">
                <Link href={`/detalles/${product.id}`} passHref>
                Más Información
                </Link>
                </button>
              </div>
            </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineProductList;
