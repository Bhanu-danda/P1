import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Package } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
    {
        id: 1,
        name: 'Real-time Data Pipeline',
        description: 'A scalable ETL pipeline using Kafka and Spark for processing streaming events with sub-second latency.',
        tech: ['Spark', 'Kafka', 'Python', 'AWS'],
        category: 'Data',
        github: 'https://github.com',
        demo: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'E-commerce Analytics',
        description: 'Insightful dashboard and backend for analyzing massive e-commerce datasets using BigQuery.',
        tech: ['React', 'BigQuery', 'Node.js', 'GCP'],
        category: 'Full Stack',
        github: 'https://github.com',
        demo: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Health Monitoring System',
        description: 'IoT-based healthcare system for real-time patient status tracking with automated alerts.',
        tech: ['IoT', 'Redis', 'Python', 'Docker'],
        category: 'Full Stack',
        github: 'https://github.com',
        demo: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Distributed Database',
        description: 'A custom implementation of a distributed key-value store with eventual consistency.',
        tech: ['C++', 'gRPC', 'RocksDB'],
        category: 'Data',
        github: 'https://github.com',
        demo: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    },
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-card group overflow-hidden p-0 h-full border-surface-700/50 hover:border-brand-primary/30"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-surface-900 text-white flex items-center justify-center hover:bg-brand-primary transition-colors duration-300"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-surface-900 text-white flex items-center justify-center hover:bg-brand-primary transition-colors duration-300"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>

            <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{project.category}</span>
                    <div className="flex gap-2">
                        <Github size={16} className="text-text-secondary hover:text-white cursor-pointer" />
                        <ExternalLink size={16} className="text-text-secondary hover:text-white cursor-pointer" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors duration-300">{project.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-text-secondary uppercase tracking-tight">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Data', 'Full Stack'];

    const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <section id="projects" className="py-24 bg-surface-800/20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-brand-primary text-sm font-bold tracking-widest uppercase">
                            <Package size={16} />
                            Featured Work
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold italic">Building <span className="text-text-primary not-italic">Better</span></h2>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                        <Filter size={14} className="text-brand-primary mr-2" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border whitespace-nowrap",
                                    filter === cat
                                        ? "bg-brand-primary border-brand-primary text-white"
                                        : "border-surface-700 bg-surface-800/50 text-text-secondary hover:border-brand-primary/40"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((proj) => (
                            <ProjectCard key={proj.id} project={proj} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <a href="https://github.com" className="btn-secondary group inline-flex items-center gap-3">
                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                        Check more on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
