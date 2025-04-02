'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import i18n from 'i18next';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const { t } = useTranslation("footer");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient || !i18n.isInitialized) return null;

    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Image 
                            src="/iconos/aribau-logo.png" 
                            alt="Logo"
                            width={200} 
                            height={200} 
                            priority
                        />
                    </div>
                    <div className="flex flex-col md:flex-row space-y- md:space-y-0">
                        <nav className="flex flex-col text-center md:text-left">
                            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 mr-4 mb-4">{t("legalNotice")}</a>
                            <a href="/cookie" className="text-sm text-gray-600 hover:text-gray-900 mb-4">{t("cookie")}</a>
                            <a 
                                href="https://www.instagram.com/aribau1964/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </nav>
                    </div>
                </div>

                <div className="mt-6 text-center md:text-left">
                    <address className="text-sm text-gray-600 not-italic">
                        <p>{t("direction-1")}</p>
                        <p className="mb-3">{t("direction-2")}</p>
                    </address>

                    <p className="text-xs text-gray-600">{t("rights")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
