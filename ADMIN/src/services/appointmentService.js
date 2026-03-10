import API from '../api';

// Appointments & Walk-ins
export const getAllAppointments = () => API.get('/appointments');
export const addWalkIn = (data) => API.post('/appointments/walkin', data);
export const addAppointment = (data) => API.post('/appointments', data);
export const updateAppointment = (id, data) => API.put(`/appointments/${id}`, data);
export const cancelAppointment = (id) => API.delete(`/appointments/${id}`);
export const getClientList = () => API.get('/appointments/clients');