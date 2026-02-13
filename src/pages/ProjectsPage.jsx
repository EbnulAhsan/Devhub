// ===================================
// DevHub — Projects Page
// Project showcase grid with category filter.
// ===================================

import { useState, useMemo } from "react";
import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import projects from "../data/projects";

export default function ProjectsPage() {
    const { isDark } = useTheme();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // Collect unique categories
    const categories = useMemo(() => {
        const cats = new Set(projects.map((p) => p.category));
        return ["All", ...Array.from(cats).sort()];
    }, []);

    // Filter projects
    const filtered = useMemo(() => {
        return projects.filter((p) => {
            const matchesSearch =
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === "All" || p.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Open Source <span className="gradient-text">Projects</span>
                        </h1>
                        <p
                            className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                }`}
                        >
                            Explore innovative projects built by our community of developers.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Search & Category Filter */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Search projects..."
                            className="flex-1"
                        />
                        <div className="flex gap-3 flex-wrap justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${category === cat
                                        ? "gradient-bg text-white"
                                        : isDark
                                            ? "bg-surface-dark-secondary text-text-dark-secondary hover:text-text-dark-primary"
                                            : "bg-surface-light-tertiary text-text-light-secondary hover:text-text-light-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Results count */}
                <p className={`mb-8 text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                    Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                </p>

                {/* Projects Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filtered.map((proj, i) => (
                            <ScrollReveal key={proj.id} delay={i * 0.1}>
                                <ProjectCard project={proj} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">📦</p>
                        <p className={`text-lg ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                            No projects found.
                        </p>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
