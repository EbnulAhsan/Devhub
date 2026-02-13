// ===================================
// DevHub — Home Page
// Hero with parallax, stats, featured devs,
// CTA section, and scroll-reveal animations.
// ===================================

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import DeveloperCard from "../components/DeveloperCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import developers from "../data/developers";
import projects from "../data/projects";

export default function HomePage() {
    const { isDark } = useTheme();
    const heroRef = useRef(null);

    // Parallax scroll transforms for the hero section
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    // Stats data
    const stats = [
        { label: "Developers", value: "12K+", icon: "👨‍💻" },
        { label: "Projects", value: "5.2K+", icon: "📦" },
        { label: "Contributions", value: "890K+", icon: "🔥" },
        { label: "Countries", value: "120+", icon: "🌍" },
    ];

    // Featured developers (first 4)
    const featuredDevs = developers.filter((d) => d.featured).slice(0, 4);
    const featuredProjects = projects.slice(0, 3);

    return (
        <PageTransition>
            {/* ===== HERO SECTION ===== */}
            <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center justify-center">
                {/* Animated background blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                            y: heroY,
                        }}
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15 blur-3xl"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent), var(--color-gradient-mid))",
                        }}
                        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
                        style={{
                            background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                        }}
                    />
                </div>

                {/* Hero content */}
                <motion.div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center text-center"
                    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                >
                    {/* Badge */}
                    <motion.div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${isDark
                            ? "bg-primary/10 text-primary-light border border-primary/20"
                            : "bg-primary/10 text-primary-dark border border-primary/20"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="animate-pulse">🚀</span>
                        The Developer Platform for the Future
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Where Developers{" "}
                        <span className="gradient-text">Build</span>,{" "}
                        <br className="hidden sm:block" />
                        <span className="gradient-text">Connect</span> &{" "}
                        <span className="gradient-text">Grow</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Join a thriving community of developers. Showcase your projects, connect with peers,
                        and accelerate your career.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Link to="/developers">
                            <Button size="lg">Explore Developers</Button>
                        </Link>
                        <Link to="/projects">
                            <Button variant="secondary" size="lg">
                                View Projects
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Floating tech icons */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        {["⚛️", "🦀", "🐍", "☕", "🔷", "🐹"].map((emoji, i) => (
                            <motion.span
                                key={i}
                                className="absolute text-2xl opacity-30"
                                style={{
                                    left: `${15 + i * 14}%`,
                                    top: `${20 + (i % 3) * 25}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className={`text-center p-8 rounded-2xl border ${isDark
                                        ? "bg-surface-dark-secondary border-glass-border-dark"
                                        : "bg-surface-light border-glass-border-light shadow-sm"
                                        }`}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="text-4xl mb-3 block">{stat.icon}</span>
                                    <p className="text-4xl font-black gradient-text mb-1">{stat.value}</p>
                                    <p
                                        className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"
                                            }`}
                                    >
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== FEATURED DEVELOPERS ===== */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                Featured <span className="gradient-text">Developers</span>
                            </h2>
                            <p
                                className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                    }`}
                            >
                                Meet the top contributors shaping the future of software.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {featuredDevs.map((dev, i) => (
                            <ScrollReveal key={dev.id} delay={i * 0.1}>
                                <DeveloperCard developer={dev} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="text-center mt-12">
                            <Link to="/developers">
                                <Button variant="secondary">View All Developers →</Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== FEATURED PROJECTS ===== */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                Trending <span className="gradient-text">Projects</span>
                            </h2>
                            <p
                                className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                    }`}
                            >
                                Discover open-source projects that are making waves.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredProjects.map((proj, i) => (
                            <ScrollReveal key={proj.id} delay={i * 0.1}>
                                <ProjectCard project={proj} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="text-center mt-12">
                            <Link to="/projects">
                                <Button variant="secondary">Explore All Projects →</Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 sm:p-16 text-center text-white">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                    Ready to Join the Community?
                                </h2>
                                <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                                    Start building your developer profile, share projects, and connect with
                                    thousands of developers worldwide.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link to="/community">
                                        <motion.button
                                            className="px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get Started Free
                                        </motion.button>
                                    </Link>
                                    <Link to="/about">
                                        <motion.button
                                            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg hover:bg-white/10 cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
