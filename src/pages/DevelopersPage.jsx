// ===================================
// DevHub — Developers Page
// Grid of developer cards with search/filter.
// ===================================

import { useState, useMemo } from "react";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import DeveloperCard from "../components/DeveloperCard";
import SearchBar from "../components/SearchBar";
import developers from "../data/developers";

export default function DevelopersPage() {
    const { isDark } = useTheme();
    const [search, setSearch] = useState("");
    const [selectedSkill, setSelectedSkill] = useState("All");

    // Collect all unique skills for filter
    const allSkills = useMemo(() => {
        const skills = new Set();
        developers.forEach((d) => d.skills.forEach((s) => skills.add(s)));
        return ["All", ...Array.from(skills).sort()];
    }, []);

    // Filter developers by search query and skill
    const filtered = useMemo(() => {
        return developers.filter((dev) => {
            const matchesSearch =
                dev.name.toLowerCase().includes(search.toLowerCase()) ||
                dev.username.toLowerCase().includes(search.toLowerCase()) ||
                dev.bio.toLowerCase().includes(search.toLowerCase());

            const matchesSkill =
                selectedSkill === "All" || dev.skills.includes(selectedSkill);

            return matchesSearch && matchesSkill;
        });
    }, [search, selectedSkill]);

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Discover <span className="gradient-text">Developers</span>
                        </h1>
                        <p
                            className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                }`}
                        >
                            Find and connect with talented developers from around the world.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Search & Filter */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Search by name, username, or bio..."
                            className="flex-1"
                        />
                        <div className="flex gap-3 flex-wrap justify-center">
                            {allSkills.slice(0, 8).map((skill) => (
                                <button
                                    key={skill}
                                    onClick={() => setSelectedSkill(skill)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${selectedSkill === skill
                                        ? "gradient-bg text-white"
                                        : isDark
                                            ? "bg-surface-dark-secondary text-text-dark-secondary hover:text-text-dark-primary"
                                            : "bg-surface-light-tertiary text-text-light-secondary hover:text-text-light-primary"
                                        }`}
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Results count */}
                <p className={`mb-8 text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                    Showing {filtered.length} developer{filtered.length !== 1 ? "s" : ""}
                </p>

                {/* Developer Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filtered.map((dev, i) => (
                            <ScrollReveal key={dev.id} delay={i * 0.05}>
                                <DeveloperCard developer={dev} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">🔍</p>
                        <p className={`text-lg ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                            No developers found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
