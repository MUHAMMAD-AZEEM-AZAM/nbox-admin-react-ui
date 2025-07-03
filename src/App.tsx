
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAppSelector } from "./store/hooks";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import TicketManagement from "./pages/TicketManagement";
import CMRADetails from "./pages/CMRADetails";
import ResetPassword from "./pages/ResetPassword";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
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
        <Route path="*" element={<Login />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
