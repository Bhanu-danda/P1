import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
    { name: 'About Me', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#skills' },
    { name: 'Resume', href: '#' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
                scrolled ? "pt-4" : "pt-8"
            )}
        >
            <nav
                className={cn(
                    "w-[95%] max-w-7xl bg-white/95 backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between shadow-2xl transition-all duration-500",
                    scrolled ? "scale-[0.98] py-2.5" : "scale-100"
                )}
            >
                {/* Name - Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold font-logo text-black tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    BHANU PRASAD
                </motion.div>

                {/* Desktop Menu - Right side */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navItems.map((item, idx) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-[13px] font-medium font-sans text-gray-500 hover:text-black hover:translate-y-[-1px] transition-all duration-300 uppercase tracking-widest px-1"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-black text-white px-8 py-2.5 rounded-full text-[13px] font-bold font-sans hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20"
                    >
                        Contact
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-black p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden md:hidden mx-4"
                        >
                            <div className="p-8 flex flex-col gap-6 items-center text-center">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-bold text-gray-800 hover:text-black transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    className="bg-black text-white w-full py-4 rounded-2xl font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;

