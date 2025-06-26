
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import CreateAnnouncementModal from "@/components/CreateAnnouncementModal";

const Announcements = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const announcements = [
    {
      title: "New Feature Release",
      type: "Giveaway",
      date: "Jan 15, 2025",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "System Maintenance",
      type: "Update",
      date: "Jan 18, 2025",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      title: "New Feature Release",
      type: "Fundraiser",
      date: "Feb 03, 2025",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "New Feature Release",
      type: "General Information",
      date: "Feb 11, 2025",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "New Feature Release",
      type: "Giveaway",
      date: "Jan 15, 2025",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "System Maintenance",
      type: "Update",
      date: "Jan 18, 2025",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      title: "New Feature Release",
      type: "Fundraiser",
      date: "Feb 03, 2025",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "New Feature Release",
      type: "General Information",
      date: "Feb 11, 2025",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Announcements</h1>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => setShowCreateModal(true)}
          >
            Create New Announcement
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Title</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Type</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Date</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{item.title}</td>
                    <td className="py-4 px-6">
                      <Badge className={item.badgeColor}>
                        {item.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{item.date}</td>
                    <td className="py-4 px-6">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between p-4 border-t bg-gray-50">
            <span className="text-sm text-gray-600">Showing 1 to 10 of 50 entries</span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-gray-600">
                &lt;
              </Button>
              <Button size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm" className="text-gray-600">2</Button>
              <Button variant="outline" size="sm" className="text-gray-600">3</Button>
              <Button variant="outline" size="sm" className="text-gray-600">4</Button>
              <Button variant="outline" size="sm" className="text-gray-600">5</Button>
              <Button variant="outline" size="sm" className="text-gray-600">6</Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                &gt;
              </Button>
            </div>
          </div>
        </div>

        {showCreateModal && (
          <CreateAnnouncementModal 
            onClose={() => setShowCreateModal(false)}
          />
        )}
      </div>
    </Layout>
  );
};

export default Announcements;
