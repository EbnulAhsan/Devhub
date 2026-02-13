

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// Navigation links configuration
const navLinks = [
    { path: "/", label: "Home" },
    { path: "/developers", label: "Developers" },
    { path: "/projects", label: "Projects" },
    { path: "/community", label: "Community" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
];

/**
 * Navbar — Fixed glassmorphic navigation bar.
 * Features:
 * - Animated active link indicator (layout animation)
 * - Theme toggle button
 * - Responsive mobile hamburger menu
 * - Scroll-aware background blur
 */
export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Listen for scroll to add background blur
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? isDark
                    ? "glass-dark shadow-lg shadow-black/10"
                    : "glass-light shadow-lg shadow-black/5"
                : "bg-transparent"
                }`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div
                            className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-white font-bold text-sm">D</span>
                        </motion.div>
                        <span className="font-bold text-xl">
                            Dev<span className="gradient-text">Hub</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? isDark
                                            ? "text-text-dark-primary"
                                            : "text-text-light-primary"
                                        : isDark
                                            ? "text-text-dark-muted hover:text-text-dark-primary"
                                            : "text-text-light-muted hover:text-text-light-primary"
                                        }`}
                                >
                                    {link.label}
                                    {/* Animated underline indicator */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute bottom-0 left-2 right-2 h-0.5 gradient-bg rounded-full"
                                            layoutId="navbar-indicator"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right side: theme toggle + mobile menu */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg cursor-pointer transition-colors ${isDark
                                ? "hover:bg-surface-dark-secondary text-text-dark-secondary"
                                : "hover:bg-surface-light-tertiary text-text-light-secondary"
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            aria-label="Toggle theme"
                        >
                            <motion.span
                                className="text-xl block"
                                key={isDark ? "moon" : "sun"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? "🌙" : "☀️"}
                            </motion.span>
                        </motion.button>

                        {/* Mobile hamburger */}
                        <motion.button
                            className={`md:hidden p-2 rounded-lg cursor-pointer ${isDark ? "hover:bg-surface-dark-secondary" : "hover:bg-surface-light-tertiary"
                                }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <motion.span
                                    className={`block h-0.5 rounded-full ${isDark ? "bg-text-dark-primary" : "bg-text-light-primary"}`}
                                    animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                />
                                <motion.span
                                    className={`block h-0.5 rounded-full ${isDark ? "bg-text-dark-primary" : "bg-text-light-primary"}`}
                                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                />
                                <motion.span
                                    className={`block h-0.5 rounded-full ${isDark ? "bg-text-dark-primary" : "bg-text-light-primary"}`}
                                    animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={`md:hidden border-t ${isDark
                            ? "glass-dark border-glass-border-dark"
                            : "glass-light border-glass-border-light"
                            }`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                                ? "gradient-bg text-white"
                                                : isDark
                                                    ? "text-text-dark-secondary hover:bg-surface-dark-secondary"
                                                    : "text-text-light-secondary hover:bg-surface-light-tertiary"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
