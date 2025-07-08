
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TwoFactorAuthProps {
  onComplete?: () => void;
  onCancel?: () => void;
}

const TwoFactorAuth = ({ onComplete, onCancel }: TwoFactorAuthProps) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(28);
  const navigate = useNavigate();

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleValidate = () => {
    // Simulate validation
    setIsVerified(true);
    setTimeout(() => {
      onComplete?.();
      navigate("/set-new-password");
    }, 2000);
  };

  const handleCancel = () => {
    onCancel?.();
    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-6 w-6 text-gray-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Two-Factor Authentication</h2>
          <p className="text-gray-600 text-sm">Provide the following code shared via email.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter 6-digit code
            </label>
            <div className="flex space-x-2 justify-center">
              {code.map((digit, index) => (
                <Input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="text-sm text-gray-600">
              Resend Code <span className="text-gray-400">(00:{String(timeLeft).padStart(2, '0')})</span>
            </button>
          </div>

          {!isVerified ? (
            <>
              <Button 
                onClick={handleValidate}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={code.some(digit => !digit)}
              >
                Validate Code →
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleCancel}
                className="w-full"
              >
                Cancel
              </Button>
            </>
          ) : (
            <div className="text-center py-4">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-green-600 font-medium">Verification Completed Successfully</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
