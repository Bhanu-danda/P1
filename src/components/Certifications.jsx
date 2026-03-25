import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: "Oracle Analytics Cloud 2025 Certified Professional",
        organization: "Oracle",
        date: "October 2025",
        link: "/certificates/oracle.pdf"
    },
    {
        id: 2,
        title: "A Guide to Machine Learning with Data Science",
        organization: "CipherSchools",
        date: "July 2025",
        link: "/certificates/cipherschools.pdf"
    },
    {
        id: 3,
        title: "Introduction to Hardware and Operating Systems",
        organization: "IBM & Coursera",
        date: "2025",
        link: "/certificates/coursera-hardware-os.pdf"
    },
    {
        id: 4,
        title: "Social Networks",
        organization: "NPTEL",
        date: "2025",
        link: "/certificates/nptel-social-networks.pdf"
    },
    {
        id: 5,
        title: "Data Structures and Algorithms",
        organization: "Iamneo",
        date: "December 2024",
        link: "/certificates/dsa.pdf"
    }
];

// Double the certifications for seamless loop
const duplicatedCertifications = [...certifications, ...certifications];

const CertCard = ({ cert }) => {
    return (
        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[300px] md:w-[350px] p-6 rounded-2xl bg-[#0d0d0d] border border-[#1a1a1a] hover:border-blue-500/40 hover:bg-[#111111] transition-all duration-500 group/card flex flex-col items-start text-left cursor-pointer mr-6 shadow-2xl relative overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover/card:from-blue-500/5 group-hover/card:to-cyan-500/5 transition-all duration-500 -z-10" />

            <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 group-hover/card:bg-blue-500 group-hover/card:text-white transition-all duration-500 shadow-inner">
                    <Award size={20} />
                </div>
                <span className="text-[10px] md:text-xs font-sans text-gray-500 font-bold tracking-[0.2em] uppercase">{cert.organization}</span>
            </div>

            <h3 className="text-lg md:text-xl font-bold font-logo text-[#e5e5e5] mb-6 line-clamp-2 leading-tight h-12 group-hover/card:text-white transition-colors">
                {cert.title}
            </h3>

            <div className="flex items-center justify-between w-full mt-auto pt-5 border-t border-white/5">
                <div className="text-xs md:text-sm font-sans text-gray-500 font-medium">
                    {cert.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans text-blue-500 font-bold group-hover/card:text-blue-400 transition-colors uppercase tracking-wider">
                    Certificate
                    <ExternalLink size={14} className="group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300" />
                </div>
            </div>
        </a>
    );
};

const Certifications = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden" ref={sectionRef}>
            <div className="section-container max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                    {/* Left Side: Header Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/3 text-center lg:text-left space-y-6 lg:sticky lg:top-32 h-fit"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                            Achievements
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-logo font-bold text-white tracking-tighter leading-[1.1]">
                            Certifi<span className="text-blue-500">cations.</span>
                        </h2>
                        <p className="text-lg font-sans text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            A showcase of my professional growth, technical expertise, and continuous learning journey through industry-recognized milestones.
                        </p>

                        <div className="hidden lg:flex items-center gap-4 text-gray-600">
                            <div className="h-[1px] w-12 bg-gray-800" />
                            {/* <span className="text-xs font-sans uppercase tracking-widest font-semibold">Scroll to explore</span> */}
                        </div>
                    </motion.div>

                    {/* Right Side: Rotating Continuous Marquee */}
                    <div className="w-full lg:w-2/3 relative overflow-hidden py-10">
                        {/* Gradient Fades for Smooth Scroll Edge */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                        <motion.div
                            className="flex"
                            animate={{
                                x: [0, -1870], // (350px card + 24px margin) * 5 unique certificates
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30, // Adjust for speed
                                    ease: "linear",
                                },
                            }}
                            whileHover={{ animationPlayState: 'paused' }}
                        >
                            {duplicatedCertifications.map((cert, index) => (
                                <CertCard key={`${cert.id}-${index}`} cert={cert} />
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute -bottom-24 left-0 w-96 h-96 bg-cyan-600/5 blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
};

export default Certifications;

