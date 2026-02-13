// ===================================
// DevHub — Search Bar Component
// Animated search input for filtering.
// ===================================

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * SearchBar — Animated filter/search input.
 *
 * @param {string} value - controlled input value
 * @param {Function} onChange - handler for input changes
 * @param {string} placeholder - placeholder text
 */
export default function SearchBar({
    value,
    onChange,
    placeholder = "Search developers...",
    className = "",
}) {
    const { isDark } = useTheme();

    return (
        <motion.div
            className={`relative w-full max-w-md ${className}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Search icon */}
            <svg
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-text-dark-muted" : "text-text-light-muted"
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all duration-300 ${isDark
                        ? "bg-surface-dark-secondary border-glass-border-dark text-text-dark-primary placeholder-text-dark-muted focus:border-primary focus:ring-1 focus:ring-primary/30"
                        : "bg-surface-light border-glass-border-light text-text-light-primary placeholder-text-light-muted focus:border-primary focus:ring-1 focus:ring-primary/30"
                    }`}
            />
        </motion.div>
    );
}
