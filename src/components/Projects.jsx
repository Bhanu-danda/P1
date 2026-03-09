import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import weatherImg from "../assets/projects/weather-pipeline.png";
import foodDbImg from "../assets/projects/food-db.png";

const Projects = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const projectList = [
        {
            title: "End-to-End Weather Data Engineering Pipeline",
            description: "Built an automated data pipeline that ingests real-time weather data from external APIs and stores it in a cloud-based data lake on AWS S3. Implemented the Medallion Architecture (Raw → Silver → Gold) for structured data processing and transformation. Used Pandas for data cleaning and transformation, storing optimized datasets in Parquet format to generate analytics-ready datasets.",
            tech: ["Python", "Pandas", "AWS S3", "OpenWeather API", "Parquet", "Git"],
            link: "https://github.com/Bhanu-danda/weather-data-batch-processing",
            image: "/pipelineproject.png"
        },
        {
            title: "Food Delivery Relational Database System",
            description: "Designed a normalized PostgreSQL database schema for a food delivery platform. Implemented complex relational models including many-to-many relationships between orders and menu items while preserving historical pricing data through schema versioning. Focused on maintaining strong data integrity and efficient relational structure.",
            tech: ["PostgreSQL", "SQL", "Database Normalization", "Git"],
            link: "https://github.com/Bhanu-danda/Food-delivery-database-design",
            image: "/databaseproject.png"
        },
        {
            title: "Mutual Fund Performance & Investment Analytics",
            description: "Built an interactive Power BI dashboard to analyze mutual fund performance and support data-driven investment decisions. The dashboard compares funds across multiple return periods, analyzes expense ratios, and includes SIP and lumpsum investment calculators for investment planning.",
            tech: ["Power BI", "DAX", "Power Query", "Excel", "Data Visualization"],
            link: "https://github.com/Bhanu-danda/MutualFund-Performance-Insights",
            image: "/mutualfund-dashboard.png"
        }
    ];
    console.log(projectList.length);
    return (
        <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden" ref={sectionRef}>
            <div className="section-container max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-logo font-bold text-white tracking-tighter">
                        Projects
                    </h2>
                    <p className="text-lg font-sans text-[#9ca3af] mt-4 max-w-xl">
                        Things I've built and systems I've designed.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
                            whileHover={{ y: -6 }}
                            className="bg-[#111111] border border-[#262626] rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-500 flex flex-col group"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden w-full h-56 rounded-t-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow space-y-6">
                                <h3 className="text-2xl font-logo font-bold text-white tracking-tight leading-snug">
                                    {project.title}
                                </h3>

                                <p className="text-[#9ca3af] font-sans text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 rounded-full border border-[#262626] bg-[#0a0a0a] text-xs font-sans text-[#d4d4d4] group-hover:border-blue-500/30 transition-colors duration-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 mt-auto">
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 bg-[#f5f5f5] text-[#0a0a0a] px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-white/10 w-fit group/btn"
                                    >
                                        View Code
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

