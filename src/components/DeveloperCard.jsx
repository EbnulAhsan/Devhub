// ===================================
// DevHub — Developer Card Component
// Profile card with hover glow, floating
// animation, and skill badges.
// ===================================

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Link } from "react-router-dom";

/**
 * DeveloperCard — Displays a developer profile card
 * with avatar, bio, skills, and stats.
 * Includes hover glow effect and floating animation.
 */
export default function DeveloperCard({ developer, index = 0 }) {
    const { isDark } = useTheme();

    return (
        <motion.div
            // Floating animation — each card has a staggered delay
            animate={{ y: [0, -8, 0] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
            }}
        >
            <Link to={`/profile/${developer.id}`}>
                <motion.div
                    className={`relative p-8 rounded-2xl border cursor-pointer transition-all duration-300 card-glow overflow-hidden group ${isDark
                        ? "bg-surface-dark-secondary border-glass-border-dark hover:border-primary/40"
                        : "bg-surface-light border-glass-border-light hover:border-primary/40 shadow-sm"
                        }`}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Top gradient accent — visible on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Avatar & Name */}
                    <div className="flex items-center gap-4 mb-4">
                        <motion.img
                            src={developer.avatar}
                            alt={developer.name}
                            className="w-14 h-14 rounded-full ring-2 ring-primary/20"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div>
                            <h3 className="font-bold text-lg">{developer.name}</h3>
                            <p className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                @{developer.username} · {developer.company}
                            </p>
                        </div>
                    </div>

                    {/* Bio */}
                    <p
                        className={`text-sm mb-4 line-clamp-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                            }`}
                    >
                        {developer.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {developer.skills.slice(0, 3).map((skill) => (
                            <span
                                key={skill}
                                className={`text-xs px-3 py-1 rounded-full font-medium ${isDark
                                    ? "bg-primary/10 text-primary-light"
                                    : "bg-primary/10 text-primary-dark"
                                    }`}
                            >
                                {skill}
                            </span>
                        ))}
                        {developer.skills.length > 3 && (
                            <span
                                className={`text-xs px-3 py-1 rounded-full ${isDark ? "text-text-dark-muted" : "text-text-light-muted"
                                    }`}
                            >
                                +{developer.skills.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                        <Stat icon="📦" value={developer.projects} label="Projects" isDark={isDark} />
                        <Stat icon="👥" value={developer.followers} label="Followers" isDark={isDark} />
                        <Stat icon="🔥" value={developer.contributions} label="Commits" isDark={isDark} />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

/** Small stat display */
function Stat({ icon, value, label, isDark }) {
    return (
        <div className="flex items-center gap-1.5">
            <span className="text-base">{icon}</span>
            <span className="font-semibold">{value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}</span>
            <span className={`hidden sm:inline ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                {label}
            </span>
        </div>
    );
}
