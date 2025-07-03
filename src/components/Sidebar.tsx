
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Bell, 
  CreditCard, 
  HeadphonesIcon,
  ChevronRight,
  ChevronLeft,
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={cn(
      "bg-white h-screen shadow-lg transition-all duration-300 relative",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-white shadow-md hover:bg-gray-50"
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>

      <div className="p-6 border-b">
        <div className="flex items-center">
          <h1 className={cn(
            "text-2xl font-bold text-blue-600 transition-opacity duration-300",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}>
            {!isCollapsed && "nbox"}
          </h1>
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
                      : "text-gray-700 hover:bg-gray-100",
                    isCollapsed ? "px-2" : "px-3"
                  )}
                  onClick={() => navigate(item.path)}
                  title={isCollapsed ? item.label : ""}
                >
                  <Icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-3")} />
                  {!isCollapsed && item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {user?.name?.charAt(0) || 'O'}
          </div>
          {!isCollapsed && (
            <>
              <div className="flex-1">
                <p className="text-sm font-medium">{user?.name || "Olivia Rhye"}</p>
                <p className="text-xs text-gray-500">{user?.email || "olivia@nbox.com"}</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 text-gray-600" />
              </Button>
            </>
          )}
          {isCollapsed && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1 w-8 h-8" 
              title="Logout"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 text-gray-600" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
