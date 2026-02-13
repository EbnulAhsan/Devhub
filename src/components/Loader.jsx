// ===================================
// DevHub — Loader Component
// Animated loading spinner with gradient.
// ===================================

import { motion } from "framer-motion";

/**
 * Loader — Displays a spinning gradient loader.
 */
export default function Loader({ size = 40, className = "" }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <motion.div
                className="rounded-full gradient-bg"
                style={{
                    width: size,
                    height: size,
                    border: "3px solid transparent",
                    borderTopColor: "var(--color-primary)",
                    borderRightColor: "var(--color-accent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
