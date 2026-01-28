import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SplitSection from '../components/SplitSection';
import CountUpStat from '../components/CountUpStat';
import { BookOpen, Code, Briefcase, Award, Users, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BharatXcelerate = () => {
    return (
        <div className="animate-fade-in">
            <HeroSection
                title="BharatXcelerate"
                subtitle="Bridging the Gap Between Academia and Industry"
                backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                primaryAction={{ label: 'For Colleges', onClick: () => document.getElementById('colleges').scrollIntoView({ behavior: 'smooth' }) }}
                secondaryAction={{ label: 'For Students', onClick: () => document.getElementById('students').scrollIntoView({ behavior: 'smooth' }) }}
            />

            {/* Introduction - using Reusable SplitSection */}
            <SplitSection
                title="Transforming Talent"
                highlight="for the Digital Age"
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                imageAlt="Students Learning"
            >
                <p>
                    <strong>BharatXcelerate</strong> is India's premier talent enablement platform. We partner with educational institutions to upskill students in next-gen technologies, making them Day-1 industry ready.
                </p>

                <div className="flex flex-wrap gap-8 items-start pt-4">
                    <CountUpStat value={50} suffix="+" label="Partner Colleges" color="text-orange-600" />
                    <CountUpStat value={10000} suffix="+" label="Students Trained" color="text-orange-600" />
                    <CountUpStat value={500} suffix="+" label="Projects Built" color="text-orange-600" />
                    <CountUpStat value={95} suffix="%" label="Placement Rate" color="text-orange-600" />
                </div>
            </SplitSection>

            {/* The Learning Journey Grid */}
            <section className="section bg-orange-50 relative">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-gradient">The Learning Journey</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center">
                            Our "Learn-Build-Work" pedagogy ensures true mastery of skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <BookOpen size={40} />, title: "1. Intensive Training", desc: "Live expert-led sessions on Full Stack, AI/ML, and Cloud Computing. No boring theory, just practical code." },
                            { icon: <Code size={40} />, title: "2. Real-World Build", desc: "Students work in agile teams to build production-grade applications, simulating a real corporate environment." },
                            { icon: <Briefcase size={40} />, title: "3. Industry Immersion", desc: "Guaranteed internships and placement support with top-tier tech companies and startups." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all text-center"
                            >
                                <div className="text-orange-600 mb-6 flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Colleges */}
            <div id="colleges">
                <Section
                    title="For Institutions: Upgrade Your Campus"
                    image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
                    reverse={true}
                >
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Why Partner With Us?</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Award className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                            <span className="text-slate-700"><strong>Curriculum Enhancement:</strong> We update your syllabus with the latest industry trends (React, Node, Python, AWS).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Users className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                            <span className="text-slate-700"><strong>Faculty Development:</strong> Train the trainer programs to upskill your internal faculty.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Rocket className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                            <span className="text-slate-700"><strong>Placement Cell Support:</strong> We bring corporate hiring partners directly to your campus.</span>
                        </li>
                    </ul>
                </Section>
            </div>

            {/* For Students */}
            {/* For Students / CTA */}
            <div id="students">
                <div id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] z-0" />
                    <div className="container relative z-10 flex flex-col items-center justify-center text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl leading-tight">For Students: Launch Your Career</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed !text-center">Don't just graduate. Accelerate. Gain 6 months of verifiable work experience and build a portfolio of deployed applications before you even leave campus.</p>
                        <button className="btn bg-orange-600 text-white hover:bg-orange-700 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:gap-5 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1">
                            Start Application <ArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BharatXcelerate;
