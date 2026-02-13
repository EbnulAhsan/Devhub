// ===================================
// DevHub — ScrollReveal Component
// Uses Intersection Observer + Framer Motion
// to animate children when they scroll into view.
// ===================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * ScrollReveal wraps children in a motion.div that
 * fades and slides up when entering the viewport.
 *
 * @param {string} direction - "up" | "down" | "left" | "right"
 * @param {number} delay - animation delay in seconds
 * @param {number} duration - animation duration in seconds
 * @param {string} className - optional CSS classes
 */
export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    // Starting offset based on direction
    const directionMap = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    const offset = directionMap[direction] || directionMap.up;

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
            }}
        >
            {children}
        </motion.div>
    );
}
