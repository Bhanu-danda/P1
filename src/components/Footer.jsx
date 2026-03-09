import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-8 md:py-10 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
            <div className="section-container relative flex flex-col md:flex-row items-center justify-center min-h-[80px]">

                {/* Center Element: Developer Easter Egg */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10"
                >
                    <motion.p
                        whileHover={{
                            color: "#fff",
                            textShadow: "0 0 15px rgba(255,255,255,0.3)"
                        }}
                        className="font-mono text-xs md:text-sm text-[#9ca3af] cursor-pointer transition-all duration-300 tracking-tight"
                    >
                        console.log(<span className="text-yellow-400">"Thanks for visiting my portfolio 👋"</span>)
                    </motion.p>
                </motion.div>

                {/* Right Side: Scroll To Top Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 md:mt-0 md:ml-auto relative z-20"
                >
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 0 25px rgba(255,255,255,0.1)",
                            borderColor: "rgba(255,255,255,0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="p-5 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white transition-all duration-500 group relative overflow-hidden"
                        title="Scroll to Top"
                    >
                        {/* Subtle Button Background Glow */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                        <ArrowUp size={22} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-500 ease-out" />
                    </motion.button>
                </motion.div>

            </div>

            {/* Background Spacing / Calmness */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
        </footer>
    );
};

export default Footer;

