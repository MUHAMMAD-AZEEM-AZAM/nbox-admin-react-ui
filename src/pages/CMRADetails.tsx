
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, Trash } from "lucide-react";

const CMRADetails = () => {
  const billingHistory = [
    { date: "Jan 15, 2025", type: "Tier 1", amount: "$199.99", status: "Paid" },
    { date: "Jan 15, 2025", type: "Tier 1", amount: "$199.99", status: "Paid" },
    { date: "Jan 15, 2025", type: "Tier 1", amount: "$199.99", status: "Paid" }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">CMRA Details</h1>
            <p className="text-gray-600">Dashboard / CMRA Details</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Approve Profile
          </Button>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Information</Label>
                  <Input id="business" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Type here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Type here" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Management */}
          <Card>
            <CardHeader>
              <CardTitle>Document Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Upload Document
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">PDF</span>
                      </div>
                      <span className="text-sm">USPS_1583A_Approved.pdf</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">PDF</span>
                      </div>
                      <span className="text-sm">USPS_1583A_Approved.pdf</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription & Billing History */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription & Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingHistory.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{item.date}</td>
                        <td className="py-3 px-4">{item.type}</td>
                        <td className="py-3 px-4">{item.amount}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-100 text-green-800">
                            {item.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CMRADetails;
