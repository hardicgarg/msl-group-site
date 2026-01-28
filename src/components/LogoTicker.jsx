import React from 'react';
import { motion } from 'framer-motion';

// Import partner logos
import wethreeLogo from '../assets/partners/wethree.png';
import seacubeLogo from '../assets/partners/seacube.jpg';
import stelliumLogo from '../assets/partners/stellium.png';
import greenleafLogo from '../assets/partners/greenleaf.png';
import enhanceLogo from '../assets/partners/enhance.jpg';

const LogoTicker = () => {
    const partners = [
        { name: 'We Three Foodstuff Trading', logo: wethreeLogo },
        { name: 'SeaCube Logistics', logo: seacubeLogo },
        { name: 'Stellium', logo: stelliumLogo },
        { name: 'GreenLeaf', logo: greenleafLogo },
        { name: 'Enhance Group', logo: enhanceLogo },
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="logo-ticker-section">
            <div className="container">
                <h2 className="text-gradient logo-ticker-headline">Our Partners</h2>
            </div>

            <div className="logo-ticker-wrapper">
                <div className="logo-ticker-fade logo-ticker-fade-left" />
                <div className="logo-ticker-fade logo-ticker-fade-right" />

                <motion.div
                    className="logo-ticker-track"
                    animate={{ x: ['0%', '-33.333%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 20,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div key={index} className="logo-ticker-item">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="logo-ticker-image"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoTicker;
