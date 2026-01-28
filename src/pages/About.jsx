import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Globe, Users } from 'lucide-react';

const About = () => {
    return (
        <div>
            <HeroSection
                title="About MSL"
                subtitle="Incubating ideas, scaling platforms, and driving operational excellence."
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            />

            {/* Vision Section - Zig Zag */}
            <Section title="Our Vision">
                <p>
                    <strong>Mittal Software Labs Limited (MSL)</strong> functions as the strategic brain and operational backbone for a diverse portfolio of software platforms.
                </p>
                <p>
                    We provide shared strategic direction, product thinking, deep technology capabilities, and operational governance, allowing each vertical to focus on execution and growth.
                </p>
            </Section>

            {/* What We Do - Zig Zag Reverse */}
            <Section
                title="What We Do"
                reverse={true}
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            >
                <ul className="space-y-4">
                    {[
                        "Building practical, execution-oriented software products",
                        "Solving real operational problems through technology",
                        "Balancing enterprise solutions with community platforms",
                        "Creating scalable platforms that grow independently"
                    ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            <CheckCircle size={20} color="var(--color-accent)" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* Expertise Grid - Premium Cards */}
            <section className="section bg-surface">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="text-gradient">Our Expertise</h2>
                        <p style={{ margin: '0 auto' }}>Deep capabilities across the technology spectrum.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Automation & AI", icon: <Award size={32} />, desc: "Enterprise-grade automation workflows." },
                            { title: "SaaS Development", icon: <Globe size={32} />, desc: "Scalable cloud-native product engineering." },
                            { title: "Logistics", icon: <Users size={32} />, desc: "Supply chain and freight operations platforms." },
                            { title: "Talent Enablement", icon: <Award size={32} />, desc: "Recruitment, staffing, and skill development." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="card-premium"
                                style={{ textAlign: 'center', alignItems: 'center' }}
                            >
                                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
