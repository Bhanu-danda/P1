import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const contactOptions = [
        { icon: <Mail size={20} />, label: 'Email', value: 'bhanu.prasad@example.com', href: 'mailto:bhanu.prasad@example.com' },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/bhanu-prasad', href: 'https://linkedin.com' },
        { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/bhanu-prasad', href: 'https://github.com' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="section-container relative z-10 w-full lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-brand-primary text-sm font-bold tracking-widest uppercase">
                                <MessageSquare size={18} />
                                Get in Touch
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold italic leading-tight">Let's <span className="text-text-primary not-italic">Collaborate</span></h2>
                            <p className="text-lg text-text-secondary">
                                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactOptions.map((opt) => (
                                <a
                                    key={opt.label}
                                    href={opt.href}
                                    className="glass-card flex items-center gap-6 p-6 hover:border-brand-primary/40 transition-all duration-300 group"
                                >
                                    <div className="p-3 rounded-xl bg-surface-700/50 text-brand-primary group-hover:scale-110 transition-transform">
                                        {opt.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">{opt.label}</div>
                                        <div className="text-lg font-medium group-hover:text-brand-primary transition-colors">{opt.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Extra Info */}
                        <div className="hidden lg:flex flex-col gap-6 pt-10 text-text-secondary border-t border-surface-800">
                            <div className="flex items-center gap-4">
                                <MapPin size={18} className="text-brand-primary" />
                                <span>Hyderabad, India</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={18} className="text-brand-primary" />
                                <span>+91 12345 67890</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 relative overflow-hidden border-brand-primary/10"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -z-10" />

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Bhanu Prasad"
                                        className="w-full px-6 py-4 rounded-xl bg-surface-700/30 border border-surface-700/50 focus:border-brand-primary focus:bg-surface-700/50 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="bhanu@example.com"
                                        className="w-full px-6 py-4 rounded-xl bg-surface-700/30 border border-surface-700/50 focus:border-brand-primary focus:bg-surface-700/50 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Inquiry for Data Engineering"
                                    className="w-full px-6 py-4 rounded-xl bg-surface-700/30 border border-surface-700/50 focus:border-brand-primary focus:bg-surface-700/50 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Hey, I'd like to discuss a project..."
                                    className="w-full px-6 py-4 rounded-xl bg-surface-700/30 border border-surface-700/50 focus:border-brand-primary focus:bg-surface-700/50 transition-all outline-none resize-none"
                                />
                            </div>

                            <button className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>

                        <div className="mt-8 flex items-center gap-2 text-emerald-500/80 text-xs font-medium justify-center px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                            <CheckCircle size={14} />
                            Responses typically within 24 hours.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] -z-10 rounded-full" />
        </section>
    );
};

export default Contact;
