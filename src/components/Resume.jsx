import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronLeft, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-surface-900">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] -z-10 rounded-full" />

            <div className="section-container relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all duration-300"
                        >
                            <ChevronLeft size={16} />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold font-logo italic leading-tight">
                            My <span className="text-text-primary not-italic">Resume</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-xl font-sans">
                            Detailed overview of my professional experience, skills, and academic background.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        href="/resume.pdf"
                        download="Bhanu_Prasad_Resume.pdf"
                        className="bg-black text-white px-10 py-5 rounded-full text-sm font-bold font-sans flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl hover:shadow-black/20 group"
                    >
                        <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        Download Portfolio PDF
                    </motion.a>
                </div>

                {/* PDF Viewer / Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-2 md:p-4 border-white/10 bg-surface-800/20 backdrop-blur-3xl shadow-2xl relative"
                >
                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>

                    <div className="rounded-xl overflow-hidden bg-white/5 w-full h-[600px] md:h-[1000px] shadow-inner">
                        <iframe
                            src="/resume.pdf#view=FitH"
                            className="w-full h-full border-none rounded-xl"
                            title="Bhanu Prasad Resume"
                        />
                    </div>
                </motion.div>

                {/* Mobile Helper Message */}
                <div className="mt-8 text-center md:hidden">
                    <p className="text-sm text-text-secondary italic">
                        Viewing experience is better on desktop. Use the download button above to save a copy.
                    </p>
                </div>

                {/* Footer Download CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/5 text-center space-y-8"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary">
                            <FileText size={40} />
                        </div>
                        <h3 className="text-2xl font-bold font-logo">Looking for a PDF copy?</h3>
                        <p className="text-text-secondary max-w-md mx-auto font-sans font-medium">
                            If the preview above doesn't load, you can directly download the file or view it in a new tab.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/resume.pdf"
                            download="Bhanu_Prasad_Resume.pdf"
                            className="bg-brand-primary text-white px-10 py-5 rounded-full text-sm font-bold font-sans flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto justify-center"
                        >
                            <Download size={20} />
                            Download Now
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full text-sm font-bold font-sans flex items-center gap-3 hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
                        >
                            <ExternalLink size={20} />
                            Open in New Tab
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
