// ===================================
// DevHub — App Routes
// Central routing configuration with
// AnimatePresence for page transitions.
// ===================================

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

// Page imports
import HomePage from "../pages/HomePage";
import DevelopersPage from "../pages/DevelopersPage";
import ProjectsPage from "../pages/ProjectsPage";
import CommunityPage from "../pages/CommunityPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

/**
 * AppRoutes — Defines all routes and wraps them
 * in AnimatePresence for smooth page transitions.
 */
export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/developers" element={<DevelopersPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
