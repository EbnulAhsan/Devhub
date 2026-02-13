// ===================================
// DevHub — About Page
// Mission, team, and technology stack.
// ===================================

import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
    const { isDark } = useTheme();

    const values = [
        {
            icon: "🌐",
            title: "Open Source First",
            description: "We believe in transparency and community-driven development. Every tool we build is open for everyone.",
        },
        {
            icon: "🤝",
            title: "Community Driven",
            description: "Built by developers, for developers. Your feedback shapes the platform's future.",
        },
        {
            icon: "🚀",
            title: "Innovation Forward",
            description: "We embrace cutting-edge technology and push the boundaries of what's possible.",
        },
        {
            icon: "🛡️",
            title: "Privacy Focused",
            description: "Your data is yours. We prioritize privacy and security in everything we build.",
        },
    ];

    const techStack = [
        { name: "React", icon: "⚛️", description: "Frontend framework" },
        { name: "Vite", icon: "⚡", description: "Build tool" },
        { name: "Framer Motion", icon: "🎬", description: "Animations" },
        { name: "Tailwind CSS", icon: "🎨", description: "Styling" },
        { name: "React Router", icon: "🧭", description: "Navigation" },
        { name: "Vercel", icon: "▲", description: "Deployment" },
    ];

    const team = [
        { name: "Alex Rivera", role: "Founder & CEO", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=6366f1" },
        { name: "Maya Zhang", role: "CTO", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=8b5cf6" },
        { name: "Jordan Ellis", role: "Head of Design", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=06b6d4" },
        { name: "Sam Turner", role: "Lead Engineer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam&backgroundColor=10b981" },
    ];

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            About <span className="gradient-text">DevHub</span>
                        </h1>
                        <p
                            className={`max-w-2xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                }`}
                        >
                            We're on a mission to build the most vibrant developer community on the planet.
                            A place where every developer can connect, learn, and grow together.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Mission banner */}
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 sm:p-20 text-white text-center mb-20">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                        <div className="relative z-10">
                            <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70">Our Mission</p>
                            <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-3xl mx-auto">
                                "Empowering developers to build the future, together."
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Values */}
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our <span className="gradient-text">Values</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {values.map((value, i) => (
                        <ScrollReveal key={value.title} delay={i * 0.1}>
                            <motion.div
                                className={`p-8 rounded-2xl border text-center h-full ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                                whileHover={{ scale: 1.03, y: -4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-4xl mb-4 block">{value.icon}</span>
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className={`text-sm ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"}`}>
                                    {value.description}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Team */}
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Meet the <span className="gradient-text">Team</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
                    {team.map((member, i) => (
                        <ScrollReveal key={member.name} delay={i * 0.1}>
                            <motion.div
                                className={`p-8 rounded-2xl border text-center ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-6 ring-4 ring-primary/20"
                                    whileHover={{ rotate: 5 }}
                                />
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                    {member.role}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Tech Stack */}
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Built With <span className="gradient-text">Modern Tech</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techStack.map((tech, i) => (
                        <ScrollReveal key={tech.name} delay={i * 0.05}>
                            <motion.div
                                className={`p-6 rounded-xl border text-center ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                                whileHover={{ scale: 1.08, y: -4 }}
                            >
                                <span className="text-3xl block mb-3">{tech.icon}</span>
                                <p className="font-semibold text-sm">{tech.name}</p>
                                <p className={`text-xs mt-1 ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                    {tech.description}
                                </p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
