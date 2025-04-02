'use client';

import Footer from "@/moleculas/footer";
import NavBar from "@/moleculas/navBar";
import { useEffect, useState } from "react";

export default function WittyWinesPage() {
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
    <div>
        <NavBar isScrolled={isScrolled} />
    </div>
        <main>
            <h1>Aribau Witty Wines</h1>
            <p>Bienvenido a la historia de Aribau...</p>
        </main>
        <footer className="mt-10">
                <Footer />
        </footer>
    </>
    );
}
