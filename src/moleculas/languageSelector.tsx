/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const languageNames: { [key: string]: string } = {
        ca: "CAT",
        es: "ES",
        en: "EN"
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    return (
            <div className="flex flex-row text-xs ">
                <div>
                <button
                onClick={() => changeLanguage('ca')}
                className={`mr-1 rounded-lg ${selectedLanguage === 'ca' ? 'font-bold' :  'text-gray-400'}`}
                >
                    {languageNames['ca']}
                </button>
                </div>
                <div>
                <button
                    onClick={() => changeLanguage('es')}
                    className={`mr-1 rounded-lg ${selectedLanguage === 'es' ? 'font-bold' : 'text-gray-400'}`}
                >
                    {languageNames['es']}
                </button>
                </div>
                <div>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`rounded-lg ${selectedLanguage === 'en' ? 'font-bold' : 'text-gray-400'}`}
                >
                    {languageNames['en']}
                </button>
                </div>
            </div>
    );
};

export default LanguageSelector;
