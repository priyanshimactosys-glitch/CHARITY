import React from "react";
import { Info } from "lucide-react";

const NotificationRow = ({ label, description, showEmailTag }) => (
  <div className="py-4 border-b border-gray-100 flex justify-between items-start group">
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-[10px]">✓</span>
        </div>
        <span className="text-sm font-bold text-gray-700">{label}</span>
        {description && (
          <Info size={14} className="text-gray-400 cursor-help" />
        )}
      </div>
      {description && (
        <p className="text-xs text-gray-400 ml-7">{description}</p>
      )}
    </div>
    <div className="flex items-center gap-3">
      {showEmailTag && (
        <span className="text-xs text-gray-400 italic">Email</span>
      )}
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
      </label>
    </div>
  </div>
);

const Notifications = ({ onCancel, onSendInvite }) => {
  return (
    <div className="p-8 space-y-6 text-left overflow-y-auto">
      {/* Notification Preferences */}
      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 text-sm">
          Notification Preferences
        </h4>
        <p className="text-xs text-gray-500 italic">
          Customize how this user is notified about their activities and
          important updates.
        </p>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-[10px]">✓</span>
            </div>
            <span className="text-sm text-gray-600">Email</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
            <span className="text-sm text-gray-600">SMS</span>
          </div>
        </div>
      </div>

      {/* General Notification */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-800 text-sm border-b pb-2">
          General Notification
        </h4>
        <NotificationRow label="Announcements" description="" />
        <NotificationRow label="Event Reminders" description="" />
        <NotificationRow label="Schedule Updates" description="" />

        <div className="bg-[#F9F5FF] p-3 rounded-lg mt-4">
          <p className="text-xs text-gray-500 italic">
            System announcements and reminders that are relevant to this user
            based on their role and assignments.
          </p>
        </div>
      </div>

      {/* Volunteer Notifications */}
      <div className="space-y-2 pt-4">
        <h4 className="font-bold text-gray-800 text-sm border-b pb-2">
          Volunteer Notifications
        </h4>
        <NotificationRow
          label="Shift Assignments"
          description="New shift, assignments and reminders"
          showEmailTag
        />
        <NotificationRow
          label="Hours Approval"
          description="Approval of volunteer hours (submitter/responder)"
          showEmailTag
        />
        <NotificationRow
          label="Training & Credential Alerts"
          description="Training and credential expiration notifications"
          showEmailTag
        />
        <NotificationRow
          label="Volunteer Opportunities"
          description="New or open volunteer opportunities notifications Learn more..."
          showEmailTag
        />
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-6 pt-10 pb-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-48 py-2.5 bg-[#0061B0] text-white rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSendInvite}
          className="w-48 py-2.5 bg-[#D90000] text-white rounded-lg font-bold shadow-md hover:bg-red-800 transition-all"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default Notifications;
