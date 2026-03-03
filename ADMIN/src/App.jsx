import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./dashboard/Dashboard"

import { ManageServices } from "./components/pages/admin/Operations/ManageServices";
import { ManageAppointments } from "./components/pages/admin/Operations/ManageAppointments";
import { NewAppointment } from "./components/pages/admin/Operations/NewAppointments";
import { AddWalkIn } from "./components/pages/admin/Operations/AddWalkIn";
import CalendarView from "./components/pages/admin/Operations/CalendarView"; 

import Audit from "./components/pages/admin/Reports&Logs/Audit";
import Coupons from "./components/pages/admin/MarketingEngagement/Coupons"; 

import UsersDashboard from "./components/pages/admin/PeopleManagement/User/Users"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Operations routes */}
        <Route path="operations/services" element={<ManageServices />} />
          <Route path="operations/appointments" element={<ManageAppointments />} />
          <Route path="operations/appointments/new" element={<NewAppointment />} />
          <Route path="operations/appointments/walk-in" element={<AddWalkIn />} />
          <Route path="operations/calendar" element={<CalendarView />} />


          {/* Report & Logs routes   */}
          <Route path="reports/audit" element={<Audit />} />
          
          {/* Marketing & Engagement Route */}  
          <Route path="marketing/coupons" element={<Coupons/>} /> 

          {/* people management  */} 
          <Route path="people/users" element={<UsersDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
