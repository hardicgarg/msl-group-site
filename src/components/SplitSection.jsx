import React from 'react';
import { motion } from 'framer-motion';

const SplitSection = ({ 
    title, 
    highlight, 
    children, 
    image, 
    imageAlt = "Feature Image", 
    reverse = false, 
    className = "bg-white" 
}) => {
    return (
        <section className={`section ${className}`}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={reverse ? "md:order-2" : "md:order-1"}
                    >
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {title} <br/>
                                {highlight && <span className="text-blue-600">{highlight}</span>}
                            </h2>
                        )}
                        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                            {children}
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${reverse ? "md:order-1" : "md:order-2"}`}
                    >
                        <img 
                            src={image} 
                            alt={imageAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SplitSection;
