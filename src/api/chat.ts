
import { askFaiqa } from '@/lib/chatbot';

// This is a temporary solution - in production, you should use Supabase Edge Functions
export async function handleChatRequest(message: string): Promise<string> {
  // For now, we'll use the hardcoded API key
  // In production, this should come from environment variables via Supabase
  const API_KEY = "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";
  
  try {
    const response = await askFaiqa(message, API_KEY);
    return response;
  } catch (error) {
    console.error('Chat API Error:', error);
    return "I'm sorry, I'm having trouble responding right now. Please try again later.";
  }
}
</tml:write>

Now I need to add the Chat route to the App.tsx:

<lov-write file_path="src/App.tsx">
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
