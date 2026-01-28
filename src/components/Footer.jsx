import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">


                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/">
                            <img src={logo} alt="MSL" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
                        </Link>
                        <p className="footer-desc">
                            Building, operating, and scaling software platforms across enterprise, consumer, and community domains.
                        </p>
                    </div>

                    {/* Verticals Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Verticals</h4>
                        <ul className="footer-links">
                            <li><Link to="/aventiq">AventIQ</Link></li>
                            <li><Link to="/cargoclave">CargoClave</Link></li>
                            <li><Link to="/zenhirepro">ZenHirePro</Link></li>
                            <li><Link to="/bharatxcelerate">BharatXcelerate</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/applications">Applications</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Connect</h4>
                        <p className="footer-contact">info@msl-labs.com</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Mittal Software Labs Limited. All rights reserved.</p>
                    <div className="footer-legal">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
