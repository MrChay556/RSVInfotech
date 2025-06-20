import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { motion, AnimatePresence } from "framer-motion";
import SoftwareDevelopment from "@/pages/services/software-development";
import AISolutions from "@/pages/services/ai-solutions";
import ITServices from "@/pages/services/it-services";
import ITNetworking from "@/pages/services/it-networking";
import ITSecurity from "@/pages/services/it-security";
import CloudTechnologies from "@/pages/services/cloud-technologies";
import VoIPServices from "@/pages/services/voip";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/software-development" component={SoftwareDevelopment} />
        <Route path="/services/ai-solutions" component={AISolutions} />
        <Route path="/services/it-services" component={ITServices} />
        <Route path="/services/it-networking" component={ITNetworking} />
        <Route path="/services/it-security" component={ITSecurity} />
        <Route path="/services/cloud-technologies" component={CloudTechnologies} />
        <Route path="/services/voip" component={VoIPServices} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
          <Router />
          <Footer />
          <Chatbot />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
