import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    id: "University",
    title: "University",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500",
    textColor: "text-orange-500",
    dotColor: "bg-orange-500",
    glowColor: "shadow-orange-500/20",
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science and Engineering",
    score: "CGPA: 8.31",
    location: "Punjab, India",
    date: "August 2023 – Present",
  },
  {
    id: "Intermediate",
    title: "Intermediate",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500",
    textColor: "text-blue-500",
    dotColor: "bg-blue-500",
    glowColor: "shadow-blue-500/20",
    institution: "Narayana Junior College",
    degree: "Intermediate (PCM)",
    score: "Percentage: 96%",
    location: "Hyderabad, India",
    date: "April 2021 – March 2023",
  },
  {
    id: "School",
    title: "School",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500",
    textColor: "text-purple-500",
    dotColor: "bg-purple-500",
    glowColor: "shadow-purple-500/20",
    institution: "Dr. KKR’s Gowtham School",
    degree: "Matriculation",
    score: "Percentage: 78.8%",
    location: "Hyderabad, India",
    date: "June 2020 – March 2021",
  },
];

const TimelineCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 group ${isLeft ? "md:flex-row-reverse" : ""}`}
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
        <div
          className={`w-4 h-4 rounded-full bg-[#111] border-2 group-hover:scale-125 transition-all duration-500 relative ${item.borderColor} ${item.glowColor}`}
        >
          {/* Pulse Animation */}
          <div
            className={`absolute inset-0 rounded-full opacity-40 animate-ping ${item.bgColor}`}
          />
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.1,
          ease: "easeOut",
        }}
        className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 flex ${isLeft ? "md:justify-end" : "md:justify-start"}`}
      >
        <div
          className={`w-full p-6 md:p-8 rounded-2xl bg-[#111111] border border-[#262626] shadow-sm hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group/card items-start text-left hover:border-gray-500/50 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]`}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`text-xs md:text-sm font-sans font-semibold tracking-wider uppercase ${item.textColor}`}
            >
              {item.title}
            </span>
            <h4 className="text-xl md:text-2xl font-bold font-logo text-white mt-1 mb-2 leading-tight">
              {item.institution}
            </h4>
            <span className="text-sm md:text-[15px] font-sans text-gray-400 mb-2">
              {item.degree}
            </span>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-xs md:text-sm text-gray-300 font-medium">
                {item.score}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full mt-6 pt-4 border-t border-[#1a1a1a]">
              <span className="text-xs md:text-sm text-gray-500">
                {item.date}
              </span>
              <span className="text-xs md:text-sm text-gray-500">
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AcademicJourney = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 mt-20 border-t border-[#1a1a1a]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-logo font-bold text-[#e5e5e5] tracking-tighter"
          >
            Academic Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-sans text-[#9ca3af] max-w-xl mx-auto"
          >
            Visualizing my educational path and foundation.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pt-6 pb-6">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 z-0 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-orange-500 via-[#262626] to-transparent"
            />
          </div>

          {/* Timeline Elements */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {educationData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicJourney;
