import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const socialLinks = [
        { label: 'LinkedIn', value: 'linkedin.com/in/bhanu-prasad', href: 'https://linkedin.com/in/bhanu-prasad', icon: <Linkedin size={18} /> },
        { label: 'GitHub', value: 'github.com/bhanu-prasad', href: 'https://github.com/bhanu-prasad', icon: <Github size={18} /> },
        { label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890', icon: <Phone size={18} /> },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-surface-900" ref={ref}>
            <div className="section-container max-w-[900px] mx-auto text-center relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-7xl font-logo font-bold text-white tracking-tight">
                            Contact
                        </h2>
                        <p className="text-brand-primary text-lg md:text-xl font-medium">
                            Psst… exciting opportunities, anyone? 👀
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-sans">
                        I'm open to new projects, part-time gigs, or even a full-time adventure.
                        Have something interesting in mind? Just shoot me an email — I'm practically glued to my inbox. No delays, I promise!
                    </p>

                    {/* Email CTA */}
                    <div className="space-y-4">
                        <a
                            href="mailto:bhanu.prasad@example.com"
                            className="inline-flex items-center gap-2 text-3xl md:text-5xl font-bold text-white hover:text-brand-primary transition-all duration-300 group"
                        >
                            Reach Out
                            <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                        <p className="text-text-secondary font-medium tracking-wide">
                            bhanu.prasad@example.com
                        </p>
                    </div>

                    {/* Socials Divider */}
                    <div className="pt-16 border-t border-white/5">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text-secondary mb-10">
                            You can also find me on
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-full bg-surface-800 text-brand-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                                        {link.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-center gap-1.5 font-bold text-white group-hover:text-brand-primary transition-colors">
                                            {link.label}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="text-xs text-text-secondary">
                                            {link.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
};

export default Contact;

