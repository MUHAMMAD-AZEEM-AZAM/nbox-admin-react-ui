
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

const PreviewAnnouncementModal = ({ onClose, onEdit, formData }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirmSend = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600">Announcement sent successfully</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-lg font-semibold">Preview Announcement</h2>
            <p className="text-sm text-gray-600 mt-1">Verify the information before sending</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Q1 2025 Company Meeting Schedule</h3>
              <Badge className="bg-red-100 text-red-800">Update</Badge>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              Nbox aims to transform the virtual mailbox sector by providing CMRAs with a cost-effective, adaptable, and easy-to-use web application tailored to their specific needs. It also offers an app for CMRA customers with virtual mailboxes.
            </p>

            <div className="bg-yellow-400 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-black mb-2">Hello!</div>
                <div className="text-sm text-black">✨ 🌟 ✨</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between p-6 border-t bg-gray-50">
          <Button variant="outline" onClick={onEdit}>
            Edit
          </Button>
          <Button 
            onClick={handleConfirmSend}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            Confirm & Send →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewAnnouncementModal;
