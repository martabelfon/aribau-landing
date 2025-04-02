'use client';

import { wineImages } from "@/data/wineriesImage";

  // Asegúrate de que la ruta sea correcta

const Wineries: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...wineImages, ...wineImages].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Winery ${index + 1}`}
            className="w-40 h-40 object-contain rounded-lg mx-2"
          />
        ))}
      </div>
    </section>
  );
};

export default Wineries;
