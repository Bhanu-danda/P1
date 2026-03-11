import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
    {
        id: 1,
        title: "Oracle Analytics Cloud 2025 Certified Professional",
        organization: "Oracle",
        date: "October 2025",
    },
    {
        id: 2,
        title: "A Guide to Machine Learning with Data Science",
        organization: "CipherSchools",
        date: "July 2025",
    },
    {
        id: 3,
        title: "Data Structures and Algorithms",
        organization: "Iamneo",
        date: "December 2024",
    }
];

const CertCard = ({ cert, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    const isLeft = index % 2 === 0;

    return (
        <div 
            ref={cardRef} 
            className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 group ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Desktop Spacing */}
            <div className="hidden md:block w-full md:w-[calc(50%-2.5rem)]" />

            {/* Timeline Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
            >
                <div className="w-4 h-4 rounded-full bg-[#111] border-2 border-brand-primary/50 group-hover:border-blue-400 group-hover:bg-blue-500 transition-all duration-500 relative shadow-[0_0_10px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-40 animate-ping" />
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1, ease: "easeOut" }}
                className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
            >
                <div className="w-full p-6 md:p-8 rounded-2xl bg-[#111111] border border-[#262626] shadow-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1.5 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group/card items-start text-left">
                    {/* Glow effect */}
                    <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover/card:from-blue-500/10 group-hover/card:to-cyan-500/5 rounded-2xl transition-all duration-500 -z-10" />
                    
                    <h3 className="text-xl md:text-2xl font-bold font-logo text-white mb-2 leading-tight">
                        {cert.title}
                    </h3>
                    <div className="text-sm md:text-[15px] font-sans text-gray-400 mb-4">
                        {cert.organization}
                    </div>
                    <div className="text-xs md:text-sm font-sans text-[#737373]">
                        {cert.date}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Certifications = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="pt-24 mt-20 border-t border-[#1a1a1a]" ref={sectionRef}>
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-logo font-bold text-white tracking-tighter"
                    >
                        Certifications
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 font-sans text-base md:text-lg"
                    >
                        Professional certifications and learning milestones.
                    </motion.p>
                </div>

                {/* Timeline Layout */}
                <div className="relative pt-6 pb-6">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 z-0 overflow-hidden">
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : {}}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 via-[#262626] to-transparent"
                        />
                    </div>

                    {/* Timeline Elements */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        {certifications.map((cert, index) => (
                            <CertCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
