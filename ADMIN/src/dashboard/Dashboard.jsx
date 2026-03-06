import React from "react";
import StatsCard from "./StatsCard";
import ActionBtn from "./ActionBtn";
import RecentActivity from "./RecentActivity";
import VolunteerAppro from "./VolunteerAppro";
import Announcement from "./Announcement";
import PeopleManag from "./PeopleManag";
import ReportsLogs from "./ReportsLogs";
import Management from "./Management";
import Logs from "./Logs";
import SystemSetting from "./SystemSetting";


const Dashboard = () => {
  return (
    
      <div className="max-w-6xl mx-auto">
        
        
        <StatsCard />
        <div className="mt-2"> 
          <ActionBtn />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 items-start">
          
          
          <div className="flex flex-col gap-1">
            <RecentActivity />
            <Announcement />
            <ReportsLogs />
            <Logs />
          </div>

          
          <div className="flex flex-col gap-1">
            <VolunteerAppro />
            <PeopleManag />
            <Management />
            <SystemSetting /> 
          </div>

        </div>

        
        
      </div>
   
  );
};

export default Dashboard;