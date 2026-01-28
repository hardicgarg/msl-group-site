import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundShapes from './BackgroundShapes';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <BackgroundShapes />
            <main className="flex-grow pt-16 relative z-10">
                {/* pt-16 accounts for fixed navbar height */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
