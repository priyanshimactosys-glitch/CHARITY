import React, { useState } from "react";
import AddUserIconImg from "../../../../../assets/icons/adduser.png";

const PermissionRow = ({ label, sectionTitle, permissions, onToggle }) => (
  <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50/50 px-4">
    <div className="col-span-4 text-sm text-gray-600 font-medium">{label}</div>
    {["view", "create", "edit", "delete"].map((type) => (
      <div key={type} className="col-span-2 flex justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={permissions[type] || false}
            onChange={() => onToggle(sectionTitle, label, type)}
          />
          <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
      </div>
    ))}
  </div>
);

const PermissionSection = ({
  title,
  items,
  showAddButton,
  sectionPermissions,
  onToggle,
}) => (
  <div className="mb-6 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mx-1">
    <div className="px-4 py-4 flex justify-between items-center">
      <h4 className="font-bold text-gray-800 text-lg relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-8 h-1 bg-red-600 rounded-full"></span>
      </h4>
    {showAddButton && (
  <button
    type="button"
    onClick={() => alert("Add User Clicked!")}
    className="bg-[#E30613] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-red-700 transition-all"
  >
     
     
    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <img 
        src={AddUserIconImg} 
        alt="add" 
        className="w-3.5 h-3.5 object-contain" 
      />
    </div>
    Add User
  </button>
)}
    </div>
    <div className="grid grid-cols-12 gap-4 bg-[#F9F5FF] py-2.5 px-4 text-[13px] font-bold text-gray-800 border-b border-gray-100">
      <div className="col-span-4">{title}</div>
      <div className="col-span-2 text-center">View</div>
      <div className="col-span-2 text-center">Create</div>
      <div className="col-span-2 text-center">Edit</div>
      <div className="col-span-2 text-center">Delete</div>
    </div>
    <div className="bg-pink-50">
      {items.map((item, idx) => (
        <PermissionRow
          key={idx}
          label={item}
          sectionTitle={title}
          permissions={sectionPermissions[item] || {}}
          onToggle={onToggle}
        />
      ))}
    </div>
  </div>
);

const RolesPermissions = ({ onCancel, onSave, onAssign }) => {
  const sections = [
    {
      title: "Users",
      items: ["View Users", "Edit Users", "Assign Roles", "Deactivate Users"],
      showAdd: true,
    },
    {
      title: "Operations",
      items: ["Services management", "Appointments + Walk-ins", "Calendar"],
    },
    {
      title: "People Management",
      items: ["Users (Staff Account, Volunteers)", "Career/Volunteers"],
    },
    {
      title: "Content Management",
      items: ["Pages", "Page template", "Announcements"],
    },
    {
      title: "Volunteer Management",
      items: ["Availability", "Volunteer schedules", "Hours approval"],
    },
    {
      title: "Marketing & Engagement",
      items: ["Coupons management", "Donations / Give settings"],
    },
    { title: "Reports & Logs", items: ["Audit trails (admin only)"] },
    {
      title: "System Settings",
      items: [
        "Organization info",
        "Contact info",
        "Logo & branding",
        "Footer content",
        "Roles & permissions",
      ],
    },
  ];

  // State initialization
  const [userPermissions, setUserPermissions] = useState(() => {
    const initialState = {};
    sections.forEach((sec) => {
      initialState[sec.title] = {};
      sec.items.forEach((item) => {
        initialState[sec.title][item] = {
          view: true,
          create: false,
          edit: false,
          delete: false,
        };
      });
    });
    return initialState;
  });

  // Function defined inside the main component scope
  const handleToggle = (section, item, type) => {
    setUserPermissions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: {
          ...prev[section][item],
          [type]: !prev[section][item][type],
        },
      },
    }));
  };

  const handleCancelClick = (e) => {
    if (e) e.preventDefault();
    if (onCancel) onCancel();
  };
  const handleSaveClick = () => {
    console.log("Permissions Data:", userPermissions);
    alert("Changes Saved!");
    if (onSave) onSave(userPermissions);
  };
  const handleAssignClick = () => {
    alert("Role Assigned!");
    if (onAssign) onAssign(userPermissions);
  };
  return (
    <div className="p-4 space-y-2 bg-white">
      <div className="space-y-4">
        {sections.map((sec, idx) => (
          <PermissionSection
            key={idx}
            title={sec.title}
            items={sec.items}
            showAddButton={sec.showAdd}
            sectionPermissions={userPermissions[sec.title]}
            onToggle={handleToggle}
          />
        ))}
      </div>
      {/* Footer Buttons */}
      <div className="flex justify-center gap-6 pt-10 pb-6 bg-white sticky bottom-0 border-t mt-4 z-[50]">
        <button
          type="button"
          onClick={handleCancelClick}
          className="w-44 py-2.5 border border-gray-400 rounded-lg font-bold text-gray-600 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSaveClick}
          className="w-44 py-2.5 bg-[#0061B0] text-white rounded-lg font-bold shadow-lg hover:bg-blue-800 transition-colors cursor-pointer"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleAssignClick}
          className="w-44 py-2.5 bg-[#D90000] text-white rounded-lg font-bold shadow-lg hover:bg-red-800 transition-colors cursor-pointer"
        >
          Assign Role
        </button>
      </div>
    </div>
  );
};

export default RolesPermissions;
