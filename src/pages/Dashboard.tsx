
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Users, UserCheck, UserX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const stats = [
    {
      title: "Active Subscriptions",
      value: "247",
      icon: CreditCard,
      color: "text-blue-600"
    },
    {
      title: "Total Renters",
      value: "247",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Renters",
      value: "247",
      icon: UserCheck,
      color: "text-blue-600"
    },
    {
      title: "Inactive Renters",
      value: "247",
      icon: UserX,
      color: "text-blue-600"
    }
  ];

  const cmraData = [
    { name: "PostBox Plus", planType: "Tier 1", status: "Active", paymentStatus: "Paid" },
    { name: "Mail Central", planType: "Tier 2", status: "Pending", paymentStatus: "Pending" },
    { name: "BoxHub", planType: "Tier 3", status: "Pending", paymentStatus: "Pending" },
    { name: "PostBox Plus", planType: "Tier 2", status: "Active", paymentStatus: "Paid" },
    { name: "Mail Central", planType: "Tier 2", status: "Inactive", paymentStatus: "Overdue" },
    { name: "BoxHub", planType: "Tier 3", status: "Active", paymentStatus: "Paid" },
    { name: "PostBox Plus", planType: "Tier 1", status: "Active", paymentStatus: "Paid" },
    { name: "Mail Central", planType: "Tier 1", status: "Pending", paymentStatus: "Pending" }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      Active: "bg-green-100 text-green-800",
      Pending: "bg-orange-100 text-orange-800",
      Inactive: "bg-red-100 text-red-800"
    };
    return variants[status] || "bg-gray-100 text-gray-800";
  };

  const getPaymentBadge = (status: string) => {
    const variants: Record<string, string> = {
      Paid: "bg-green-100 text-green-800",
      Pending: "bg-orange-100 text-orange-800",
      Overdue: "bg-red-100 text-red-800"
    };
    return variants[status] || "bg-gray-100 text-gray-800";
  };

  const handleCMRAClick = () => {
    navigate("/cmra-details");
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>CMRA Data</CardTitle>
                <p className="text-sm text-gray-600 mt-1">Total 2,356 CMRAs in the list</p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="name-az">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by Name (A-Z)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-az">Sort by Name (A-Z)</SelectItem>
                    <SelectItem value="name-za">Sort by Name (Z-A)</SelectItem>
                    <SelectItem value="status">Sort by Status</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Newest First" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Filters</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">CMRA Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Plan Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cmraData.map((item, index) => (
                    <tr 
                      key={index} 
                      className="border-b hover:bg-gray-50 cursor-pointer"
                      onClick={handleCMRAClick}
                    >
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="py-3 px-4">{item.planType}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadge(item.status)}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getPaymentBadge(item.paymentStatus)}>
                          {item.paymentStatus}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-4">
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
      </div>
    </Layout>
  );
};

export default Dashboard;
