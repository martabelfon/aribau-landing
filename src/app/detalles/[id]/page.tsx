'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { WineProduct } from '@/data/wineProducts';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Detalles = () => {
  const params = useParams();
  const id = params?.id && typeof params.id === 'string' ? parseInt(params.id, 10) : null; // Convierte el id a número si es válido
  const { t } = useTranslation("wine");

  // Si el id no es válido, muestra un mensaje de error
  if (!id) {
    return (
      <div className="flex flex-col items-center p-6 text-red-500">
        <h1 className="text-3xl font-bold">{t("Invalid Product ID")}</h1>
        <p className="mt-4 text-lg">{t("The product ID provided is not valid.")}</p>
      </div>
    );
  }

  // Encuentra el producto correspondiente
  const product = WineProduct().find((p) => p.id === id);

  // Si no se encuentra el producto, muestra un mensaje de error
  if (!product) {
    return (
      <div className="flex flex-col items-center p-6 text-red-500">
        <h1 className="text-3xl font-bold">{t("Product not found")}</h1>
        <p className="mt-4 text-lg">{t("The product you are looking for does not exist.")}</p>
      </div>
    );
  }

  const formatDOName = (doName: string) => {
    return doName
      .toLowerCase()  // Convierte a minúsculas
      .replace(/ /g, '-')  // Reemplaza los espacios por guiones
      .normalize("NFD")  // Elimina los caracteres acentuados (si es necesario)
      .replace(/[\u0300-\u036f]/g, ""); // Elimina los caracteres diacríticos
  };

  const doImagePath = `/iconos/do/${formatDOName(product.DO)}.jpeg`;

  return (
    <div className="h-screen text-black p-8 overflow-hidden relative">
  <Link href="/catalog">
    <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-700">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>  
    </div>
  </Link>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
    {/* Información del vino */}
    <div className="space-y-4 lg:col-span-2"> {/* Aumento el espacio de la columna de la izquierda */}
      <h1 className="text-5xl font-bold whitespace-nowrap">{product.name}</h1>
      <p className="text-lg text-yellow-500">D.O {product.DO}</p>
      <p>{product.description}</p>
      <h2 className="text-2xl font-semibold mt-4">Variedades de Uva</h2>
      <p>{product.grapeVariety}</p>
      <h2 className="text-2xl font-semibold mt-4">Vino</h2>
      <p>{product.description2}</p>
      <h2 className="text-2xl font-semibold mt-4">Maridaje</h2>
      <p>{product.pairing}</p>
    </div>

    {/* Imagen de la botella */}
    <div className="flex justify-center lg:col-span-1">
      <Image src={product.image} alt={product.name} width={300} height={700} className="max-h-[80vh] object-contain" />
    </div>

    {/* Nota de cata y viñedos */}
    <div className="space-y-4 lg:col-span-2">
      {product.logo ? (
        <Image src={product.logo} alt={product.name} width={300} height={700} className="max-h-[80vh] object-contain" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      )}
      <h2 className="text-2xl font-semibold">Temperatura de Servicio</h2>
      <p>{product.servingTemperature}</p>
      <h2 className="text-2xl font-semibold mt-4">Nota de Cata</h2>
      <p>{product.tastingNotes}</p>
      <h2 className="text-2xl font-semibold mt-4">Viñedos</h2>
      <p>{product.vineyards}</p>

      <div className="mt-4 flex justify-end">
        <Image 
          src={doImagePath} 
          alt={`Denominación de Origen: ${product.DO}`} 
          width={50} 
          height={50} 
          className="object-contain" 
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Detalles;
