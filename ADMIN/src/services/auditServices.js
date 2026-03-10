import API from '../api';

export const getAuditLogs = () => API.get('/audit-trail'); 
export const createAuditLog = (data) => API.post('/audit-trail', data);
export const exportAuditLogs = () => API.get('/audit-trail/export');