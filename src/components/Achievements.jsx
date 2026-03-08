import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, GraduationCap, Star, Zap } from 'lucide-react';

const achievements = [
    {
        year: '2024',
        title: 'Top 1% React Developer',
        description: 'Awarded by leading professional assessment platform for excellence in frontend architecture.',
        icon: <Trophy size={20} className="text-yellow-500" />,
    },
    {
        year: '2023',
        title: 'AWS Certified Solutions Architect',
        description: 'Specialization in architecting highly available, cost-effective, and fault-tolerant systems on AWS.',
        icon: <GraduationCap size={20} className="text-blue-500" />,
    },
    {
        year: '2022',
        title: 'Hackathon Champion',
        description: 'Won the regional 48-hour hackathon by developing an automated disaster relief logistics platform.',
        icon: <Zap size={20} className="text-amber-500" />,
    },
    {
        year: '2021',
        title: 'Open Source Contributor',
        description: 'Maintained and contributed to high-impact data processing libraries with over 5k GitHub stars.',
        icon: <Star size={20} className="text-emerald-500" />,
    },
];

const AchievementItem = ({ achievement, idx }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
        >
            <div className="flex-1 w-full">
                <div className={`glass-card p-8 border-brand-primary/10 hover:border-brand-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--color-brand-primary),0.1)] group relative h-full ${idx % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                    <div className={`absolute top-4 ${idx % 2 === 0 ? 'right-4' : 'left-4'} p-3 rounded-full bg-surface-700/50 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500`}>
                        {achievement.icon}
                    </div>

                    <span className="text-4xl font-black bg-gradient-to-r from-brand-primary/30 to-brand-primary/5 bg-clip-text text-transparent opacity-50 mb-4 block leading-none">
                        {achievement.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                    <p className="text-text-secondary leading-relaxed font-sans">{achievement.description}</p>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-primary border-4 border-surface-900 z-10 shadow-[0_0_20px_rgba(var(--color-brand-primary),0.5)]" />
                {idx < achievements.length - 1 && (
                    <div className="w-[2px] h-32 absolute top-12 bg-gradient-to-b from-brand-primary to-transparent" />
                )}
            </div>

            <div className="hidden md:block flex-1" />
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative">
            <div className="section-container relative z-10">
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                    <div className="flex items-center justify-center gap-2 text-brand-primary text-sm font-bold tracking-widest uppercase">
                        <Award size={18} />
                        Recognition
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold italic underline decoration-brand-primary/30 underline-offset-8">Milestones & <span className="text-text-primary not-italic">Success</span></h2>
                    <p className="text-lg text-text-secondary">
                        A journey of continuous learning, excellence, and significant impact in the tech community.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-8 relative max-w-5xl mx-auto">
                    {achievements.map((ach, idx) => (
                        <AchievementItem key={ach.title} achievement={ach} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] -z-10 rounded-full" />
        </section>
    );
};

export default Achievements;
