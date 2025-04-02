"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from '@/atomos/navItem';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const NavBar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    const { t } = useTranslation('navBar');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <nav className={`h-[90px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className='flex flex-row justify-center items-center'>
                <ul className='flex  items-center'>
                    <NavItem label={t('aribauHistory')} href="/aribauHistory" />
                    <NavItem label={t('catalog')} href="/catalog" />
                    <NavItem label={t('wittyWines')} href="/wittyWines" />
                    <li className='mr-4'>
                        <Link href="/">
                            <Image 
                                src="/iconos/aribau-logo.png" 
                                alt="" 
                                width={250} 
                                height={250} 
                                priority 
                            />
                        </Link>
                    </li>
                    <NavItem label={t('brands')} href="/brands" />
                    <NavItem label={t('news')} href="/news" />
                    <NavItem label={t('contact')} href="/contact" />
                </ul>
            
                <div className='absolute right-4'>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
