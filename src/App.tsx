import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Support from "./pages/Support";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Company from "./pages/Company";
import History from "./pages/History";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Certificates from "./pages/Certificates";
import KnowledgeBase from "./pages/KnowledgeBase";
import Documentation from "./pages/Documentation";
import Training from "./pages/Training";
import Warranty from "./pages/Warranty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category/:productId" element={<ProductDetail />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solution/:solutionId" element={<SolutionDetail />} />
                <Route path="/support" element={<Support />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:newsId" element={<NewsDetail />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/company" element={<Company />} />
                <Route path="/company/history" element={<History />} />
                <Route path="/company/team" element={<Team />} />
                <Route path="/company/careers" element={<Careers />} />
                <Route path="/company/certificates" element={<Certificates />} />
                <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/support/documentation" element={<Documentation />} />
                <Route path="/support/training" element={<Training />} />
                <Route path="/support/warranty" element={<Warranty />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
