// ===================================
// DevHub — Community / Feed Page
// Animated feed of posts with like buttons.
// ===================================

import { useTheme } from "../components/ThemeProvider";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import PostCard from "../components/PostCard";
import posts from "../data/posts";

export default function CommunityPage() {
    const { isDark } = useTheme();

    // Trending topics
    const trendingTopics = [
        { tag: "react", count: "2.4k" },
        { tag: "ai", count: "1.8k" },
        { tag: "opensource", count: "1.5k" },
        { tag: "webdev", count: "1.2k" },
        { tag: "rust", count: "980" },
        { tag: "devops", count: "870" },
    ];

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-20">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 px-8">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Community <span className="gradient-text">Feed</span>
                        </h1>
                        <p
                            className={`max-w-xl mx-auto text-lg ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"
                                }`}
                        >
                            Stay updated with the latest from the developer community.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main feed */}
                    <div className="lg:col-span-2 space-y-6">
                        {posts.map((post, i) => (
                            <PostCard key={post.id} post={post} index={i} />
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Trending Topics */}
                        <ScrollReveal direction="right">
                            <div
                                className={`p-6 rounded-2xl border ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                            >
                                <h3 className="font-bold text-lg mb-4">🔥 Trending Topics</h3>
                                <div className="space-y-3">
                                    {trendingTopics.map((topic) => (
                                        <div
                                            key={topic.tag}
                                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${isDark
                                                ? "hover:bg-surface-dark-tertiary"
                                                : "hover:bg-surface-light-tertiary"
                                                }`}
                                        >
                                            <span className={`font-medium ${isDark ? "text-primary-light" : "text-primary"}`}>
                                                #{topic.tag}
                                            </span>
                                            <span
                                                className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"
                                                    }`}
                                            >
                                                {topic.count} posts
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Who to Follow */}
                        <ScrollReveal direction="right" delay={0.2}>
                            <div
                                className={`p-6 rounded-2xl border ${isDark
                                    ? "bg-surface-dark-secondary border-glass-border-dark"
                                    : "bg-surface-light border-glass-border-light shadow-sm"
                                    }`}
                            >
                                <h3 className="font-bold text-lg mb-4">👥 Who to Follow</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "James Park", username: "jamesp", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=14b8a6" },
                                        { name: "Emma Wilson", username: "emmaw", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=f59e0b" },
                                        { name: "Olivia Brooks", username: "oliviab", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=ec4899" },
                                    ].map((user) => (
                                        <div key={user.username} className="flex items-center gap-3">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm truncate">{user.name}</p>
                                                <p className={`text-xs truncate ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                                                    @{user.username}
                                                </p>
                                            </div>
                                            <button
                                                className="px-3 py-1 text-xs font-semibold rounded-lg gradient-bg text-white cursor-pointer hover:opacity-90 transition-opacity"
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
