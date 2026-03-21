import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Server, Terminal, Settings2 } from 'lucide-react';

const skillCategories = [
    {
        title: 'Data Engineering',
        icon: <Settings2 size={22} className="text-blue-500" />,
        skills: [
            { name: 'Python', icon: '🐍' },
            { name: 'Apache Spark', icon: '⚡' },
            { name: 'Hadoop', icon: '🐘' },
            { name: 'Kafka', icon: '📨' },
            { name: 'Airflow', icon: '☁' }
        ],
    },
    {
        title: 'Data & Analytics',
        icon: <Database size={22} className="text-cyan-500" />,
        skills: [
            { name: 'SQL', icon: '📊' },
            { name: 'Excel', icon: '📗' },
            { name: 'Power BI', icon: '📉' },
            { name: 'Python', icon: '🐍' },
        ],
    },
    {
        title: 'Programming Languages',
        icon: <Server size={22} className="text-indigo-500" />,
        skills: [
            { name: 'C', icon: '💻' },
            { name: 'C++', icon: '🚀' },
            { name: 'SQL', icon: '🗄️' },
            { name: 'Python', icon: '🐍' }
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: <Terminal size={22} className="text-emerald-500" />,
        skills: [
            { name: 'Git', icon: '🌿' },
            { name: 'Power BI', icon: '📉' },
            { name: 'AWS', icon: '☁' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'PostgreSQL', icon: '🐘' }
        ],
    },
];

const SkillPill = ({ name, icon }) => (
    <motion.div
        whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)",
            borderColor: "rgba(6, 182, 212, 0.4)"
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#262626] bg-[#0a0a0a] text-sm font-sans text-[#d4d4d4] transition-all cursor-default group/pill"
    >
        <span className="group-hover/pill:brightness-125 transition-all">{icon}</span>
        <span>{name}</span>
    </motion.div>
);

const SkillCard = ({ title, icon, skills, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="p-8 md:p-10 rounded-3xl bg-[#111111] border border-[#262626] hover:border-[#3b82f6]/40 transition-all duration-500 group relative shadow-2xl"
        >
            {/* Soft Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-3xl transition-all duration-500 -z-10" />

            {/* Card Header */}
            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                    {icon}
                    <h3 className="text-xl md:text-2xl font-logo font-bold text-white tracking-tight">
                        {title}
                    </h3>
                </div>
                <div className="h-px w-full bg-[#2a2a2a]" />
            </div>

            {/* Skill Pills Grid */}
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="section-container max-w-7xl mx-auto px-6">

                {/* Section Title & Subtitle */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h2 className="text-5xl md:text-6xl font-logo font-bold text-[#e5e5e5] tracking-tighter">
                            Skills
                        </h2>
                        <p className="text-lg font-sans text-[#9ca3af] max-w-xl">
                            Technologies I use to build scalable systems.
                        </p>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    {skillCategories.map((cat, idx) => (
                        <SkillCard
                            key={cat.title}
                            title={cat.title}
                            icon={cat.icon}
                            skills={cat.skills}
                            index={idx}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default Skills;

