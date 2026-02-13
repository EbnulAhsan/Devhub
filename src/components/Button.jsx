// ===================================
// DevHub — Reusable Button Component
// Animated button with variants and sizes.
// ===================================

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * Button — Reusable animated button component.
 *
 * @param {"primary" | "secondary" | "ghost"} variant
 * @param {"sm" | "md" | "lg"} size
 */
export default function Button({
    children,
    variant = "primary",
    size = "md",
    onClick,
    className = "",
    ...props
}) {
    const { isDark } = useTheme();

    // Base classes
    const base =
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none";

    // Size variants
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // Color variants
    const variants = {
        primary: "gradient-bg text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
        secondary: isDark
            ? "bg-surface-dark-secondary text-text-dark-primary border border-glass-border-dark hover:bg-surface-dark-tertiary"
            : "bg-surface-light-secondary text-text-light-primary border border-glass-border-light hover:bg-surface-light-tertiary",
        ghost: isDark
            ? "text-text-dark-secondary hover:text-text-dark-primary hover:bg-surface-dark-secondary"
            : "text-text-light-secondary hover:text-text-light-primary hover:bg-surface-light-secondary",
    };

    return (
        <motion.button
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
