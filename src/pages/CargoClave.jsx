import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import CountUpStat from '../components/CountUpStat';
import { Truck, FileText, Globe, DollarSign, BarChart2, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CargoClave = () => {
    return (
        <div className="animate-fade-in">
            <HeroSection
                title="CargoClave"
                subtitle="The Operating System for Global Logistics"
                backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                primaryAction={{ label: 'Book a Demo', onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                secondaryAction={{ label: 'Visit Website', onClick: () => window.open('https://www.cargoclave.com/', '_blank') }}
            />

            {/* Introduction - using Reusable SplitSection */}
            <SplitSection
                title="Unifying"
                highlight="the Supply Chain"
                image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                imageAlt="Global Logistics"
            >
                <p>
                    <strong>CargoClave</strong> connects shippers, freight forwarders, and carriers on a single, unified cloud platform. We replace fragmented emails, spreadsheets, and phone calls with real-time digital collaboration.
                </p>

                <div className="flex flex-wrap gap-8 items-start pt-4">
                    <CountUpStat value={30} suffix="%" label="Faster Ops" color="text-indigo-600" />
                    <CountUpStat value={100} suffix="%" label="Visibility" color="text-indigo-600" />
                    <CountUpStat value={0} suffix="" label="Lost Docs" color="text-indigo-600" />
                </div>
            </SplitSection>

            {/* Platform Features Grid */}
            <section id="features" className="section bg-indigo-50 relative">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-gradient">Complete Logistics Suite</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center">
                            From booking to billing, manage every step of your shipment lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Globe size={32} />, title: "Real-Time Tracking", desc: "Know exactly where your cargo is, whether it's on a truck, ship, or plane. Live API integrations with major carriers." },
                            { icon: <FileText size={32} />, title: "Digital Documentation", desc: "Centralized repository for Bill of Lading, Commercial Invoices, and Packing Lists. Drag, drop, and done." },
                            { icon: <DollarSign size={32} />, title: "Automated Invoicing", desc: "Reconcile vendor invoices automatically against quoted rates. Prevent overpayments and leakage." },
                            { icon: <Layers size={32} />, title: "Multi-Modal Support", desc: "Air, Ocean, Road, or Rail—manage mixed-mode shipments seamlessly in one dashboard." },
                            { icon: <Truck size={32} />, title: "Vendor Portal", desc: "Give your transporters a dedicated login to update status, upload PODs, and submit invoices." },
                            { icon: <BarChart2 size={32} />, title: "Cost Analytics", desc: "Deep dive into freight spend. Analyze lane performance and negotiate better rates with data." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-all"
                            >
                                <div className="text-indigo-600 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visibility Section */}
            <Section
                title="End-to-End Visibility"
                image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                reverse={true}
            >
                <h4 className="text-xl font-bold text-slate-900 mb-4">Eliminate the "Black Hole"</h4>
                <p className="text-slate-600 mb-6">
                    Stop chasing updates. CargoClave provides proactive alerts for delays, rollovers, and customs holds. Share tracking links with your customers so they can self-serve, reducing support calls by up to 60%.
                </p>

            </Section>

            {/* CTA */}
            {/* CTA */}
            <div id="contact" className="py-24 bg-slate-50 relative overflow-hidden" style={{ paddingBottom: '6rem' }}>
                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] z-0" />
                <div className="container relative z-10 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl leading-tight">Optimize Your Supply Chain Today</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed !text-center">Join the logistics companies moving faster with CargoClave. Gain real-time visibility and proactive control over your shipments.</p>
                    <button
                        className="btn-cta"
                        style={{
                            backgroundColor: '#4f46e5',
                            color: 'white',
                            padding: '1.25rem 2.5rem',
                            borderRadius: '9999px',
                            fontWeight: 'bold',
                            fontSize: '1.125rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#4338ca';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#4f46e5';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Request Demo <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CargoClave;
