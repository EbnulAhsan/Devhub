// ===================================
// DevHub — Profile Page
// Mock developer profile with stats,
// skills, projects, and follow button.
// ===================================

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import developers from "../data/developers";
import projects from "../data/projects";

export default function ProfilePage() {
    const { isDark } = useTheme();
    const { id } = useParams();
    const [following, setFollowing] = useState(false);

    // Find developer by id, fallback to first
    const developer = developers.find((d) => d.id === Number(id)) || developers[0];

    // Mock projects for this developer
    const devProjects = projects.slice(0, 3);

    // Activity data for the contribution graph
    const activityData = Array.from({ length: 52 * 7 }, () =>
        Math.floor(Math.random() * 5)
    );

    return (
        <PageTransition>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Profile Header Card */}
                <ScrollReveal>
                    <div
                        className={`relative overflow-hidden rounded-3xl p-10 sm:p-12 border ${isDark
                            ? "bg-surface-dark-secondary border-glass-border-dark"
                            : "bg-surface-light border-glass-border-light shadow-sm"
                            }`}
                    >
                        {/* Top gradient strip */}
                        <div className="absolute top-0 left-0 right-0 h-40 gradient-bg opacity-20" />

                        <div className="relative flex flex-col sm:flex-row items-start gap-8">
                            {/* Avatar */}
                            <motion.img
                                src={developer.avatar}
                                alt={developer.name}
                                className="w-32 h-32 rounded-2xl ring-4 ring-primary/20"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            />

                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                    <div>
                                        <h1 className="text-4xl font-bold">{developer.name}</h1>
                                        <p className={`${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                            @{developer.username} · {developer.company}
                                        </p>
                                    </div>

                                    {/* Follow button */}
                                    <motion.button
                                        className={`px-8 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all ${following
                                            ? isDark
                                                ? "bg-surface-dark-tertiary text-text-dark-primary border border-glass-border-dark"
                                                : "bg-surface-light-tertiary text-text-light-primary border border-glass-border-light"
                                            : "gradient-bg text-white"
                                            }`}
                                        onClick={() => setFollowing(!following)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {following ? "✓ Following" : "Follow"}
                                    </motion.button>
                                </div>

                                <p
                                    className={`mb-6 max-w-2xl text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                        }`}
                                >
                                    {developer.bio}
                                </p>

                                {/* Meta info */}
                                <div className={`flex flex-wrap gap-6 text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                    <span>📍 {developer.location}</span>
                                    <span>🔗 {developer.website}</span>
                                    <span>📅 Joined {developer.joinDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                            {[
                                { label: "Projects", value: developer.projects, icon: "📦" },
                                { label: "Followers", value: developer.followers, icon: "👥" },
                                { label: "Following", value: developer.following, icon: "➡️" },
                                { label: "Contributions", value: developer.contributions, icon: "🔥" },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className={`text-center p-6 rounded-xl ${isDark ? "bg-surface-dark/50" : "bg-surface-light-secondary"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-2xl mb-1 block">{stat.icon}</span>
                                    <p className="text-3xl font-bold gradient-text">
                                        {stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}k` : stat.value}
                                    </p>
                                    <p className={`text-xs ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Skills */}
                <ScrollReveal delay={0.1}>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
                        <div className="flex flex-wrap gap-4">
                            {developer.skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium border ${isDark
                                        ? "bg-primary/10 text-primary-light border-primary/20"
                                        : "bg-primary/10 text-primary-dark border-primary/20"
                                        }`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Contribution Graph */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Contributions</h2>
                        <div
                            className={`p-8 rounded-2xl border overflow-x-auto ${isDark
                                ? "bg-surface-dark-secondary border-glass-border-dark"
                                : "bg-surface-light border-glass-border-light shadow-sm"
                                }`}
                        >
                            <div className="flex gap-[4px] min-w-[720px]">
                                {Array.from({ length: 52 }).map((_, weekIdx) => (
                                    <div key={weekIdx} className="flex flex-col gap-[4px]">
                                        {Array.from({ length: 7 }).map((_, dayIdx) => {
                                            const level = activityData[weekIdx * 7 + dayIdx];
                                            const colors = isDark
                                                ? ["bg-surface-dark-tertiary", "bg-primary/20", "bg-primary/40", "bg-primary/60", "bg-primary"]
                                                : ["bg-surface-light-tertiary", "bg-primary/20", "bg-primary/40", "bg-primary/60", "bg-primary"];
                                            return (
                                                <motion.div
                                                    key={dayIdx}
                                                    className={`w-3.5 h-3.5 rounded-sm ${colors[level]}`}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{
                                                        delay: 0.5 + weekIdx * 0.01 + dayIdx * 0.005,
                                                        type: "spring",
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Projects */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Projects</h2>
                            <Link to="/projects">
                                <Button variant="ghost" size="sm">
                                    View All →
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {devProjects.map((proj, i) => (
                                <ProjectCard key={proj.id} project={proj} index={i} />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </PageTransition>
    );
}
