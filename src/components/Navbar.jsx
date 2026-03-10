import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About Me', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Resume', href: '/resume' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const handleNavClick = (href) => {
        setIsOpen(false);
        if (href.startsWith('/#') && isHome) {
            const id = href.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

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
                    className="text-[1.6rem] font-black font-['Space_Grotesk'] leading-relaxed tracking-wide text-black cursor-pointer hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                >
                    <Link to="/">BHANU PRASAD</Link>
                </motion.div>

                {/* Desktop Menu - Right side */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navItems.map((item, idx) => {
                            const isLink = item.href.startsWith('/resume');
                            const Component = isLink ? Link : 'a';
                            const props = isLink ? { to: item.href } : { href: item.href, onClick: (e) => handleNavClick(item.href) };

                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Component
                                        {...props}
                                        className="relative text-[13px] font-medium font-sans text-gray-500 hover:text-orange-500 hover:translate-y-[-1px] transition-all duration-300 uppercase tracking-widest px-1 block after:content-[''] after:absolute after:h-[2px] after:bg-orange-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:-bottom-1 after:left-0"
                                    >
                                        {item.name}
                                    </Component>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-black text-white px-8 py-2.5 rounded-full text-[13px] font-bold font-sans hover:bg-gray-900 hover:text-orange-500 transition-all duration-300 shadow-lg hover:shadow-black/20"
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
                                {navItems.map((item) => {
                                    const isLink = item.href.startsWith('/resume');
                                    const Component = isLink ? Link : 'a';
                                    const props = isLink ? { to: item.href, onClick: () => setIsOpen(false) } : { href: item.href, onClick: () => handleNavClick(item.href) };

                                    return (
                                        <Component
                                            key={item.name}
                                            {...props}
                                            className="text-lg font-bold text-gray-800 hover:text-orange-500 transition-colors duration-300"
                                        >
                                            {item.name}
                                        </Component>
                                    );
                                })}
                                <Link
                                    to="/#contact"
                                    className="bg-black text-white w-full py-4 rounded-2xl font-bold hover:text-orange-500 hover:bg-gray-900 transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;


