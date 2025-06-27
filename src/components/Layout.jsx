
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import { Search, Bell } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search CMRA"
                className="pl-10 w-full"
              />
            </div>
            <div className="flex items-center space-x-4 ml-6">
              <Bell className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
