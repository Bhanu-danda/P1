import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AcademicJourney from './AcademicJourney';
import DecryptedText from './ui/DecryptedText';

const aboutParagraphs = [
    "I was born and brought up in Hyderabad, where I completed my early education at Dr. K.K.R Gowtham School.When I’m not working with data, you’ll usually find me watching cricket or movies to switch gears and reset.",
    "During my college years, I was introduced to data and quickly realized how powerful it is in shaping decisions and solving real-world problems. That moment shifted my focus toward data engineering and analytics.",
    "Since then, I’ve been building my skills in Python, SQL, Hadoop, and cloud tools like AWS along with visualization using Power BI. I’ve worked on projects such as an end-to-end weather data pipeline, where I explored data ingestion, processing, and analysis in a hands-on way.",
    "I enjoy turning raw, unstructured data into meaningful insights and systems that actually work in real scenarios (even if it takes a few late-night debugging sessions).",
    "My goal is to become a Data Engineer who builds scalable, efficient pipelines that solve real-world problems — and I’m actively working towards that every day."
];

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center" ref={sectionRef}>

                    {/* Centered About Content */}
                    <div className="w-full max-w-4xl space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center space-y-4 text-center"
                        >
                            <h2 className="text-5xl md:text-6xl font-logo font-bold text-[#e5e5e5] tracking-tighter">
                                <DecryptedText text="About Me" animateOn="view" speed={80} maxIterations={12} />
                            </h2>
                            <div className="h-1.5 w-20 bg-brand-primary rounded-full" />
                        </motion.div>

                        <div className="space-y-6 text-center md:text-center">
                            {aboutParagraphs.map((paragraph, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: index * 0.15 }}
                                >
                                    <p className="text-base md:text-lg font-sans text-[#a3a3a3] leading-relaxed">
                                        <DecryptedText
                                            text={paragraph}
                                            animateOn="view"
                                            speed={20}
                                            maxIterations={5}
                                            sequential={true}
                                        />
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Academic Journey Section */}
                <div className="mt-32">
                    <AcademicJourney />
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default About;
