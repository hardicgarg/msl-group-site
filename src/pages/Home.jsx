import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Users, Globe, Cpu, Building2, GraduationCap, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const verticals = [
        {
            id: 'aventiq',
            title: 'AventIQ',
            subtitle: 'Enterprise IT Consulting & Digital Engineering',
            desc: 'Custom IT consulting, software development, automation, and AI-driven solutions for global enterprises.',
            link: '/aventiq',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
            color: 'text-blue-600'
        },
        {
            id: 'cargoclave',
            title: 'CargoClave',
            subtitle: 'Logistics-Focused SaaS Platforms',
            desc: 'Domain-specific technology products built for operational visibility and execution control in logistics.',
            link: '/cargoclave',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
            color: 'text-indigo-600'
        },
        {
            id: 'zenhirepro',
            title: 'ZenHirePro',
            subtitle: 'Recruitment & Workforce Solutions',
            desc: 'End-to-end hiring solutions delivering speed, quality, and reliability across permanent and contractual roles.',
            link: '/zenhirepro',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
            color: 'text-green-600'
        },
        {
            id: 'bharatxcelerate',
            title: 'BharatXcelerate',
            subtitle: 'Talent Enablement & Industry Readiness',
            desc: 'Real-world project exposure, internships, and corporate readiness programs for engineering graduates.',
            link: '/bharatxcelerate',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
            color: 'text-orange-600'
        }
    ];

    return (
        <div className="animate-fade-in">
            <HeroSection
                title="Mittal Software Labs"
                subtitle="Mittal Software Labs Limited is a diversified technology group operating across enterprise IT consulting, recruitment solutions, talent enablement, logistics SaaS, and consumer technology platforms."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                primaryAction={{ label: 'Our Verticals', onClick: () => document.getElementById('verticals').scrollIntoView({ behavior: 'smooth' }) }}
            />

            {/* Intro Section - Asymmetric Layout */}
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">


                        {/* Left: Single Feature Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                                alt="Strategic Innovation"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
                        </motion.div>

                        {/* Right: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Strategic Innovation <br />
                                <span className="text-blue-600">at Scale</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
                                <strong>MSL</strong> functions as the incubator and manager of core verticals and applications. We provide shared strategic direction, product thinking, and operational governance to a diverse portfolio of platforms.
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:gap-4 transition-all">
                                <span>Discover Our Approach</span> <ArrowRight size={20} />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Verticals Section */}
            <section id="verticals" className="section">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-gradient">Core Verticals</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">Focused expertise across distinct market domains.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {verticals.map((v) => (
                            <Link to={v.link} key={v.id} style={{ display: 'block', textDecoration: 'none' }}>
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="card-horizontal"
                                >
                                    {/* Backgound Image */}
                                    <img
                                        src={v.image}
                                        alt={v.title}
                                        className="card-bg-image"
                                    />

                                    {/* Frosted Glass Overlay */}
                                    <div className="card-overlay" />

                                    {/* Content */}
                                    <div className="card-content">
                                        <div style={{ marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '2.5rem', marginBottom: '0.25rem', color: 'white' }}>{v.title}</h3>
                                            <p style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{v.subtitle}</p>
                                        </div>
                                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', color: '#e2e8f0' }}>{v.desc}</p>

                                        <div className="flex gap-4 mt-8">
                                            <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>
                                                Learn More <ArrowRight size={22} style={{ marginLeft: '0.5rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership & Vision */}
            <SplitSection
                title="Leadership & Vision"
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                imageAlt="Leadership Team"
            >
                <p className="text-xl text-slate-600 leading-relaxed">
                    Founder-led organization with a long-term focus on enterprise technology, product ecosystems, workforce platforms, and responsible innovation. Our leadership team brings decades of experience in building and scaling technology businesses.
                </p>
            </SplitSection>

            {/* Partnerships & Collaboration */}
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Partnerships & Collaboration</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto text-center">
                            We collaborate with leading organizations across industries to build sustainable value
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Building2 size={40} />, title: "Enterprise Clients", desc: "Global technology partnerships" },
                            { icon: <GraduationCap size={40} />, title: "Academic Institutions", desc: "Talent development programs" },
                            { icon: <TrendingUp size={40} />, title: "Strategic Investors", desc: "Long-term value creation" },
                            { icon: <Handshake size={40} />, title: "Technology Alliances", desc: "Innovation ecosystems" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6">
                                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-6 transition-transform hover:scale-110 duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Break */}
            <section style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Team"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.8)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                    <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Solving Real Operational Problems</h2>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, maxWidth: '800px' }}>
                        Through technology, automation, and a people-first approach.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
