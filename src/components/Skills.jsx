import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Code, Wrench, Settings, Layers, Workflow, Server, Cpu, Cloud, GitBranch, Github, FileJson, Table, Terminal, Monitor, Sparkle } from 'lucide-react';

const skillCategories = [
    {
        title: 'Data Engineering',
        icon: <Workflow size={24} />,
        color: 'text-blue-500',
        skills: ['ETL Pipelines', 'Spark/PySpark', 'Airflow', 'Kafka', 'Docker', 'AWS/Azure'],
    },
    {
        title: 'Databases',
        icon: <Database size={24} />,
        color: 'text-emerald-500',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'MySQL', 'Elasticsearch'],
    },
    {
        title: 'Programming',
        icon: <Code size={24} />,
        color: 'text-amber-500',
        skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java', 'Scala'],
    },
    {
        title: 'Tools & Others',
        icon: <Wrench size={24} />,
        color: 'text-rose-500',
        skills: ['Git & GitHub', 'Jenkin', 'Grafana', 'PowerBI', 'Tableau', 'Prometheus'],
    },
];

const SkillCard = ({ category, idx }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card group hover:border-brand-primary/40 transition-all duration-500 p-8 flex flex-col items-start gap-6 h-full"
        >
            <div className={`p-4 rounded-2xl bg-surface-700/50 ${category.color} group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
            </div>

            <div className="space-y-4 w-full">
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">Expertise in building scalable systems and leveraging modern tools.</p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-surface-700/30 border border-surface-700/50 text-xs font-medium text-text-secondary group-hover:text-text-primary group-hover:border-brand-primary/20 transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                    <div className="flex items-center justify-center gap-2 text-brand-primary text-sm font-bold tracking-widest uppercase">
                        Skills
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">Comprehensive <span className="text-brand-primary italic">Tech Stack</span></h2>
                    <p className="text-lg text-text-secondary">
                        Mastering the intersection of data management, application development, and workflow automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <SkillCard key={cat.title} category={cat} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Skills;
