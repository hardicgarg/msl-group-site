import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import CountUpStat from '../components/CountUpStat';
import SpotlightCard from '../components/SpotlightCard';
import { Cpu, Bot, BarChart, ShieldCheck, Zap, Globe, Search, FileText, Code, Plug, Cloud, Smartphone, Bell, LayoutDashboard, Lock, ClipboardList, ArrowRight } from 'lucide-react';

const AventIQ = () => {
    return (
        <div className="animate-fade-in">
            <HeroSection
                title="AventIQ"
                subtitle="The Future of Enterprise Automation & AI Agents"
                backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                primaryAction={{ label: 'Schedule Demo', onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                secondaryAction={{ label: 'Visit Website', onClick: () => window.open('https://www.aventiq.ai/', '_blank') }}
            />

            {/* Introduction - using Reusable SplitSection */}
            <SplitSection
                title="Intelligent Automation"
                highlight="for the Modern Enterprise"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                imageAlt="AI Automation"
            >
                <p>
                    <strong>AventIQ</strong> is a next-generation automation platform that combines <strong>Robotic Process Automation (RPA)</strong> with <strong>Generative AI</strong> to build intelligent digital workforces.
                </p>
                <p>
                    We don't just script tasks; we build <strong>autonomous agents</strong> capable of making decisions, handling exceptions, and learning from data.
                </p>

                <div className="flex flex-wrap gap-8 items-start pt-4">
                    <CountUpStat value={99} suffix="%" label="Accuracy" color="text-blue-600" />
                    <CountUpStat value={24} suffix="/7" label="Operations" color="text-blue-600" />
                    <CountUpStat value={10} suffix="x" label="ROI" color="text-blue-600" />
                </div>
            </SplitSection>

            {/* Key Capabilities Grid */}
            <section id="solutions" className="section bg-slate-50 relative">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-gradient">Core Capabilities</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center">
                            Our platform delivers a full suite of automation technologies designed to scale with your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Bot size={32} />, title: "AI Digital Workers", desc: "Deploy intelligent bots that can read docs, write emails, and navigate complex software interfaces." },
                            { icon: <Cpu size={32} />, title: "Workflow Orchestration", desc: "Connect disparate systems (ERP, CRM, Legacy) into seamless, end-to-end automated workflows." },
                            { icon: <BarChart size={32} />, title: "Predictive Analytics", desc: "Gain real-time insights into process bottlenecks and operational efficiency with built-in dashboards." },
                            { icon: <ShieldCheck size={32} />, title: "Compliance & Security", desc: "Bank-grade security with full audit trails. ensure every automated action is tracked and compliant." },
                            { icon: <Zap size={32} />, title: "Hyper-Automation", desc: "Scale from one bot to thousands instantly. Our cloud-native architecture grows as you grow." },
                            { icon: <Globe size={32} />, title: "24/7 Operations", desc: "Your digital workforce never sleeps. Run critical back-office operations around the clock with zero downtime." }
                        ].map((item, i) => (
                            <SpotlightCard key={i} className="p-8 h-full">
                                <div className="text-blue-600 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Impact */}
            <Section
                title="Why Enterprises Choose AventIQ"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                reverse={true}
            >
                <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                        <div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">40-60% Cost Reduction</h4>
                            <p className="text-lg text-slate-600 leading-relaxed">Drastically lower operational costs by offloading high-volume, repetitive tasks to digital workers. Systems work 24/7 without fatigue.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">99.9% Accuracy</h4>
                            <p className="text-lg text-slate-600 leading-relaxed">Eliminate manual data entry errors. Our bots perform tasks with pixel-perfect precision every time, ensuring data integrity and compliance.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Rapid Implementation</h4>
                            <p className="text-lg text-slate-600 leading-relaxed">Go live in weeks, not months. Our low-code environment and pre-built connectors accelerate deployment cycles and time-to-value.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Call to Action */}
            {/* Call to Action */}
            <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] z-0" />

                <div className="container relative z-10 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl leading-tight">
                        Ready to Automate Your Future?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed !text-center">
                        Join forward-thinking companies that are redefining operations with AventIQ. Our platform integrates seamlessly with your existing infrastructure, delivering measurable ROI, operational agility, and a future-ready workforce from day one.
                    </p>
                    <button className="btn bg-blue-600 text-white hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:gap-5 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
                        Request a Personalized Demo <ArrowRight size={22} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AventIQ;
