'use client';

import Card from '@/atomos/card';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ModulesPage: React.FC = () => {
    const { t } = useTranslation("modules");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div />; // Evita la hidratación hasta que el componente esté montado

    return (
        <div className="flex flex-row justify-center items-center gap-2 p-5">
            <Card 
                image="/iconos/aribau/aribau-4.png"
                title={t("history")} 
                description={t("history-description")}
                className="text-black"
            />
            <Card 
                image="/iconos/bodegas.jpeg"
                title={t("wineries")} 
                description={t("wineries-description")}
                className="text-white"
            />
            <Card 
                image="/iconos/actualidad.png"
                title={t("present")} 
                description={t("present-description")} 
                className="text-black"
            />
        </div>
    );
};

export default ModulesPage;
