import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AventIQ', path: '/aventiq' },
    { name: 'CargoClave', path: '/cargoclave' },
    { name: 'ZenHirePro', path: '/zenhirepro' },
    { name: 'BharatXcelerate', path: '/bharatxcelerate' },
    { name: 'Applications', path: '/applications' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
    >
      <div className="container flex items-center justify-between">


        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MSL" className="navbar-logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
