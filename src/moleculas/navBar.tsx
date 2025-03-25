"use client";

import React, { useEffect, useState } from 'react';
import NavItem from '@/atomos/navItem';
import { useTranslation } from 'react-i18next';

const NavBar: React.FC = () => {
    const { t } = useTranslation('navBar');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Evita errores de hidratación

    return (
        <nav>
            <ul className=''>
                <NavItem label={t('aribauHistory')} href="/aribauHistory" />
                <NavItem label={t('catalog')} href="/catalog" />
                <NavItem label={t('wittyWines')} href="/wittyWines" />
                <NavItem label={t('brands')} href="/brands" />
                <NavItem label={t('news')} href="/news" />
                <NavItem label={t('contact')} href="/contact" />
            </ul>
        </nav>
    );
};

export default NavBar;
