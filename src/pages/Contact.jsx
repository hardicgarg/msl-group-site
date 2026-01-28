import React from 'react';
import HeroSection from '../components/HeroSection';
import { Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="animate-fade-in">
            <HeroSection
                title="Get in Touch"
                subtitle="Let's build something great together. Reach out to us for collaborations and inquiries."
                backgroundImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
            />

            {/* Contact Info Grid */}
            <section style={{ backgroundColor: '#e8eeef', padding: '3rem 0' }}>
                <div className="container">
                    {/* Top Row - Phone, Address, Email */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        {/* Phone */}
                        <div style={{
                            backgroundColor: '#f5f8f8',
                            borderRadius: '1rem',
                            padding: '2rem',
                            minHeight: '200px'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#1a1a1a',
                                letterSpacing: '-0.02em'
                            }}>
                                011 4475 6172
                            </h2>
                        </div>

                        {/* Address */}
                        <div style={{
                            backgroundColor: '#f5f8f8',
                            borderRadius: '1rem',
                            padding: '2rem',
                            minHeight: '200px'
                        }}>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: '#1a1a1a', fontSize: '0.9rem' }}>INDIA:</strong>{' '}
                                <span style={{ color: '#1a1a1a', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    B1/E13, BLOCK E, MOHAN COOPERATIVE INDUSTRIAL ESTATE, BADARPUR, NEW DELHI, DELHI 110044
                                </span>
                            </p>
                            <p style={{ margin: 0 }}>
                                <strong style={{ color: '#1a1a1a', fontSize: '0.9rem' }}>USA:</strong>{' '}
                                <span style={{ color: '#64748b', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    AVENTIQ TECHNOLOGIES INC. 5900 BALCONES DRIVE STE 100, AUSTIN, TX 78731, USA
                                </span>
                            </p>
                        </div>

                        {/* Email */}
                        <div style={{
                            backgroundColor: '#f5f8f8',
                            borderRadius: '1rem',
                            padding: '2rem',
                            minHeight: '200px'
                        }}>
                            <h2 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#1a1a1a',
                                letterSpacing: '-0.02em',
                                textTransform: 'uppercase'
                            }}>
                                INFO@MITTALSOFTWARELABS.COM
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Row - Opening Hours, Follow Us */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Opening Hours */}
                        <div style={{
                            backgroundColor: '#f5f8f8',
                            borderRadius: '1rem',
                            padding: '2rem',
                            minHeight: '220px'
                        }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                                Opening Hours:
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', margin: 0 }}>
                                    MON TO FRI: 9.00AM - 8.30PM
                                </h3>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', margin: 0 }}>
                                    SAT: 10.00AM - 6.30PM
                                </h3>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', margin: 0 }}>
                                    SUN: CLOSED
                                </h3>
                            </div>
                        </div>

                        {/* Follow Us */}
                        <div style={{
                            backgroundColor: '#f5f8f8',
                            borderRadius: '1rem',
                            padding: '2rem',
                            minHeight: '220px'
                        }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                                Follow Us:
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        border: '2px solid #2563eb',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#2563eb',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Linkedin size={22} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        border: '2px solid #64748b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#64748b',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Twitter size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section style={{ backgroundColor: '#e8eeef', paddingBottom: '3rem' }}>
                <div className="container">
                    <div style={{
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.021667469608!2d77.29158307525283!3d28.50974597573646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7daf5c4251f%3A0xe53fa28445701768!2sMittal%20Software%20Labs%20Limited!5e0!3m2!1sen!2sin!4v1719565578768!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location - MSL Labs"
                        />
                    </div>
                </div>
            </section>

            {/* Let's Talk Form Section */}
            <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '3rem'
                    }}>
                        {/* Center - Heading */}
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{
                                fontSize: '5rem',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                margin: 0
                            }}>
                                <span style={{ color: '#1a1a1a' }}>Let's </span>
                                <span style={{ color: '#2563eb' }}>Talk!</span>
                            </h2>
                        </div>

                        {/* Form */}
                        <div style={{
                            backgroundColor: '#f5f5f5',
                            borderRadius: '1rem',
                            padding: '2rem',
                            width: '100%',
                            maxWidth: '700px'
                        }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Name</label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Company</label>
                                        <input
                                            type="text"
                                            placeholder="Company"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Company Email</label>
                                        <input
                                            type="email"
                                            placeholder="Company Email"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Industry</label>
                                        <select
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="">Select...</option>
                                            <option value="technology">Technology</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="finance">Finance</option>
                                            <option value="logistics">Logistics</option>
                                            <option value="education">Education</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="retail">Retail</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Job Title</label>
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                backgroundColor: '#e5e5e5',
                                                fontSize: '0.95rem',
                                                color: '#64748b',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        backgroundColor: '#2563eb',
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        marginTop: '0.5rem',
                                        transition: 'background-color 0.2s'
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
