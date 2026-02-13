// ===================================
// DevHub — Footer Component
// Minimal footer with links and branding.
// ===================================

import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
    const { isDark } = useTheme();

    const footerLinks = [
        {
            title: "Platform",
            links: [
                { label: "Developers", path: "/developers" },
                { label: "Projects", path: "/projects" },
                { label: "Community", path: "/community" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Careers", path: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", path: "#" },
                { label: "API", path: "#" },
                { label: "Blog", path: "#" },
            ],
        },
    ];

    return (
        <footer
            className={`border-t mt-20 ${isDark
                ? "bg-surface-dark border-glass-border-dark"
                : "bg-surface-light-secondary border-glass-border-light"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">D</span>
                                </div>
                                <span className="font-bold text-xl">
                                    Dev<span className="gradient-text">Hub</span>
                                </span>
                            </div>
                            <p
                                className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}
                            >
                                Connect, build, and grow with the developer community.
                            </p>
                        </div>

                        {/* Link columns */}
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h4 className="font-semibold mb-3 text-sm">{group.title}</h4>
                                <ul className="space-y-2">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.path}
                                                className={`text-sm transition-colors ${isDark
                                                    ? "text-text-dark-muted hover:text-text-dark-primary"
                                                    : "text-text-light-muted hover:text-text-light-primary"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Bottom bar */}
                <div
                    className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? "border-glass-border-dark" : "border-glass-border-light"
                        }`}
                >
                    <p className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                        © 2026 DevHub. Built with ❤️ for developers by Ebnul Ahsan. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {["GitHub", "Twitter", "Discord"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className={`text-sm transition-colors ${isDark
                                    ? "text-text-dark-muted hover:text-primary-light"
                                    : "text-text-light-muted hover:text-primary"
                                    }`}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
