import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import References from "./pages/References";
import ResearchArticle from "./pages/ResearchArticle";
import LetterToEditor from "./pages/LetterToEditor";
import Poster from "./pages/Poster";
import NotFound from "./pages/NotFound";

// Remove App.css import as we're using Tailwind fully
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/references" element={<References />} />
          <Route path="/research-article" element={<ResearchArticle />} />
          <Route path="/letter-to-editor" element={<LetterToEditor />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
