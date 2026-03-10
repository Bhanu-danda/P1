import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Code2, BookOpen } from 'lucide-react';

const quickFacts = [
    { icon: <MapPin size={16} />, label: 'Location: India' },
    { icon: <GraduationCap size={16} />, label: 'Student (Graduating 2027)' },
    { icon: <Code2 size={16} />, label: 'Focus: Data Engineering' },
    { icon: <BookOpen size={16} />, label: 'Learning: Big Data & Analytics Systems' },
];

const infoCards = [
    {
        title: 'Interests',
        items: ['Data Engineering', 'System Design', 'Data Visualization', 'Financial Analytics'],
    },
    {
        title: 'Hobbies',
        items: ['Reading about technology', 'Exploring financial markets', 'Learning new tools', 'Building side projects'],
    },
    {
        title: 'Currently Learning',
        items: ['Apache Spark', 'Kafka', 'Airflow', 'Cloud Data Pipelines'],
    },
];

const InfoCard = ({ title, items, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{
                y: -6,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.08)",
            }}
            className="p-6 md:p-8 rounded-2xl bg-[#111111] border border-[#262626] hover:border-[#3b82f6]/30 transition-all duration-500 group relative"
        >
            {/* Soft Glow on Hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500 -z-10" />

            <h3 className="text-lg md:text-xl font-logo font-bold text-white tracking-tight mb-4">
                {title}
            </h3>
            <div className="h-px w-full bg-[#2a2a2a] mb-5" />
            <ul className="space-y-3">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-3 text-sm md:text-[15px] font-sans text-[#a3a3a3] group-hover:text-[#d4d4d4] transition-colors duration-300"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

                    {/* Left Column — Introduction Text */}
                    <motion.div
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[50%] space-y-8"
                    >
                        {/* Section Heading */}
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-logo font-bold text-[#e5e5e5] tracking-tighter">
                                About Me
                            </h2>
                        </div>

                        {/* Introduction Paragraphs */}
                        <div className="space-y-5">
                            <p className="text-base md:text-lg font-sans text-[#a3a3a3] leading-relaxed">
                                I'm Bhanu Prasad, an aspiring Data Engineer passionate about building scalable data
                                systems and transforming raw data into meaningful insights.
                            </p>
                            <p className="text-base md:text-lg font-sans text-[#a3a3a3] leading-relaxed">
                                I enjoy working with technologies such as Python, SQL, and cloud-based data platforms.
                                Currently I'm exploring big data tools and modern analytics systems.
                            </p>
                            <p className="text-base md:text-lg font-sans text-[#a3a3a3] leading-relaxed">
                                My goal is to design efficient data pipelines and help organizations make better
                                decisions through data.
                            </p>
                        </div>

                        {/* Quick Facts */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="pt-4"
                        >
                            <h3 className="text-sm font-logo font-bold text-[#737373] uppercase tracking-widest mb-5">
                                Quick Facts
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {quickFacts.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#262626] bg-[#111111] text-sm font-sans text-[#a3a3a3] hover:border-[#3b82f6]/30 hover:text-[#d4d4d4] transition-all duration-300"
                                    >
                                        <span className="text-brand-primary/80">{fact.icon}</span>
                                        {fact.label}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column — Info Cards */}
                    <div className="w-full lg:w-[50%] flex flex-col gap-6">
                        {infoCards.map((card, idx) => (
                            <InfoCard
                                key={card.title}
                                title={card.title}
                                items={card.items}
                                index={idx}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default About;
