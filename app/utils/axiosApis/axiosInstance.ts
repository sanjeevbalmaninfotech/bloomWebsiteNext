import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  // You can set your baseURL here if applicable
  // baseURL: 'https://yourapi.com/api',
  timeout: 20000 // 20 seconds, adjust as needed
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add auth token if present
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    // Example: Redirect to login on 401
    // if (error.response?.status === 401) {
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
