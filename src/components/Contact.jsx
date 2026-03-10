import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('dandabhanu116@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        { label: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/bhanu-prasad-reddy-b1431b282/' },
        { label: 'GitHub', icon: <Github size={16} />, href: 'https://github.com/Bhanu-danda' },
        { label: 'Phone', icon: <Phone size={16} />, href: 'tel:+918688020121' },
    ];

    return (
        <section
            id="contact"
            className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden"
            ref={ref}
        >
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">

                    {/* Left Side: Large Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="font-logo font-bold text-[80px] md:text-[100px] text-[#e5e5e5] leading-none tracking-tighter sticky top-32">
                            Contact
                        </h2>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        {/* Playful Text */}
                        <div className="space-y-6">
                            <p className="font-sans text-[20px] md:text-[22px] font-medium text-brand-primary">
                                Psst... exciting opportunities, anyone?
                            </p>
                            <div className="space-y-4 text-[18px] md:text-[20px] text-[#d4d4d4] leading-relaxed font-sans max-w-xl">
                                <p>
                                    I'm open to new projects, part-time gigs, or even a full-time adventure.
                                </p>
                                <p>
                                    Just shoot me an email — I'm practically glued to it. <br className="hidden md:block" />
                                    No delays, I promise!
                                </p>
                            </div>
                        </div>

                        {/* Large Spacing / Subtle Divider replacement */}
                        <div className="h-px w-20 bg-white/10" />

                        {/* CTA Area */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <motion.a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=dandabhanu116@gmail.com&su=Portfolio Contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-[#f5f5f5] text-[#0a0a0a] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-white/10 transition-all group"
                            >
                                Reach Out
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <div className="relative flex items-center">
                                <span
                                    onClick={handleCopyEmail}
                                    className="text-[#9ca3af] hover:text-[#e5e5e5] text-sm font-medium tracking-wide cursor-pointer transition-colors duration-300"
                                >
                                    dandabhanu116@gmail.com
                                </span>
                                <AnimatePresence>
                                    {copied && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 bottom-full mb-2 flex items-center gap-1.5 px-3 py-1.5 bg-[#f5f5f5] text-[#0a0a0a] text-xs font-bold rounded-lg whitespace-nowrap shadow-lg"
                                        >
                                            <span className="text-green-600">✓</span> Email copied to clipboard
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-12 space-y-8">
                            <p className="text-[#9ca3af] text-sm font-semibold tracking-wider uppercase">
                                You can also find me on —
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3 }}
                                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#d4d4d4] text-sm font-medium hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300"
                                    >
                                        {social.icon}
                                        {social.label}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

