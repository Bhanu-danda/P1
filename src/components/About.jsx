import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import AcademicJourney from './AcademicJourney';
import DecryptedText from './ui/DecryptedText';

const aboutParagraphs = [
    "I was born and brought up in Hyderabad, where I completed my early education at Dr. K.K.R Gowtham School.When I’m not working with data, you’ll usually find me watching cricket or movies to switch gears and reset.",
    "During my college years, I was introduced to data and quickly realized how powerful it is in shaping decisions and solving real-world problems. That moment shifted my focus toward data engineering and analytics.",
    "Since then, I’ve been building my skills in Python, SQL, Hadoop, and cloud tools like AWS along with visualization using Power BI. I’ve worked on projects such as an end-to-end weather data pipeline, where I explored data ingestion, processing, and analysis in a hands-on way.",
    "I enjoy turning raw, unstructured data into meaningful insights and systems that actually work in real scenarios (even if it takes a few late-night debugging sessions).",
    "My goal is to become a Data Engineer who builds scalable, efficient pipelines that solve real-world problems — and I’m actively working towards that every day."
];

// Add your photo filenames here after placing them in the public folder.
// Example: "/my-photo-1.jpg", "/my-photo-2.png"
const personalPhotos = [
    "/profile1.jpeg",
    "/profile2.jpeg"
];

const RotatingPhotoDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);

    // 3D Tilt Effect Setup
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % personalPhotos.length);
        }, 3500); // Rotates every 3.5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ perspective: 1000 }} className="relative w-full aspect-[4/5] z-10">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-[#262626] group transition-colors duration-500 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] shadow-2xl"
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={personalPhotos[currentIndex]}
                        alt={`Bhanu Prasad - ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out origin-center"
                    />
                </AnimatePresence>

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Soft Glow Matching Orange Accent */}
                <div className="absolute -inset-px bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
        </div>
    );
};

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Column — About Content */}
                    <div className="w-full lg:w-[60%] space-y-12" ref={sectionRef}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h2 className="text-5xl md:text-6xl font-logo font-bold text-[#e5e5e5] tracking-tighter">
                                <DecryptedText text="About Me" animateOn="view" speed={80} maxIterations={12} />
                            </h2>
                            <div className="h-1.5 w-20 bg-brand-primary rounded-full" />
                        </motion.div>

                        <div className="space-y-6">
                            {aboutParagraphs.map((paragraph, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: index * 0.15 }}
                                >
                                    <p className="text-base md:text-lg font-sans text-[#a3a3a3] leading-relaxed">
                                        <DecryptedText 
                                            text={paragraph} 
                                            animateOn="view" 
                                            speed={20} 
                                            maxIterations={5} 
                                            sequential={true} 
                                        />
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Rotating Photo Display */}
                    <div className="w-full lg:w-[40%] flex justify-center sticky top-32">
                        <div className="w-full max-w-[400px]">
                            <RotatingPhotoDisplay />
                        </div>
                    </div>
                </div>

                {/* Academic Journey Section */}
                <div className="mt-32">
                    <AcademicJourney />
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default About;
