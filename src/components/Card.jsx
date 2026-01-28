import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, description, category, icon: Icon, image }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="card-premium"
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: image ? '320px' : 'auto'
            }}
        >
            {/* Background Image */}
            {image && (
                <>
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.4,
                            zIndex: 0
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.85))',
                            zIndex: 1
                        }}
                    />
                </>
            )}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.75rem', backgroundColor: '#f1f5f9', borderRadius: '0.5rem', color: 'var(--color-primary)' }}>
                        {Icon ? <Icon size={24} /> : <div style={{ width: '24px', height: '24px' }} />}
                    </div>
                    <ArrowUpRight size={20} style={{ color: '#94a3b8' }} className="arrow-icon" />
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{
                        fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-accent)', backgroundColor: '#eff6ff',
                        padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em'
                    }}>
                        {category}
                    </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1 }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default Card;
