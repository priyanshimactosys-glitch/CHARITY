import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";

import Dashboard from "./dashboard/Dashboard";

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

          {/* Content Management routes */}
          <Route path="content/pages" element={<Page />} /> 
          <Route path="content/template" element={<Template />} /> 
          <Route path="content/announce" element={<Announce />} /> 


          {/* People Managment routes */}
          <Route path="people/careers" element={<Careers />} />
          <Route path="people/users" element={<Users />} />

          {/* Report & Logs routes   */}
          {/* <Route path="reports/audit" element={<Audit />} /> */}
          {/* people management  */} 

          <Route path="people/users" element={<Users />} />
          {/* Marketing Section Routes */}
          <Route path="/admin/marketing/coupons" element={<Coupons />} />
          <Route path="/admin/marketing/donations" element={<Donations />} />

          {/* Volunteer Management  */}

          <Route
            path="/admin/volunteers/availability"
            element={<Availability />}
          />
          <Route
            path="/admin/volunteers/schedules"
            element={<VolunteerSchedules />}
          />
         <Route path="volunteers/approval" element={<HoursApproval />} />
          <Route path="reports/audit" element={<Audit />} />{" "}

          {/* System Settings Routes */}
          <Route path="settings/org-info" element={<OrganizationInfo />} />
          <Route path="settings/contact-info" element={<ContactInfo />} />
          <Route path="settings/branding" element={<LogoBranding />} />
          <Route path="settings/footer" element={<FooterContent />} />
          <Route path="settings/roles" element={<RolesPermissions />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
