// ===================================
// DevHub — Main Layout
// Wraps all pages with Navbar + Footer
// and provides the animated route outlet.
// ===================================

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * MainLayout — Shared layout rendered on every route.
 * Provides consistent navbar, footer, and page content area.
 */
export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Navbar />
            {/* Main content — pushed below fixed navbar */}
            {/* Using inline style as a failsafe for spacing, increased for "perfect space" */}
            <main className="flex-1 w-full pt-32" style={{ paddingTop: '120px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
