import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-[120px] pb-20 overflow-hidden bg-surface-900"
        >
            <div className="section-container relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Large Text Intro (60%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-[60%] text-left"
                    >
                        <h1 className="font-logo font-bold leading-[0.9] tracking-tighter text-white">
                            <span className="block text-5xl md:text-7xl lg:text-[100px] xl:text-[120px] opacity-90">
                                Hey, I'm
                            </span>
                            <span className="block text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                                Bhanu Prasad.
                            </span>
                        </h1>
                    </motion.div>

                    {/* Right Column: Profile Image (40%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-[35%] flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Soft Gradient Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 blur-2xl rounded-[40px] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 bg-surface-800">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Bhanu Prasad"
                                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                                />
                                {/* Bottom vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Subtle background element */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
};

export default Hero;

