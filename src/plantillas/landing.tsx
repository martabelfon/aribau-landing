import React, { } from 'react';
import NavBar from '@/moleculas/navBar';

const Landing: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <header>
                <NavBar/>
            </header>
            <main>
                <section>
                    <p className='bg-amber-800'>Section1</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Witty Wines. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;