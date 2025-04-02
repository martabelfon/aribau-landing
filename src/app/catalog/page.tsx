'use client';

import Footer from "@/moleculas/footer";
import NavBar from "@/moleculas/navBar";
import WineProductList from "@/moleculas/wineProduct";
import { useEffect, useState } from "react";

export default function CatalogPage() {
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
            <WineProductList />
        </main>
        <footer className="mt-10">
                <Footer />
        </footer>
    </>
    );
}
