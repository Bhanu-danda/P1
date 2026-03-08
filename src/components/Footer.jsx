import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-surface-900 border-t border-surface-800">
            <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8 py-0">

                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="text-xl font-bold flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white text-xs group-hover:rotate-12 transition-transform">
                            BP
                        </div>
                        <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                            BHANU PRASAD
                        </span>
                    </div>
                    <p className="text-sm text-text-secondary max-w-sm text-center md:text-left">
                        Built with passion using React, Tailwind and Framer Motion.
                        Designing the future of data engineering.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                    <div className="flex gap-4">
                        <a href="https://github.com" className="p-3 rounded-full hover:bg-surface-800 hover:text-brand-primary transition-all duration-300">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" className="p-3 rounded-full hover:bg-surface-800 hover:text-brand-primary transition-all duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" className="p-3 rounded-full hover:bg-surface-800 hover:text-brand-primary transition-all duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:bhanu@example.com" className="p-3 rounded-full hover:bg-surface-800 hover:text-brand-primary transition-all duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
                    <div className="text-xs text-text-secondary">
                        &copy; {currentYear} Bhanu Prasad. All rights reserved.
                    </div>
                </div>

                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all duration-500"
                >
                    <ChevronUp size={24} />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;
