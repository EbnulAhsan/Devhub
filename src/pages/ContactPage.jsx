// ===================================
// DevHub — Contact Page
// Contact form (UI only), social links,
// and location info.
// ===================================

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";

export default function ContactPage() {
    const { isDark } = useTheme();
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    // Handle form submission (UI only — no actual send)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: "📧", label: "Email", value: "hello@devhub.io" },
        { icon: "📍", label: "Location", value: "San Francisco, CA" },
        { icon: "💬", label: "Discord", value: "discord.gg/devhub" },
        { icon: "🐦", label: "Twitter", value: "@devhub" },
    ];

    const inputClasses = `w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 ${isDark
        ? "bg-surface-dark-secondary border-glass-border-dark text-text-dark-primary placeholder-text-dark-muted focus:border-primary focus:ring-1 focus:ring-primary/30"
        : "bg-surface-light border-glass-border-light text-text-light-primary placeholder-text-light-muted focus:border-primary focus:ring-1 focus:ring-primary/30"
        }`;

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p
                            className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                }`}
                        >
                            Have a question, feedback, or want to collaborate? We'd love to hear from you.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <ScrollReveal>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className={`block text-sm font-medium mb-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                            }`}
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className={`block text-sm font-medium mb-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                            }`}
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className={`block text-sm font-medium mb-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                        }`}
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className={inputClasses}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className={`block text-sm font-medium mb-2 ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                        }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more..."
                                    rows={6}
                                    className={`${inputClasses} resize-none`}
                                    required
                                />
                            </div>

                            {/* Submit */}
                            {submitted ? (
                                <motion.div
                                    className="flex items-center gap-2 text-success font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✅ Message sent! We'll get back to you soon.
                                </motion.div>
                            ) : (
                                <Button type="submit" size="lg" className="w-full sm:w-auto">
                                    Send Message
                                </Button>
                            )}
                        </form>
                    </ScrollReveal>

                    {/* Contact Info & Map */}
                    <ScrollReveal direction="right">
                        <div className="space-y-6">
                            {/* Info cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.label}
                                        className={`p-5 rounded-2xl border ${isDark
                                            ? "bg-surface-dark-secondary border-glass-border-dark"
                                            : "bg-surface-light border-glass-border-light shadow-sm"
                                            }`}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <span className="text-2xl mb-2 block">{info.icon}</span>
                                        <p className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                            {info.label}
                                        </p>
                                        <p className="font-semibold">{info.value}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* FAQ teaser */}
                            <div
                                className={`p-6 rounded-2xl border ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                            >
                                <h3 className="font-bold text-lg mb-4">❓ Frequently Asked</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is DevHub free to use?", a: "Yes! DevHub is completely free for developers." },
                                        { q: "Can I showcase private projects?", a: "Absolutely. You control your project visibility." },
                                        { q: "How do I report a bug?", a: "Use this contact form or open an issue on GitHub." },
                                    ].map((faq) => (
                                        <div key={faq.q}>
                                            <p className="font-medium text-sm">{faq.q}</p>
                                            <p className={`text-sm mt-1 ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </PageTransition>
    );
}
