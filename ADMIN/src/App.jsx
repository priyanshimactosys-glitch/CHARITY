import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./dashboard/Dashboard";

import { ManageServices } from "./components/pages/admin/Operations/ManageServices";
import { ManageAppointments } from "./components/pages/admin/Operations/ManageAppointments";
import { NewAppointment } from "./components/pages/admin/Operations/NewAppointments";
import { AddWalkIn } from "./components/pages/admin/Operations/AddWalkIn";
import CalendarView from "./components/pages/admin/Operations/CalendarView";

import Page from "./components/pages/admin/ContentManagement/PagesForm/Page";
import Template from "./components/pages/admin/ContentManagement/PageTemplate/Template";
import Audit from "./components/pages/admin/Reports&Logs/Audit";
import Users from "./components/pages/admin/PeopleManagement/User/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Operations routes */}
          <Route path="operations/services" element={<ManageServices />} />
          <Route
            path="operations/appointments"
            element={<ManageAppointments />}
          />
          <Route
            path="operations/appointments/new"
            element={<NewAppointment />}
          />
          <Route
            path="operations/appointments/walk-in"
            element={<AddWalkIn />}
          />
          <Route path="operations/calendar" element={<CalendarView />} />
          <Route path="content/pages" element={<Page />} />
          <Route path="content/template" element={<Template />} />
          {/* Report & Logs routes   */}
          <Route path="reports/audit" element={<Audit />} />{" "}
          {/* people management  */}
          <Route path="people/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
