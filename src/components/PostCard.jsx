// ===================================
// DevHub — Post Card Component
// Feed post with like button (local state),
// tags, and animated entry.
// ===================================

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * PostCard — Displays a community feed post
 * with author info, content, tags, and interaction buttons.
 * Like button uses local state and spring animation.
 */
export default function PostCard({ post, index = 0 }) {
    const { isDark } = useTheme();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);

    // Toggle like with animated feedback
    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <motion.div
            className={`p-6 rounded-2xl border transition-all duration-300 ${isDark
                    ? "bg-surface-dark-secondary border-glass-border-dark hover:border-glass-border-dark/50"
                    : "bg-surface-light border-glass-border-light hover:border-glass-border-light/50 shadow-sm"
                }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Author row */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                />
                <div className="flex-1">
                    <h4 className="font-semibold">{post.author}</h4>
                    <p className={`text-sm ${isDark ? "text-text-dark-muted" : "text-text-light-muted"}`}>
                        @{post.username} · {post.timestamp}
                    </p>
                </div>
            </div>

            {/* Content */}
            <p className={`mb-4 leading-relaxed ${isDark ? "text-text-dark-secondary" : "text-text-light-secondary"}`}>
                {post.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-colors ${isDark
                                ? "bg-primary/10 text-primary-light hover:bg-primary/20"
                                : "bg-primary/10 text-primary-dark hover:bg-primary/20"
                            }`}
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Action buttons */}
            <div className={`flex items-center gap-6 pt-4 border-t ${isDark ? "border-glass-border-dark" : "border-glass-border-light"
                }`}>
                {/* Like button */}
                <motion.button
                    className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${liked
                            ? "text-danger"
                            : isDark
                                ? "text-text-dark-muted hover:text-danger"
                                : "text-text-light-muted hover:text-danger"
                        }`}
                    onClick={handleLike}
                    whileTap={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                    <motion.span
                        animate={liked ? { scale: [1, 1.4, 1] } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        {liked ? "❤️" : "🤍"}
                    </motion.span>
                    <span className="font-medium">{likeCount}</span>
                </motion.button>

                {/* Comments */}
                <button
                    className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${isDark
                            ? "text-text-dark-muted hover:text-accent"
                            : "text-text-light-muted hover:text-accent"
                        }`}
                >
                    💬 <span className="font-medium">{post.comments}</span>
                </button>

                {/* Share */}
                <button
                    className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${isDark
                            ? "text-text-dark-muted hover:text-success"
                            : "text-text-light-muted hover:text-success"
                        }`}
                >
                    🔄 <span className="font-medium">{post.shares}</span>
                </button>
            </div>
        </motion.div>
    );
}
