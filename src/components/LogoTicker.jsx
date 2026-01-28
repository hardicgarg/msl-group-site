import React from 'react';
import { motion } from 'framer-motion';

// Dynamically import all partner logos from the directory
const logoModules = import.meta.glob('../assets/partners/*.{png,jpg,jpeg,svg}', { eager: true });

const LogoTicker = () => {
    // Transform the imported modules into the partners array
    const partners = Object.keys(logoModules).map((path) => {
        // Extract filename without extension to use as the name
        const fileName = path.split('/').pop().split('.')[0];
        // Convert camelCase, snake_case, or kebab-case to Title Case for display
        const name = fileName
            .replace(/([A-Z])/g, ' $1') // Add space before capital letters
            .replace(/[-_]/g, ' ')      // Replace hyphens/underscores with spaces
            .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize first letter of each word
            .trim();

        return {
            name: name,
            logo: logoModules[path].default
        };
    });

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
                            duration: 40,
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
