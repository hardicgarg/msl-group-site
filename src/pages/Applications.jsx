import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { Layout, Database, Heart, Users, ClipboardCheck, ScanLine, Activity, FileText, RefreshCw, DollarSign, UserSearch, UserCog, Coins, HandHeart } from 'lucide-react';

const Applications = () => {
    const [filter, setFilter] = useState('All');

    const apps = [
        {
            title: 'Orchestrate',
            desc: 'An internal operations and workflow execution platform. Helps teams manage tasks, projects, approvals, and automation flows in one place, providing better visibility and coordination across operations.',
            category: 'Operations',
            icon: Layout,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
        },
        {
            title: 'DMS',
            desc: 'A centralized document storage and control platform. Allows businesses to store, organize, track, and securely manage documents with version control, access management, and easy retrieval.',
            category: 'Productivity',
            icon: Database,
            image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80'
        },
        {
            title: 'Donor Circle',
            desc: 'A social impact platform for blood donation. Connects blood donors with people in need in real time, helping requests reach nearby donors quickly and improving response time during emergencies.',
            category: 'Social Impact',
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80'
        },
        {
            title: 'Niswarth',
            desc: 'A community and care-focused initiative designed to support social responsibility, wellbeing initiatives, and community-driven support programs for those in need.',
            category: 'Social Impact',
            icon: Users,
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80'
        },
        {
            title: 'CCQA',
            desc: 'A quality assurance and compliance application. Enables structured inspections, audits, and verification processes using standardized workflows, evidence capture, and approval mechanisms.',
            category: 'Operations',
            icon: ClipboardCheck,
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
        },
        {
            title: 'CardScanner',
            desc: 'A contact digitization utility that allows users to scan physical business cards and convert them into structured, searchable digital contacts for easier networking and contact management.',
            category: 'Utility',
            icon: ScanLine,
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80'
        },
        {
            title: 'Healthcare Club',
            desc: 'A personal health record management platform. Allows individuals and families to securely store, organize, and access medical reports, prescriptions, lab results, and health history in one place.',
            category: 'Healthcare',
            icon: Activity,
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80'
        },
        {
            title: 'Contract Management',
            desc: 'A contract lifecycle tracking platform. Helps organizations manage contracts, renewals, compliance milestones, obligations, and deadlines to avoid operational or legal gaps.',
            category: 'Legal',
            icon: FileText,
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
        },
        {
            title: 'Batch Sync',
            desc: 'A bulk operations and process synchronization utility. Supports batch-based processing, data syncing, and operational alignment across systems or workflows.',
            category: 'Utility',
            icon: RefreshCw,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
        },
        {
            title: '1CR Club',
            desc: 'A financial wellbeing and intelligence platform. Helps individuals understand their financial health, track progress, and receive insights using structured data and intelligent analysis.',
            category: 'Finance',
            icon: DollarSign,
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80'
        },
        {
            title: 'ATS',
            desc: 'Applicant Tracking System — a hiring operations tool to manage job postings, applicants, interview stages, and hiring workflows efficiently.',
            category: 'Incubating',
            icon: UserSearch,
            image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80'
        },
        {
            title: 'EMS',
            desc: 'Employee Management System — an internal management system for tracking employees, performance metrics, and operational records across the organization.',
            category: 'Incubating',
            icon: UserCog,
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
        },
        {
            title: 'KittyParty',
            desc: 'A community-oriented application designed to manage group savings, contributions, and social gatherings with transparent tracking and scheduling.',
            category: 'Incubating',
            icon: Coins,
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80'
        },
        {
            title: 'Agarwal NGO',
            desc: 'A non-profit initiative aimed at community service, social welfare, and charitable activities supporting underprivileged communities.',
            category: 'Incubating',
            icon: HandHeart,
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80'
        },
    ];

    const filteredApps = filter === 'All' ? apps : apps.filter(app => app.category === filter);
    const categories = ['All', ...new Set(apps.map(app => app.category))];

    return (
        <div>
            <HeroSection
                title="Applications & Platforms"
                subtitle="Our portfolio of specialized solutions driving efficiency and impact across industries."
                backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            />

            <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
                <div className="container">

                    {/* Filter */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 grid-cols-2 grid-cols-3"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}
                    >
                        {filteredApps.map((app, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                key={app.title}
                            >
                                <Card
                                    title={app.title}
                                    description={app.desc}
                                    category={app.category}
                                    icon={app.icon}
                                    image={app.image}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Applications;
