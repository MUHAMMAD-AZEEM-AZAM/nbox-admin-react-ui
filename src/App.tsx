
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import TicketManagement from "./pages/TicketManagement";
import CMRADetails from "./pages/CMRADetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/login" 
              element={<Login onLogin={() => setIsAuthenticated(true)} />} 
            />
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/subscription-plans" element={<SubscriptionPlans />} />
                <Route path="/ticket-management" element={<TicketManagement />} />
                <Route path="/cmra-details" element={<CMRADetails />} />
              </>
            ) : (
              <Route path="*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
