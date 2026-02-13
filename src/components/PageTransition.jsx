// ===================================
// DevHub — Page Transition Wrapper
// Wraps each page in AnimatePresence-compatible
// motion.div for smooth route transitions.
// ===================================

import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
    },
    in: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
    out: {
        opacity: 0,
        y: -20,
        filter: "blur(4px)",
    },
};

const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.4,
};

/**
 * PageTransition wraps a page component to add
 * enter/exit animations for route changes.
 */
export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
}
