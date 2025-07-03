
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

interface AnnouncementPreviewProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AnnouncementPreview = ({ onClose, onSuccess }: AnnouncementPreviewProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onSuccess();
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
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Preview Announcement</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">System Maintenance Notice</CardTitle>
                <Badge className="bg-orange-100 text-orange-800">Scheduled</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Subject:</h4>
                <p className="text-gray-700">Scheduled Maintenance - Service Interruption</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Message:</h4>
                <p className="text-gray-700">
                  Dear CMRA Partners,<br/><br/>
                  We will be performing scheduled maintenance on our systems on January 20, 2025, from 2:00 AM to 4:00 AM EST. 
                  During this time, you may experience temporary service interruptions.<br/><br/>
                  We apologize for any inconvenience and appreciate your understanding.<br/><br/>
                  Best regards,<br/>
                  The nbox Team
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Recipients:</h4>
                <p className="text-gray-700">All Active CMRAs (247 recipients)</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex space-x-3 mt-6">
            <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
              Send Announcement
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPreview;
