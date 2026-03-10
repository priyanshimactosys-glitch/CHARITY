import API from '../api/index'; // Aapka axios instance

// Services
export const createService = (data) => API.post('api/services', data);
export const getAllServices = () => API.get('api/services');
export const getServiceById = (id) => API.get(`/services/${id}`);
export const updateService = (id, data) => API.put(`/services/${id}`, data);

// Calendar & Events
export const getEvents = () => API.get('/events');
export const createEvent = (data) => API.post('/events', data);
export const getRooms = () => API.get('/rooms');
export const scheduleRoom = (data) => API.post('/rooms/schedule', data);