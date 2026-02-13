// ===================================
// DevHub — App Entry Point
// Wraps the application in BrowserRouter
// and ThemeProvider.
// ===================================

import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import AppRoutes from "./routes/AppRoutes";

/**
 * App — Root component.
 * Provides routing and theming to the entire application.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
