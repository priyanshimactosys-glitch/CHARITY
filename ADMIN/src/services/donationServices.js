import API from '../api';

export const getDonations = () => API.get('/donations');
export const getDonationSummary = () => API.get('/donations/summary');
export const createPickupRequest = (data) => API.post('/donations/pickup', data);
export const updateDonation = (id, data) => API.put(`/donations/${id}`, data);