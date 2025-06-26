
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Trash, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Announcements = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    message: ""
  });

  const announcements = [
    { title: "New Feature Release", type: "Giveaway", date: "Jan 15, 2025" },
    { title: "System Maintenance", type: "Update", date: "Jan 18, 2025" },
    { title: "New Feature Release", type: "Fundraiser", date: "Feb 03, 2025" },
    { title: "New Feature Release", type: "General Information", date: "Feb 11, 2025" },
    { title: "New Feature Release", type: "Giveaway", date: "Jan 15, 2025" },
    { title: "System Maintenance", type: "Update", date: "Jan 18, 2025" },
    { title: "New Feature Release", type: "Fundraiser", date: "Feb 03, 2025" },
    { title: "New Feature Release", type: "General Information", date: "Feb 11, 2025" }
  ];

  const getTypeBadge = (type: string) => {
    const variants: Record<string, string> = {
      "Giveaway": "bg-green-100 text-green-800",
      "Update": "bg-red-100 text-red-800",
      "Fundraiser": "bg-orange-100 text-orange-800",
      "General Information": "bg-purple-100 text-purple-800"
    };
    return variants[type] || "bg-gray-100 text-gray-800";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
    setIsSuccessDialogOpen(true);
  };

  const handleSuccessClose = () => {
    setIsSuccessDialogOpen(false);
    setFormData({ title: "", type: "", message: "" });
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Announcements</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create New Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Announcement</DialogTitle>
                <p className="text-sm text-gray-600">Fill out the form below to create a new announcement</p>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Type here"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Type of Announcement</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="giveaway">Giveaway</SelectItem>
                      <SelectItem value="update">Update</SelectItem>
                      <SelectItem value="fundraiser">Fundraiser</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type here"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Supporting Media <span className="text-gray-500">(Optional)</span></Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <Button type="button" className="bg-blue-600 hover:bg-blue-700">
                      Upload Document
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Preview Announcement →
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Title</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{item.title}</td>
                      <td className="py-4 px-6">
                        <Badge className={getTypeBadge(item.type)}>
                          {item.type}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">{item.date}</td>
                      <td className="py-4 px-6">
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4 text-red-600" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between p-6 border-t">
              <p className="text-sm text-gray-600">Showing 1 to 10 of 50 entries</p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">‹</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">4</Button>
                <Button variant="outline" size="sm">5</Button>
                <Button variant="outline" size="sm">6</Button>
                <Button variant="outline" size="sm">›</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Dialog */}
        <Dialog open={isSuccessDialogOpen} onOpenChange={handleSuccessClose}>
          <DialogContent className="max-w-sm text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Announcement Sent Successfully!</h3>
                <p className="text-sm text-gray-600 mt-1">An email notification has been sent to all CMRAs.</p>
              </div>
              <Button onClick={handleSuccessClose} className="bg-blue-600 hover:bg-blue-700">
                Done ✓
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Announcements;
