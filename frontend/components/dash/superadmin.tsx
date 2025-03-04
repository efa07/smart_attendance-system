import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BarChart, Settings, FileText, CalendarCheck } from "lucide-react";

export default function SuperAdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
      
      {/* User Management */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users size={24} />
            <h2 className="text-lg font-semibold">User & Role Management</h2>
          </div>
          <Button variant="outline">Manage</Button>
        </CardContent>
      </Card>
      
      {/* Attendance Analytics */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BarChart size={24} />
            <h2 className="text-lg font-semibold">Attendance Analytics</h2>
          </div>
          <Button variant="outline">View Reports</Button>
        </CardContent>
      </Card>
      
      {/* Shift & Policy Management */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CalendarCheck size={24} />
            <h2 className="text-lg font-semibold">Shift & Policy Management</h2>
          </div>
          <Button variant="outline">Configure</Button>
        </CardContent>
      </Card>
      
      {/* System Settings */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Settings size={24} />
            <h2 className="text-lg font-semibold">System Settings</h2>
          </div>
          <Button variant="outline">Settings</Button>
        </CardContent>
      </Card>
      
      {/* Payroll & Reports */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText size={24} />
            <h2 className="text-lg font-semibold">Payroll & Reports</h2>
          </div>
          <Button variant="outline">Export</Button>
        </CardContent>
      </Card>
    </div>
  );
}
