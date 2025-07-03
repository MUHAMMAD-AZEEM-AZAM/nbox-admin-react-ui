
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Create New Announcement</h2>
            <p className="text-sm text-gray-500 mt-1">Fill out the form below to create a new announcement</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1 block">Title</Label>
            <Input
              id="title"
              placeholder="Type here"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full h-9"
            />
          </div>

          <div>
            <Label htmlFor="type" className="text-sm font-medium text-gray-700 mb-1 block">Type of Announcement</Label>
            <div className="relative">
              <select 
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full h-9 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
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
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">Message</Label>
            <Textarea
              id="message"
              placeholder="Type here"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full min-h-[60px] resize-none"
            />
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">
              Supporting Media <span className="text-gray-400 font-normal">(Optional)</span>
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <Cloud className="h-5 w-5 text-gray-400" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs">
                  Upload Document
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <Button variant="ghost" onClick={onClose} className="text-gray-600">
            Cancel
          </Button>
          <Button 
            onClick={handlePreview}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            Preview Announcement →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncementModal;
