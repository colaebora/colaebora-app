import axios from 'axios';

export const colaClient = axios.create({
  baseURL: process.env.COLAEBORA_API_BASE_URL,
  validateStatus: () => true, // not to throw exceptions on non-200 statuses
});
