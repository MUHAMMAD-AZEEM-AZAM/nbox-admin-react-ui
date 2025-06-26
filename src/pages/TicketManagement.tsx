
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TicketManagement = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Ticket Management</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Ticket management functionality coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TicketManagement;
