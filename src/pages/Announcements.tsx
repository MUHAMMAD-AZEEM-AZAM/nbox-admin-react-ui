
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye } from "lucide-react";
import { useState } from "react";
import AnnouncementPreview from "@/components/AnnouncementPreview";

const Announcements = () => {
  const [showPreview, setShowPreview] = useState(false);

  const announcements = [
    {
      title: "System Maintenance",
      status: "Active",
      date: "Jan 15, 2025",
      type: "System"
    },
    {
      title: "New Features Update",
      status: "Draft",
      date: "Jan 14, 2025",
      type: "Feature"
    },
    {
      title: "Holiday Schedule",
      status: "Scheduled",
      date: "Jan 13, 2025",
      type: "General"
    },
    {
      title: "Security Alert",
      status: "Active",
      date: "Jan 12, 2025",
      type: "Security"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Active: "bg-green-100 text-green-800",
      Draft: "bg-gray-100 text-gray-800",
      Scheduled: "bg-orange-100 text-orange-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handlePreviewClose = () => {
    setShowPreview(false);
  };

  const handlePreviewSuccess = () => {
    setShowPreview(false);
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Announcements</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Announcement
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.title}</td>
                      <td className="py-3 px-4">{item.type}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{item.date}</td>
                      <td className="py-3 px-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handlePreview}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {showPreview && (
          <AnnouncementPreview 
            onClose={handlePreviewClose}
            onSuccess={handlePreviewSuccess}
          />
        )}
      </div>
    </Layout>
  );
};

export default Announcements;
