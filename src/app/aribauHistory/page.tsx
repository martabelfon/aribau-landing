'use client';

import Footer from "@/moleculas/footer";
import NavBar from "@/moleculas/navBar";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function AribauHistoryPage() {
    const { t } = useTranslation("history");
    const [translatedTexts, setTranslatedTexts] = useState<{ img: string; title: string; description: string }[]>([]);

    useEffect(() => {
        setTranslatedTexts([
            { img: "/iconos/aribau/aribau-1.png", title: t("title-1"), description: t("description-1") },
            { img: "/iconos/aribau/aribau-2.png", title: t("title-2"), description: t("description-2") },
            { img: "/iconos/aribau/aribau-3.png", title: t("title-3"), description: t("description-3") },
            { img: "/iconos/aribau/aribau-4.png", title: t("title-4"), description: t("description-4") },

        ]);
    }, [t]);

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <NavBar isScrolled={isScrolled} />
            <div className="mt-1 n6 container mx-auto px-4 py-16">
                {translatedTexts.length > 0 ? (
                    translatedTexts.map(({ img, title, description }, index) => (
                        <section key={index} className="flex flex-col md:flex-row items-center gap-12 mb-16">
                            {/* Imagen */}
                            <div className="flex-shrink-0 w-full md:w-1/3">
                                <Image
                                    src={img}
                                    alt={`Logo evolución ${index + 1}`}
                                    width={350}
                                    height={350}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            {/* Texto */}
                            <div className="md:w-2/3 text-center md:text-left">
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
                                <p className="text-lg text-gray-600">{description}</p>
                            </div>
                        </section>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Cargando...</p>
                )}
            </div>
            <Footer />
        </>
    );
}
