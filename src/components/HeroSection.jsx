import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle, backgroundImage, primaryAction, secondaryAction, tertiaryAction }) => {
    return (
        <div className="hero-section">
            {/* Background */}
            <div className="hero-bg">
                <img
                    src={backgroundImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"}
                    alt="Hero background"
                />
                {/* Updated Gradient Overlay for Depth */}
                <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4))' }} />
            </div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <h1 className="hero-title" style={{ maxWidth: '20ch' }}>
                        {title}
                    </h1>
                    <p className="hero-subtitle">
                        {subtitle}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {primaryAction && (
                            <button
                                onClick={primaryAction.onClick}
                                className="btn btn-primary"
                            >
                                {primaryAction.label}
                            </button>
                        )}
                        {secondaryAction && (
                            <button
                                onClick={secondaryAction.onClick}
                                className="btn btn-secondary"
                            >
                                {secondaryAction.label}
                            </button>
                        )}
                        {tertiaryAction && (
                            <button
                                onClick={tertiaryAction.onClick}
                                className="btn btn-secondary"
                            >
                                {tertiaryAction.label}
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
