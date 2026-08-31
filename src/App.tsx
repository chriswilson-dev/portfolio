import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle navigation and refresh behavior
const NavigationHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Clear hash on any page load if hash exists
  useEffect(() => {
    // Check if there's a hash in the URL on mount
    if (window.location.hash) {
      // Use a small timeout to ensure React Router has initialized
      const timer = setTimeout(() => {
        window.history.replaceState(null, '', '/');
        window.scrollTo(0, 0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []); // Only run once on component mount

  useEffect(() => {
    // If someone tries to access section routes directly, redirect to home
    const sectionPaths = ['/about', '/services', '/experience', '/projects', '/skills', '/blog', '/contact'];
    if (sectionPaths.includes(location.pathname)) {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate, location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavigationHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Redirect common section paths to home */}
            <Route path="/about" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/experience" element={<Index />} />
            <Route path="/projects" element={<Index />} />
            <Route path="/skills" element={<Index />} />
            <Route path="/blog" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
