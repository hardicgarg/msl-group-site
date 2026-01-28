import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { Layout, Database, Heart, Users, ClipboardCheck, ScanLine, Activity, FileText, RefreshCw, DollarSign, UserSearch, UserCog } from 'lucide-react';

const Applications = () => {
    const [filter, setFilter] = useState('All');

    const apps = [
        {
            title: 'Orchestrate',
            desc: 'An internal operations and workflow execution platform. Helps teams manage tasks, projects, approvals, and automation flows in one place, providing better visibility and coordination across operations.',
            category: 'Operations',
            icon: Layout,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
            link: 'https://www.aventiq.ai/aventiq-orchestrate.html'
        },
        {
            title: 'Document Management System',
            desc: 'A centralized document storage and control platform. Allows businesses to store, organize, track, and securely manage documents with version control, access management, and easy retrieval.',
            category: 'Productivity',
            icon: Database,
            image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
            link: 'https://www.aventiq.ai/aventiq-dms.html'
        },
        {
            title: 'Call Center Quality Assurance',
            desc: 'A quality assurance and compliance application. Enables structured inspections, audits, and verification processes using standardized workflows, evidence capture, and approval mechanisms.',
            category: 'Operations',
            icon: ClipboardCheck,
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
            link: 'https://www.aventiq.ai/aventiq-ccqa.html'
        },
        {
            title: 'Contract Management',
            desc: 'A contract lifecycle tracking platform. Helps organizations manage contracts, renewals, compliance milestones, obligations, and deadlines to avoid operational or legal gaps.',
            category: 'Legal',
            icon: FileText,
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
        },
        {
            title: 'Applicant Tracking System',
            desc: 'A hiring operations tool to manage job postings, applicants, interview stages, and hiring workflows efficiently.',
            category: 'Incubating',
            icon: UserSearch,
            image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80',
            link: 'https://ats.aventiq.ai/'
        },
        {
            title: 'Employee Management System',
            desc: 'An internal management system for tracking employees, performance metrics, and operational records across the organization.',
            category: 'Incubating',
            icon: UserCog,
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
            link: 'https://ems.aventiq.ai/login'
        },
        {
            title: 'Niswarth Care',
            desc: 'A community and care-focused initiative designed to support social responsibility, wellbeing initiatives, and community-driven support programs for those in need.',
            category: 'Social Impact',
            icon: Users,
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80',
            link: 'https://www.niswarthcare.org/'
        },
        {
            title: 'Donor Circle',
            desc: 'A social impact platform for blood donation. Connects blood donors with people in need in real time, helping requests reach nearby donors quickly and improving response time during emergencies.',
            category: 'Social Impact',
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80',
            link: 'https://www.donorcircle.org/'
        },
        {
            title: 'Healthcare Club',
            desc: 'A personal health record management platform. Allows individuals and families to securely store, organize, and access medical reports, prescriptions, lab results, and health history in one place.',
            category: 'Healthcare',
            icon: Activity,
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80',
            link: 'https://healthcareclub.in/'
        },
        {
            title: 'CardScanner',
            desc: 'A contact digitization utility that allows users to scan physical business cards and convert them into structured, searchable digital contacts for easier networking and contact management.',
            category: 'Utility',
            icon: ScanLine,
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80',
            link: 'https://play.google.com/store/apps/details?id=com.aventiq.business_card_scanner&pcampaignid=web_share'
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}
                    >
                        {filteredApps.map((app) => (
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
                                    link={app.link}
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
