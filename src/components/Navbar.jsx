import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0',
                scrolled ? 'bg-surface-900/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold flex items-center gap-2 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white text-xs group-hover:rotate-12 transition-transform">
                        BP
                    </div>
                    <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                        BHANU PRASAD
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="btn-primary py-2 px-5 flex items-center gap-2 text-sm"
                    >
                        <Download size={16} />
                        Download CV
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface-900 border-b border-surface-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="btn-primary w-full flex items-center justify-center gap-2">
                                <Download size={18} />
                                Download CV
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
