
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Cloud, ChevronDown } from "lucide-react";
import { useState } from "react";
import PreviewAnnouncementModal from "./PreviewAnnouncementModal";

interface CreateAnnouncementModalProps {
  onClose: () => void;
}

const CreateAnnouncementModal = ({ onClose }: CreateAnnouncementModalProps) => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    message: ""
  });

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleBackToForm = () => {
    setShowPreview(false);
  };

  if (showPreview) {
    return (
      <PreviewAnnouncementModal 
        onClose={onClose}
        onEdit={handleBackToForm}
        formData={formData}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold">Create New Announcement</h2>
            <p className="text-sm text-gray-500 mt-1">Fill out the form below to create a new announcement</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">Title</Label>
            <Input
              id="title"
              placeholder="Type here"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="type" className="text-sm font-medium text-gray-700 mb-2 block">Type of Announcement</Label>
            <div className="relative">
              <select 
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="">Select</option>
                <option value="giveaway">Giveaway</option>
                <option value="update">Update</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="general">General Information</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">Message</Label>
            <Textarea
              id="message"
              placeholder="Type here"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full min-h-[100px] resize-none"
            />
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Supporting Media <span className="text-gray-400 font-normal">(Optional)</span>
            </Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center bg-gray-50">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Cloud className="h-8 w-8 text-gray-400" />
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
                  Upload Document
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-6 border-t bg-gray-50">
          <Button variant="ghost" onClick={onClose} className="text-gray-600">
            Cancel
          </Button>
          <Button 
            onClick={handlePreview}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          >
            Preview Announcement →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncementModal;
