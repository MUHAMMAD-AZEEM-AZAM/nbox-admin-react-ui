
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Bell, 
  CreditCard, 
  HeadphonesIcon,
  ChevronRight 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard"
    },
    {
      icon: Bell,
      label: "Announcements",
      path: "/announcements"
    },
    {
      icon: CreditCard,
      label: "Subscription Plans",
      path: "/subscription-plans"
    },
    {
      icon: HeadphonesIcon,
      label: "Ticket Management",
      path: "/ticket-management"
    }
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-blue-600">nbox</h1>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left",
                    isActive 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => navigate(item.path)}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            O
          </div>
          <div>
            <p className="text-sm font-medium">Olivia Rhye</p>
            <p className="text-xs text-gray-500">olivia@nbox.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
