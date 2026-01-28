import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import CountUpStat from '../components/CountUpStat';
import { UserCheck, Users, Clock, Briefcase, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ZenHirePro = () => {
    return (
        <div className="animate-fade-in">
            <HeroSection
                title="ZenHirePro"
                subtitle=" Precision Hiring for High-Growth Teams"
                backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                primaryAction={{ label: 'We are Hiring', onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                secondaryAction={{ label: 'Hire Talent', onClick: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) }}
            />

            {/* Introduction - using Reusable SplitSection */}
            <SplitSection
                title="Data-Driven"
                highlight="Recruitment"
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                imageAlt="Recruitment Team"
            >
                <p>
                    <strong>ZenHirePro</strong> isn't just about filling seats; it's about engineering high-performance teams. We use advanced screening algorithms and a vast network of vetted professionals to match the right talent with the right culture.
                </p>

                <div className="flex flex-wrap gap-8 items-start pt-4">
                    <CountUpStat value={48} suffix="h" label="Avg. Time to Shortlist" color="text-green-600" />
                    <CountUpStat value={92} suffix="%" label="Retention Rate" color="text-green-600" />
                    <CountUpStat value={500} suffix="+" label="Placements/Year" color="text-green-600" />
                </div>
            </SplitSection>

            {/* Hiring Solutions Grid */}
            <section id="services" className="section bg-green-50 relative">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-gradient">Flexible Hiring Models</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center">
                            Whether you need a CTO or a temporary dev team, we have a model that fits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Briefcase size={32} />, title: "Permanent Hiring", desc: "Full-time placements for core roles. We handle everything from sourcing to negotiation." },
                            { icon: <Clock size={32} />, title: "Contract Staffing", desc: "On-demand talent for short-term projects. Scale your team up or down instantly." },
                            { icon: <Users size={32} />, title: "RPO Services", desc: "End-to-end recruitment process outsourcing for high-volume hiring needs." },
                            { icon: <Search size={32} />, title: "Executive Search", desc: "Discreet and specialized headhunting for C-suite and leadership positions." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-all"
                            >
                                <div className="text-green-600 mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <Section
                title="The ZenHire Advantage"
                image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
                reverse={true}
            >
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Rigorous Vetting</h4>
                            <p className="text-slate-600">Technical tests, behavioral interviews, and culture-fit assessments before you even see a resume.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Dedicated Account Manager</h4>
                            <p className="text-slate-600">One point of contact who understands your business inside and out.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Replacement Guarantee</h4>
                            <p className="text-slate-600">If a hire doesn't work out within 90 days, we replace them for free. Zero risk.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <div id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] z-0" />
                <div className="container relative z-10 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl leading-tight">Start Building Your Dream Team</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed !text-center">Drop your requirements and get a curated list of profiles within 48 hours. No upfront costs, pay only on successful hire.</p>
                    <button className="btn bg-green-600 text-white hover:bg-green-700 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:gap-5 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1">
                        Post a Job <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ZenHirePro;
