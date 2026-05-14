import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Photos from "./pages/Photos.tsx";
import Post from "./pages/Post.tsx";
import Work from "./pages/Work.tsx";
import Writing from "./pages/Writing.tsx";

const queryClient = new QueryClient();
const previewStorageKey = "keiryan-admin-preview";

function SiteRoutes() {
  const [previewUnlocked, setPreviewUnlocked] = useState(
    () => localStorage.getItem(previewStorageKey) === "unlocked",
  );

  useEffect(() => {
    if (previewUnlocked) {
      localStorage.setItem(previewStorageKey, "unlocked");
    }
  }, [previewUnlocked]);

  if (!previewUnlocked) {
    return (
      <Routes>
        <Route path="*" element={<ComingSoon onUnlock={() => setPreviewUnlocked(true)} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/:slug" element={<Post />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
