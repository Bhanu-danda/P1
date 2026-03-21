import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    // 3D Tilt Effect Setup
    const cardRef = useRef(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const rotateX = useTransform(springY, [0, 1], [8, -8]);
    const rotateY = useTransform(springX, [0, 1], [-8, 8]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

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
                        <div style={{ perspective: 1000 }} className="relative group w-full max-w-[400px]">
                            {/* Soft Gradient Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 blur-2xl rounded-[40px] opacity-50 pointer-events-none" />

                            <motion.div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 bg-surface-800 will-change-transform"
                            >
                                <img
                                    src="/profile.jpeg"
                                    alt="Bhanu Prasad"
                                    className="rounded-[30px] object-cover w-full h-full"
                                />
                                {/* Bottom vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                            </motion.div>
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
