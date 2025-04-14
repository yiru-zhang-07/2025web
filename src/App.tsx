import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter,Routes,Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectRidEase from "./pages/ProjectRidEase";
import ProjectBloom from "./pages/ProjectBloom";
import ProjectTalentAssessment from "./pages/ProjectTalentAssessment";
import ProjectLearningForGood from './pages/ProjectLearningForGood';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/ridease" element={<ProjectRidEase />} />
          <Route path="/projects/bloom" element={<ProjectBloom />} />
          <Route path="/projects/talent-assessment" element={<ProjectTalentAssessment />} />
          <Route path="/project/learning-for-good" element={<ProjectLearningForGood />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
