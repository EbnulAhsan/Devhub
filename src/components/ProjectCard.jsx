// ===================================
// DevHub — Project Card Component
// Showcase card with tech badges, star
// count, and hover animations.
// ===================================

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * ProjectCard — Displays a project showcase card
 * with description, tech stack badges, and stats.
 */
export default function ProjectCard({ project, index = 0 }) {
    const { isDark } = useTheme();

    return (
        <motion.div
            className={`relative p-8 rounded-2xl border overflow-hidden group cursor-pointer transition-all duration-300 card-glow ${isDark
                ? "bg-surface-dark-secondary border-glass-border-dark hover:border-primary/40"
                : "bg-surface-light border-glass-border-light hover:border-primary/40 shadow-sm"
                }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
        >
            {/* Color accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                style={{ background: project.color }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    {/* Project icon circle */}
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                        style={{ background: project.color }}
                    >
                        {project.title.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <div className="flex items-center gap-2">
                            <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${isDark ? "bg-surface-dark-tertiary text-text-dark-secondary" : "bg-surface-light-tertiary text-text-light-secondary"
                                    }`}
                            >
                                {project.category}
                            </span>
                            <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${project.status === "Active"
                                    ? "bg-success/10 text-success"
                                    : "bg-warning/10 text-warning"
                                    }`}
                            >
                                {project.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p
                className={`text-sm mb-4 line-clamp-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                    }`}
            >
                {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${isDark
                            ? "bg-surface-dark-tertiary text-text-dark-secondary hover:text-text-dark-primary"
                            : "bg-surface-light-tertiary text-text-light-secondary hover:text-text-light-primary"
                            }`}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Footer stats */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                        ⭐ <span className="font-semibold">{project.stars.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        🍴 <span className="font-semibold">{project.forks}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        👤 <span className="font-semibold">{project.contributors}</span>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <img
                        src={project.authorAvatar}
                        alt={project.author}
                        className="w-6 h-6 rounded-full"
                    />
                    <span className={`text-xs ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                        @{project.author}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
