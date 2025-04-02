'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const WittyWines: React.FC = () => {
    const { t } = useTranslation("wittyWines");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <section className='h-[90vh] mt-2 flex flex-col sm:flex-row items-center justify-center text-left px-5'>
            {/* Contenedor de texto */}
            <div className="w-[20px] sm:w-[50%] mr-5 flex flex-col items-center">
                <h1 className="mb-15 text-[30px] text-3xl font-semibold tracking-tight text-balance sm:text-4xl text-center">
                    {t("welcome")}
                </h1>
                <p className="w-[650px] text-gray-500 text-justify">
                    {t("description-1")}
                </p>
                <button className="mt-10 px-6 py-2 bg-stone-400 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-stone-700">{t("button-discover")}</button>
            </div>


           
            <div className='flex flex-row items-center justify-center'>
                <div className='mt-20'>
                    <Image
                        src='/iconos/logo-ww.svg'
                        alt='Imagen 1'
                        width={900}  
                        height={400} 
                        className='object-cover rounded-l'
                    />
                </div>

                <div className=' mr-2 mt-5'>
                    <Image
                        src='/iconos/saltimbanqui-botella.png'
                        alt='Imagen 2'
                        width={300}
                        height={600}
                        className='object-cover rounded-lg mb-5'
                    />
                </div>

                <div className=''>
                    <Image
                        src='/iconos/cargol-logo.png'
                        alt='Imagen 4'
                        width={150}  
                        height={800}
                        className='object-cover rounded-lg mb-5 ml-15'
                    />
                    <Image
                        src='/iconos/cargol.png'
                        alt='Imagen 4'
                        width={700}  
                        height={1000}
                        className='object-cover rounded-lg'
                    />
                    <Image
                        src='/iconos/descarada-logo.png'
                        alt='Imagen 5'
                        width={150}  
                        height={800}
                        className='object-cover rounded-lg ml-15'
                    />
                     <Image
                        src='/iconos/descarada.png'
                        alt='Imagen 5'
                        width={700}  
                        height={1000}
                        className='object-cover rounded-lg'
                    />
                    </div>
                   
            </div>
        </section>
    );
};

export default WittyWines;
