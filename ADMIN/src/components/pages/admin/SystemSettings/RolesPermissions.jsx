
import rolesData from './rolespermidata.json'; 
import edit from "../../../../assets/edit.png";
import delet from "../../../../assets/delet.png";

const RolesPermissions = () => {
  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border
       border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
         
          <thead>
            <tr className="bg-[#F7EEFA]"> 
              <th className="px-6 py-4 text-[#2D2D2D] font-semibold text-sm">Role Name</th>
              <th className="px-6 py-4 text-[#2D2D2D] font-semibold text-sm">Description</th>
              <th className="px-6 py-4 text-[#2D2D2D] font-semibold text-sm">Permissions</th>
              <th className="px-6 py-4 text-[#2D2D2D] font-semibold text-sm text-right">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-300">
            {rolesData.map((item) => (
              <tr key={item.id} className="bg-[#FFF5F6] hover:bg-[#FFF9FC] transition-colors">
                <td className="px-6 py-2 text-gray-600 text-sm">{item.roleName}</td>
                <td className="px-6 py-2 text-gray-500 text-sm">{item.description}</td>
                <td className="px-6 py-2 text-gray-600 text-sm">{item.permissions}</td>
                <td className="px-6 py-2 text-right">
                  <div className="flex justify-end gap-3">
                    
                    <button className="p-1.5 rounded-md bg-[#FFF0E6] text-[#FE7A36] hover:bg-[#FFE0CC] transition-colors">
                      <img src={edit} alt="edit" className="w-5 h-5" />
                    </button>
                    
                    <button className="p-1.5 rounded-md bg-[#FFEBEB] text-[#FF0000] hover:bg-[#FFD6D6] transition-colors">
                      <img src={delet} alt="delet" className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesPermissions;