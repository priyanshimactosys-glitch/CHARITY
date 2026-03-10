import React, { useState } from 'react';
import { X, Plus, Trash2, UploadCloud, ChevronRight } from 'lucide-react';
import addNewIcon from "../../../../assets/icons/AddNew1.jpg";
 
export const AddServiceModal = ({ isOpen, onClose, activeTab, setActiveTab }) => {
 
  // States for functionality
  const [formData, setFormData] = useState({
    serviceName: '',
    shortSubtitle: '',
    category: 'Admin Support',
    status: 'Active',
    bookingType: 'Appointment Required',
    duration: '',
    location: 'Secure Services Room (Mon-Fri, 9:00am-5:00pm)',
    addToCategory: 'Identity & Government Services',
    externalLink: '',
    internalRef: '',
    confirmationMsg: "Appointment confirmed! Here's a reminder of what to bring and how to prepare."
  });
 
  const [checklist, setChecklist] = useState([
    'Use fingerprint form provided',
    'Valid photo ID',
    'Bring payment'
  ]);
 
  if (!isOpen) return null;
 
  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
 
  const addItem = () => {
    const val = prompt("Enter checklist item:");
    if (val) setChecklist([...checklist, val]);
  };
 
  const removeItem = (index) => {
    setChecklist(checklist.filter((_, i) => i !== index));
  };
 
  const triggerUpload = (label) => {
    alert(`${label} upload window opened`);
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
  };
 
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/20 backdrop-blur-[1px] p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl relative flex flex-col my-8 h-auto overflow-visible">
       
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-white rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-800">Add Service</h2>
          <button onClick={onClose} className="text-gray-900 border border-gray-300 rounded-full p-1 hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>
 
        {/* Tabs */}
        <div className="flex border-b text-[13px] font-bold text-gray-400 bg-white">
          {['Main Setting', 'Advanced Settings', 'What to Bring'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 uppercase border-b-2 transition-all ${activeTab === tab ? 'border-[#D32F2F] text-[#D32F2F]' : 'border-transparent'}`}
            >
              {tab}
            </button>
          ))}
        </div>
 
        {/* Body Content */}
        <div className="p-8 h-auto overflow-visible">
         
          {/* MAIN SETTING TAB */}
          {activeTab === 'Main Setting' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Service Name</label>
                  <input type="text" name="serviceName" value={formData.serviceName} onChange={handleInputChange} placeholder="Notary Services" className="w-full border rounded-lg p-2.5 text-sm outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Short Subtiile (optional)</label>
                  <input type="text" name="shortSubtitle" value={formData.shortSubtitle} onChange={handleInputChange} placeholder="Professional notarization for prsonal" className="w-full border rounded-lg p-2.5 text-sm outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none bg-gray-50 font-bold text-gray-500"><option>Admin Support</option></select>
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Status</label>
                  <div className="flex gap-4">
                    {['Active', 'Coming Soon', 'Hidden'].map(st => (
                       <label key={st} className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                         <input type="radio" name="status" checked={formData.status === st} onChange={() => setFormData({...formData, status: st})} className="accent-green-600" /> {st}
                       </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Booking Type</label>
                  <select name="bookingType" value={formData.bookingType} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none font-bold text-gray-500"><option>Appointment Required</option></select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Booking (optional)</label>
                    <select name="duration" value={formData.duration} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none font-bold text-gray-400"><option value="">Duration e.g. 20 min</option><option value="20">20 min</option></select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Fees (optional)</label>
                    <div onClick={() => triggerUpload('Fees')} className="border border-dashed rounded-lg p-2.5 text-[10px] text-red-500 font-bold flex items-center justify-center gap-1 cursor-pointer"><Plus size={14} /> Add fees and receipts</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Locations/Hours</label>
                  <select name="location" value={formData.location} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none font-bold text-gray-400"><option>Secure Services Room (Mon-Fri, 9:00am-5:00pm)</option></select>
                </div>
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <div className="w-[300px] h-40 rounded-xl overflow-hidden bg-gray-100 border shadow-sm"><img src={addNewIcon} className="w-full h-full object-cover opacity-80" /></div>
                <button onClick={() => triggerUpload('Service Image')} className="w-[300px] border-2 border-gray-800 bg-white py-2 rounded-lg text-xs font-black uppercase tracking-tighter"><Plus size={16} className="inline mr-1" strokeWidth={3}/> Add Image</button>
                <div className="w-[300px] h-40 rounded-xl overflow-hidden bg-gray-100 border shadow-sm"><img src={addNewIcon} className="w-full h-full object-cover opacity-80" /></div>
                <div className="w-[300px] text-left">
                   <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Add to Category</label>
                   <input type="text" name="addToCategory" value={formData.addToCategory} onChange={handleInputChange} placeholder="Identity & Government Services" className="w-full border rounded-lg p-2 text-xs outline-none" />
                </div>
              </div>
            </div>
          )}
 
          {/* ADVANCED SETTINGS TAB */}
          {activeTab === 'Advanced Settings' && (
            <div className="space-y-6 max-w-4xl mx-auto text-left">
              <div>
                <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">External Booking Link (optional)</label>
                <input type="text" name="externalLink" value={formData.externalLink} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Internal Reference Name (optional)</label>
                <input type="text" name="internalRef" value={formData.internalRef} onChange={handleInputChange} className="w-full border rounded-lg p-2.5 text-sm outline-none" />
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Available Hours</label>
                  <select className="w-full border rounded-lg p-2.5 text-sm outline-none bg-gray-50 font-bold text-gray-400"><option>Secure Services Room (Mon-Fri, 9:00am-5:00pm)</option></select>
                </div>
                <button onClick={() => triggerUpload('Image')} className="border-2 border-gray-800 bg-white px-6 py-2 rounded-lg text-xs font-black uppercase flex items-center gap-2 h-[42px]"><Plus size={16} strokeWidth={3} /> Add Image</button>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-7 space-y-2">
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">What to Bring Checklist</label>
                  {checklist.map((item, i) => (
                    <div key={i} className="flex items-center justify-between border rounded-lg p-2 text-xs font-semibold text-gray-600 bg-white shadow-sm">
                      <span className="flex items-center gap-2 text-green-600 font-bold"><div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px]">✓</div> {item}</span>
                      <Trash2 size={14} onClick={() => removeItem(i)} className="text-red-400 cursor-pointer" />
                    </div>
                  ))}
                  <div className="flex items-center justify-between border rounded-lg p-2 text-xs font-semibold text-gray-400 bg-gray-50/30">
                    <span>See full checklist after saving</span>
                    <button onClick={addItem} className="bg-white border px-3 py-1 rounded text-[10px] font-black uppercase flex items-center gap-1"><Plus size={12}/> Add Items</button>
                  </div>
                </div>
                <div className="col-span-5">
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Form Downloads</label>
                  <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 bg-blue-50/20 flex flex-col items-center justify-center text-center gap-2">
                    <UploadCloud className="text-blue-300" size={36} />
                    <p className="text-[10px] font-bold text-gray-500">Drop or select files here for clients to access related forms or documents</p>
                    <button onClick={() => triggerUpload('Form PDF')} className="bg-[#0061AF] text-white px-6 py-2 rounded-lg text-[10px] font-bold uppercase mt-2 shadow-sm">Upload PDF</button>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Fees (optional display)</label>
                <div onClick={() => triggerUpload('Fees')} className="border rounded-lg p-2.5 bg-white"><div className="flex items-center gap-2 text-[10px] text-red-500 font-bold cursor-pointer"><Plus size={14}/> Add fees and receipts</div></div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Confirmation Message (optional)</label>
                <div className="border rounded-lg p-3 bg-white space-y-4">
                  <textarea name="confirmationMsg" value={formData.confirmationMsg} onChange={handleInputChange} className="w-full text-xs text-gray-500 italic outline-none border-none resize-none" rows="2" />
                  <button onClick={() => triggerUpload('Confirmation PDF')} className="text-[10px] font-black text-red-500 uppercase flex items-center gap-1"><Plus size={14} /> Attach Form/PDF</button>
                </div>
              </div>
            </div>
          )}
 
          {/* WHAT TO BRING TAB */}
          {activeTab === 'What to Bring' && (
            <div className="space-y-6 text-left">
              <div className="flex justify-between items-center"><label className="text-[10px] font-extrabold uppercase text-gray-700">What to Bring Checklist</label><button className="text-[10px] font-bold text-gray-400 flex items-center">Recorders <ChevronRight size={14}/></button></div>
              <div className="space-y-2">
                {checklist.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between border rounded-lg p-2 text-xs font-semibold text-gray-600 bg-white shadow-sm">
                      <span className="flex items-center gap-2 text-green-600 font-bold"><div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px]">✓</div> {item}</span>
                      <Trash2 size={14} onClick={() => removeItem(idx)} className="text-red-400 cursor-pointer" />
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-2"><button onClick={addItem} className="bg-gray-100 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase flex items-center gap-1"><Plus size={14}/> Add Items</button></div>
              </div>
              <p className="text-[10px] text-gray-400 font-medium">These Checklist items will be listed for the client during Step 2 of the booking process</p>
             
              <div className="space-y-4 pt-4">
                <div>
                  <label className="block text-[10px] font-extrabold mb-1.5 uppercase text-gray-700">Checklist PDF Upload (optional)</label>
                  <div className="border rounded-lg p-3 bg-white space-y-4">
                    <div className="flex items-center gap-3">
                        <button onClick={() => triggerUpload('Checklist PDF')} className="bg-purple-50 text-purple-400 px-4 py-1.5 rounded text-[10px] font-bold flex items-center gap-1"><Plus size={14}/> Upload PDF</button>
                        <span className="text-gray-400 text-[10px] font-bold">Drop or select files here</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium border-t pt-3">Drop or select files here to provide related forms or downloads (optional)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
 
        {/* Footer Buttons */}
        <div className="p-6 border-t flex gap-4 bg-white rounded-b-2xl sticky bottom-0">
          <button onClick={onClose} className="flex-1 py-3 bg-[#0061AF] text-white font-bold rounded-lg text-sm uppercase shadow-md active:scale-95 transition-all">Cancel</button>
          <button onClick={() => { console.log(formData); alert("Created!"); onClose(); }} className="flex-1 py-3 bg-[#D32F2F] text-white font-bold rounded-lg text-sm uppercase shadow-md active:scale-95 transition-all">Create</button>
        </div>
      </div>
    </div>
  );
};
 