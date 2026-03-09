import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { MousePointer2, ChevronDown, Download, ExternalLink, User } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text-content > *', {
                opacity: 0,
                x: -50,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });
            gsap.from('.hero-image-content', {
                opacity: 0,
                x: 50,
                duration: 1.2,
                ease: 'power3.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: About Info */}
                    <div className="hero-text-content space-y-8 order-2 lg:order-1 text-left">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-4"
                            >
                                <User size={14} />
                                Available for new opportunities
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Hey, I'm <br />
                                <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                                    BHANU PRASAD
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl font-medium text-text-primary/90">
                                Data Engineer & <span className="text-brand-primary italic">Full Stack Developer</span>
                            </h2>
                        </div>

                        <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                            I specialize in building scalable data pipelines and modern web applications.
                            With over 2 years of experience, I transform complex data into actionable insights
                            through robust engineering and creative development.
                        </p>

                        <div className="grid grid-cols-2 gap-6 py-4 border-y border-white/5">
                            <div className="space-y-1">
                                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Focus</div>
                                <div className="text-sm font-medium">Data Engineering</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Based In</div>
                                <div className="text-sm font-medium">India</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <a href="#projects" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
                                View Projects
                                <MousePointer2 size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                            <Link to="/resume" className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center">
                                <Download size={18} />
                                View Resume
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="hero-image-content relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-surface-700/50 group shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                alt="Bhanu Prasad"
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 z-20 glass-card p-6 border-brand-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="text-4xl font-bold text-brand-primary">2+</div>
                            <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">Years of<br />Experience</div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-brand-primary/20 rounded-full animate-spin-slow -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 blur-[80px] -z-20 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
