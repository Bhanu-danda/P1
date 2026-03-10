import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const educationData = [
    {
        id: 'University',
        title: 'University',
        borderColor: 'border-orange-500',
        bgColor: 'bg-orange-500',
        textColor: 'text-orange-500',
        dotColor: 'bg-orange-500',
        glowColor: 'shadow-orange-500/20',
        institution: 'Lovely Professional University',
        degree: 'B.Tech – Computer Science and Engineering',
        score: 'CGPA: 8.31',
        location: 'Punjab, India',
        date: 'August 2023 – Present',
    },
    {
        id: 'Intermediate',
        title: 'Intermediate',
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-500',
        dotColor: 'bg-blue-500',
        glowColor: 'shadow-blue-500/20',
        institution: 'Narayana Junior College',
        degree: 'Intermediate (PCM)',
        score: 'Percentage: 96%',
        location: 'Hyderabad, India',
        date: 'April 2021 – March 2023',
    },
    {
        id: 'School',
        title: 'School',
        borderColor: 'border-purple-500',
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-500',
        dotColor: 'bg-purple-500',
        glowColor: 'shadow-purple-500/20',
        institution: 'Dr. KKR’s Gowtham School',
        degree: 'Matriculation',
        score: 'Percentage: 78.8%',
        location: 'Hyderabad, India',
        date: 'June 2020 – March 2021',
    }
];

const TimelineItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 pb-10 border-l border-[#262626] last:border-0 last:pb-0 group"
        >
            {/* Timeline Dot */}
            <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${item.dotColor}`}>
                <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${item.dotColor}`} />
            </div>

            <div className="flex flex-col gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xs md:text-sm font-sans text-gray-500">{item.date}</span>
                <h4 className="text-lg md:text-xl font-bold text-[#e5e5e5]">{item.institution}</h4>
                <span className={`text-sm md:text-md font-medium ${item.textColor}`}>{item.degree}</span>
                <div className="flex items-center gap-3 mt-1 text-xs md:text-sm text-gray-500">
                    <span className="px-2 py-0.5 rounded-full bg-[#1a1a1a] border border-[#333]">{item.score}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{item.location}</span>
                </div>
            </div>
        </motion.div>
    );
};

const AcademicJourney = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isRootExpanded, setIsRootExpanded] = useState(false);
    const [expandedNode, setExpandedNode] = useState(null);

    const handleNodeClick = (nodeId) => {
        if (expandedNode === nodeId) {
            setExpandedNode(null);
        } else {
            setExpandedNode(nodeId);
        }
    };

    return (
        <div className="pt-24 mt-20 border-t border-[#1a1a1a]" ref={sectionRef}>
            <div className="space-y-4 mb-16 text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-logo font-bold text-[#e5e5e5] tracking-tighter"
                >
                    Academic Journey
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 font-sans"
                >
                    Visualizing my educational path and foundation.
                </motion.p>
            </div>

            <div className="flex flex-col xl:flex-row gap-16 xl:gap-8">

                {/* Left Side — Education Timeline */}
                <div className="w-full xl:w-[45%] flex flex-col pt-4">
                    {educationData.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* Right Side — Interactive Tree */}
                <div className="w-full xl:w-[55%] flex flex-col items-center min-h-[500px] mt-8 xl:mt-0 relative perspective-1000">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm text-gray-400 mb-8 italic bg-[#111] px-4 py-2 rounded-full border border-[#262]"
                    >
                        Tip: Click a node to explore the academic journey.
                    </motion.div>

                    {/* Root Node: Bhanu Prasad */}
                    <motion.div
                        onClick={() => setIsRootExpanded(!isRootExpanded)}
                        className={`relative z-20 px-6 py-3.5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] cursor-pointer hover:border-brand-primary/50 transition-all duration-300 shadow-xl group ${isRootExpanded ? 'border-brand-primary/40 shadow-brand-primary/10' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        layout
                    >
                        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm group-hover:opacity-100 opacity-50 transition-opacity" />
                        <h3 className="text-xl font-bold text-white relative z-10 flex items-center gap-3 font-logo tracking-tight">
                            Bhanu Prasad
                            <motion.div animate={{ rotate: isRootExpanded ? 180 : 0 }} className="bg-white/10 rounded-full p-1">
                                <ChevronDown size={16} className="text-gray-300" />
                            </motion.div>
                        </h3>
                    </motion.div>

                    {/* Tree Expansion */}
                    <AnimatePresence>
                        {isRootExpanded && (
                            <motion.div
                                className="flex flex-col items-center w-full"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {/* Vertical line from root */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 40, opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-[2px] bg-gradient-to-b from-[#333] to-[#444]"
                                />

                                {/* 3 Nodes Container */}
                                <div className="grid grid-cols-3 w-full max-w-[600px] relative">
                                    {/* Horizontal Connector Line for the forks */}
                                    <motion.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={{ scaleX: 1, opacity: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="absolute top-0 left-[16.66%] right-[16.66%] h-[2px] bg-[#444] origin-center"
                                    />

                                    {educationData.map((node, i) => (
                                        <div key={node.id} className="flex flex-col items-center relative gap-0 pt-0">
                                            {/* Vertical connection from horizontal line down to the node */}
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 24, opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                                                className="w-[2px] h-6 bg-[#444]"
                                            />

                                            {/* Category Node */}
                                            <motion.div
                                                onClick={() => handleNodeClick(node.id)}
                                                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                                transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                                                layout
                                                className={`px-3 md:px-5 py-2.5 rounded-lg border cursor-pointer transition-all duration-300 bg-[#111] relative group z-10 
                                                    ${expandedNode === node.id ? `${node.borderColor} shadow-lg ${node.glowColor}` : 'border-[#333] hover:border-[#555]'}`}
                                                whileHover={{ y: -2 }}
                                            >
                                                <div className="absolute -inset-px rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
                                                <h4 className={`font-semibold text-[13px] md:text-sm transition-colors ${expandedNode === node.id ? node.textColor : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                    {node.title}
                                                </h4>
                                            </motion.div>

                                            {/* Details Node */}
                                            <AnimatePresence>
                                                {expandedNode === node.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                        className="mt-4 overflow-hidden w-[180px] sm:w-[220px] md:w-[240px] absolute top-[80px]"
                                                    >
                                                        <div className="flex flex-col items-center relative">
                                                            {/* Connection to Details */}
                                                            <div className="w-[1px] h-6 bg-[#333] absolute -top-4" />

                                                            <div className={`p-4 md:p-5 rounded-xl bg-[#0a0a0a] border border-[#222] w-full shadow-2xl relative z-20 group hover:border-[#333] transition-colors ${node.glowColor}`}>
                                                                <div className={`absolute top-0 left-0 w-full h-1 ${node.bgColor} rounded-t-xl`} />
                                                                <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff05] to-transparent pointer-events-none rounded-xl" />

                                                                <h5 className="font-bold text-[#e5e5e5] text-[13px] md:text-sm leading-tight mb-2 min-h-[2.5rem] flex items-center">
                                                                    {node.institution}
                                                                </h5>
                                                                <p className="text-[11px] md:text-xs text-gray-400 mb-4 line-clamp-2">
                                                                    {node.degree}
                                                                </p>
                                                                <div className="flex flex-col gap-2 pt-3 border-t border-[#1a1a1a]">
                                                                    <div className={`text-xs font-bold px-2 py-1 rounded bg-[#111] inline-block w-fit ${node.textColor}`}>
                                                                        {node.score}
                                                                    </div>
                                                                    <div className="text-[11px] text-gray-500 font-medium">
                                                                        {node.location}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AcademicJourney;
