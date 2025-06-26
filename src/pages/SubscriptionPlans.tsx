
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SubscriptionPlans = () => {
  const plans = [
    { tierNumber: "Tier 1", price: "$99/month", vmbCustomers: "Up to 100", duration: "Monthly", status: "Active" },
    { tierNumber: "Tier 1", price: "$99/month", vmbCustomers: "Up to 100", duration: "Monthly", status: "Active" }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Subscription Plans</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Stripe Dashboard
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Tier Number</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">VMB Customers</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Duration</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{plan.tierNumber}</td>
                      <td className="py-4 px-6">{plan.price}</td>
                      <td className="py-4 px-6">{plan.vmbCustomers}</td>
                      <td className="py-4 px-6">{plan.duration}</td>
                      <td className="py-4 px-6">
                        <Badge className="bg-green-100 text-green-800">
                          {plan.status}
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
    </Layout>
  );
};

export default SubscriptionPlans;
