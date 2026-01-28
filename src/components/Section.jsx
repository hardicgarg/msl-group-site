import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, image, reverse = false, className = '' }) => {
    const hasImage = !!image;

    return (
        <section className={`section ${className}`}>
            <div className="container">
                {hasImage ? (
                    /* Two Column Layout (Text + Image) */
                    <div className={`feature-grid ${reverse ? 'reverse' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-col"
                        >
                            {title && <h2 className="text-gradient">{title}</h2>}
                            <div className="text-muted leading-relaxed">
                                {children}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="image-col"
                        >
                            <div className="image-card">
                                <img
                                    src={image}
                                    alt={title || "Section Image"}
                                    className="w-full h-full object-cover shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    /* Single Column Layout (Text Only - Centered) */
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="single-col-layout"
                        style={{ maxWidth: '900px', margin: '0 auto' }} // Inline style for simplicity, or add class
                    >
                        {title && <h2 className="text-gradient mb-6">{title}</h2>}
                        <div className="text-muted leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Section;
