"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navbarItems = [
  { title: "About", href: "#about" },
  { title: "Posts", href: "#posts" },
  { title: "Gallery", href: "#gallery" },
  { title: "Uses", href: "#uses" },
  { title: "Work", href: "#work" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-bold text-white"
          >
            Pratham
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                toggleMobileMenu();
                // Toggle body scroll lock
                document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-orange-400 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              data-mobile-menu-button="true"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden fixed top-16 left-0 right-0 z-50 bg-gray-900 shadow-lg"
            style={{ marginTop: '1px' }} // Ensure it's below the header
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
              {navbarItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = '';
                    }
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;