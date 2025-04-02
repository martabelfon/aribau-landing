'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '@/moleculas/navBar';
import WittyWines from '@/moleculas/wittyWines';
import Footer from '@/moleculas/footer';
import ModulesPage from '@/moleculas/modules';
import Wineries from '@/moleculas/wineries';

const Landing: React.FC = () => {

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
        <div style={{ textAlign: 'center' }}>
            <header>
                <NavBar isScrolled={isScrolled} />
            </header>
            <main>
                <section style={{ position: 'relative', height: '90vh' }}>
                    <video 
                        src="/iconos/intro2.MP4"
                        autoPlay 
                        muted 
                        loop 
                        style={{ 
                            width: '100%',
                            height: '100%', 
                            objectFit: 'cover', 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            opacity: 0.7,
                        }} 
                    />
                </section>
                    <WittyWines />
                    <ModulesPage />
                    <Wineries />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Landing;
