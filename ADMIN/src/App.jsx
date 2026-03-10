import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";

import Dashboard from "./dashboard/Dashboard";
import Login from "./Login"; 

// Operations imports
import { ManageServices } from "./components/pages/admin/Operations/ManageServices";
import { ManageAppointments } from "./components/pages/admin/Operations/ManageAppointments";
import { NewAppointment } from "./components/pages/admin/Operations/NewAppointments";
import { AddWalkIn } from "./components/pages/admin/Operations/AddWalkIn";
import CalendarView from "./components/pages/admin/Operations/CalendarView";

// People Managemnets imports
import Careers from "./components/pages/admin/PeopleManagement/Career/Careers";
import Users from "./components/pages/admin/PeopleManagement/User/Users";
import Coupons from "./components/pages/admin/MarketingEngagement/Coupons";
import Donations from "./components/pages/admin/MarketingEngagement/Donations";
import Availability from "./components/pages/admin/VolunteerManagement/Availability";
import VolunteerSchedules from "./components/pages/admin/VolunteerManagement/VolunteerSchedules";
import HoursApproval from "./components/pages/admin/VolunteerManagement/HoursApproval";

// Content Management imports
import Page from "./components/pages/admin/ContentManagement/PagesForm/Page";
import Template from "./components/pages/admin/ContentManagement/PageTemplate/Template";
import Announce from "./components/pages/admin/ContentManagement/Announcements/Announce";

// Reports & Logs imports
import Audit from "./components/pages/admin/Reports&Logs/Audit";

// System settings imports
import OrganizationInfo from "./components/pages/admin/SystemSettings/OrganizationInfo";
import ContactInfo from "./components/pages/admin/SystemSettings/ContactInfo";
import LogoBranding from "./components/pages/admin/SystemSettings/LogoBranding";
import FooterContent from "./components/pages/admin/SystemSettings/FooterContent";
import RolesPermissions from "./components/pages/admin/SystemSettings/RolesPermissions";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Login page*/}
        <Route path="/" element={<Login />} />

        {/* Admin Section  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Operations routes */}
          <Route path="operations/services" element={<ManageServices />} />
          <Route path="operations/appointments" element={<ManageAppointments />} />
          <Route path="operations/appointments/new" element={<NewAppointment />} />
          <Route path="operations/appointments/walk-in" element={<AddWalkIn />} />
          <Route path="operations/calendar" element={<CalendarView />} />

          {/* Content Management routes */}
          <Route path="content/pages" element={<Page />} /> 
          <Route path="content/template" element={<Template />} /> 
          <Route path="content/announce" element={<Announce />} /> 

          {/* People Management routes */}
          <Route path="people/careers" element={<Careers />} />
          <Route path="people/users" element={<Users />} />

          {/* Marketing Section Routes */}
          <Route path="marketing/coupons" element={<Coupons />} />
          <Route path="marketing/donations" element={<Donations />} />

          {/* Volunteer Management */}
          <Route path="volunteers/availability" element={<Availability />} />
          <Route path="volunteers/schedules" element={<VolunteerSchedules />} />
          <Route path="volunteers/approval" element={<HoursApproval />} />
          
          {/* Reports & Logs */}
          <Route path="reports/audit" element={<Audit />} />

          {/* System Settings Routes */}
          <Route path="settings/org-info" element={<OrganizationInfo />} />
          <Route path="settings/contact-info" element={<ContactInfo />} />
          <Route path="settings/branding" element={<LogoBranding />} />
          <Route path="settings/footer" element={<FooterContent />} />
          <Route path="settings/roles" element={<RolesPermissions />} />
        </Route>

        {/* wrong path add to login pr redirect*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;